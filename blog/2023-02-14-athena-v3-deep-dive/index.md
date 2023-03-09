---
title: A deep dive into Amazon Athena Engine version 3
authors: "samrose"
keywords: ["athena", "aws", "amazon", "big data"]
tags: ["engineering"]
---

AWS launched the latest version of their Amazon Athena query engine — Athena engine version 3 at last year's re:Invent. The new engine version includes many exciting new features and improvements, including improved Apache Iceberg support & performance, new statements and functions, and other features. Let's explore some of these improvements and how you can use them with Matano.

<!-- truncate -->

## Apache Iceberg performance improvements

One of the greatest improvements in Athena engine version is performance related improvements when using Apache Iceberg tables, especially when using hidden partitioning.

As a recap, Apache Iceberg supports a concept of *hidden partitioning* where one can declare a table to be partitioned by a dimension of time on a timestamp field without having to create a separate column. For example, in Matano, all data tables are partitioned hourly on the `ts` timestamp column. Traditionally, this would require creating a `partition_hour` column with values like `2022-11-02-03-13`, adding a partition on that column, and having to include that column in every query.

```sql
select * from table where ...
    and partition_hour > '2022-11-02-03-13' and partition_hour < '2022-11-02-03-13'
```

<div align="center">

*The traditional way including partition column in the query*

</div>

Instead with Iceberg hidden partitioning, we can simply declare that the table should be partitioned by hour on the `ts` column and we can simply write queries where we add a constraint on the timestamp column:

```sql
select * from table where ts > current_timestamp - interval '10' days
```

<div align="center">

*Query leveraging Athena hidden partitioning*

</div>

Here we rely on the query engine to implement Iceberg hidden partitioning, perform predicate pushdown based on the timestamp column, and only scan the relevant partitions. The new Athena engine version 3 improves the integration with Iceberg hidden partitioning.

In internal testing, we've seen query performance improvements using Athena engine version with queries running **twenty times faster** with **25 times less data scanned** when running queries that span many partitions.

## Merge (upsert) support for Apache Iceberg in Athena

A very powerful feature in Apache Iceberg is the support for ACID transactions, including the ability to upsert data into an existing table. Athena engine version 3 adds upsert support for Apache Iceberg, using [the `MERGE INTO` statement](https://docs.aws.amazon.com/athena/latest/ug/merge-into-statement.html). The statement allows you to atomically update, delete, and/or insert rows in a single statement.

Merge support for Iceberg tables in Athena unlocks many interesting usecases. For example, in Matano for AWS, enrichment tables support a [merge write mode](https://www.matano.dev/docs/enrichment/overview#merge-write-mode), which lets users add new data into a table based on a primary key and upsert existing rows. Under the hood, the enrichment table is updated using an Athena `MERGE INTO` query that either updates existing rows or inserts new rows based on the value of a user defined primary key.

```sql
MERGE INTO enrich_user_info main USING enrich_user_info_temp new
    ON (main.user_id = new.user_id)
    WHEN MATCHED
        THEN UPDATE SET (
            main.user_id = new.user_id,
            main.user_name = new.user_name
            ...
        )
    WHEN NOT MATCHED
        THEN INSERT (user_id, user_name)
            VALUES (new.user_id, new.user_name)
```

<div align="center">

*A simplified example of how Matano adds new data to enrichment tables when using the merge write mode.*

</div>


## Athena views for Apache Iceberg tables are supported in engine version 3

A great quality of life improvement is that Athena views are now supported for Apache Iceberg tables. This unlocks the possibility to create virtual tables based on a query. This is very useful when dealing with highly nested struct data, which both doesn't render well in the Athena UI and also does not work with visualization tools like Amazon Quicksight.

With the new Athena view support for Iceberg tables, Matano data tables in AWS automatically have an associated flattened view created that transforms nested fields into flattened top level fields. This allows you to both easily inspect Matano data in the Athena console UI and also use Matano data in visualization tools like Apache Superset or Grafana.

## Vacuum command for Apache Iceberg tables

One of the key actions that need to be performed with Apache Iceberg tables to improve performance is table maintenance. This includes compaction (optimization) of small data files, rewriting Iceberg manifest files, and snapshot file expiration (and orphan file removal). If you need a refresher on Iceberg table maintenance, feel free to check out our [earlier primer on Iceberg table maintenance](../2022-11-04-automated-iceberg-table-maintenance/index.md).

Athena already supported optimizing small files using the `OPTIMIZE` statement, and engine version 3 [adds support for expiring snapshot files](https://docs.aws.amazon.com/athena/latest/ug/vacuum-statement.html) and removing orphan data files using the `VACUUM` statement. The statement will both remove unneeded snapshots past a certain configurable age as well as delete data files that are no longer needed, e.g. small data files that were optimized by a compaction job.

## MATCH_RECOGNIZE support in Athena

`MATCH_RECOGNIZE` is an interesting clause supported in Trino that allows one to select a pattern of rows. It is useful when analyzing sequences of events and matching them to a pattern of behavior, with usecases including tracking trends in business data and discovering unusual or fraudulent behavior.

### Using Matano to find lateral movement in AWS CloudTrail with MATCH_RECOGNIZE

One of the applications of the MATCH RECOGNIZE clause is to security data, particularly for detecting unusual or suspicious behavior in security logs.

With Matano, you can easily ingest all your security data into a security data lake and leverage Big Data engines to perform analytics.

Using the [Matano managed log source for AWS CloudTrail](https://www.matano.dev/docs/log-sources/managed/aws/cloudtrail), we can automatically have an optimized Apache Iceberg table with all of our AWS CloudTrail data available to query in Amazon Athena.

:::tip Matano - The security lake platform

If you're not familiar with Matano, Matano is a cybersecurity platform built on a security data lake. Security teams use Matano to store and analyze petabytes of data in an open security data lake and detect threats in realtime. [*Learn more*](https://www.matano.dev).

:::

Lateral movement refers to techniques used by attackers after initial access to move deeper into an environment and gain additional access to additional resources and data. This is often accompanied by privilege escalation in cloud environments like AWS, where identity privileges (IAM permissions) are elevated. Here's a simple demonstrative example of a query that uses `MATCH_RECOGNIZE` on AWS CloudTrail data and may indicate lateral movement and privilege escalation:

```sql
with cloudtrail as (
    SELECT * FROM aws_cloudtrail_view
        where ts > current_timestamp - interval '7' day
)
SELECT * FROM cloudtrail MATCH_RECOGNIZE(
     PARTITION BY user_name,
        aws_cloudtrail_user_identity_session_context_creation_date
     ORDER BY ts
     MEASURES
            U.ts as enumerate_ts
            U.event_action AS enumerate_action,
            B.ts AS assume_ts
     ONE ROW PER MATCH
     AFTER MATCH SKIP PAST LAST ROW
     PATTERN ((A{2,} | B )+ C)
     SUBSET U = (A, B)
     DEFINE
            A as event_action = 'LookupEvents'
            ,B as event_action = 'ListUserPolicies'
                or event_action = 'ListAttachedUserPolicies'
                or event_action = 'ListGroups'
            ,C as event_action = 'AssumeRole'
     )
```

This pattern looks for a sequence of events within the last 7 days of AWS Cloudtrail logs where the following sequence of events occurs:

* Within a certain user identity session (specified with `PARTITION BY`)
* The pattern first finds an instance where the user either:
    * Calls the IAM `ListUserPolicies`, `ListAttachedUserPolicies`, or `ListGroups` API's, which are often used to discover what privileges a user has.
    * Repeatedly calls the CloudTrail `LookupEvents` API, which is used to enumerate the actions that a certain IAM identity possesses.
* The pattern is then matched if after the previous action, within the same user session, the user calls the `AssumeRole` API, indicating possible privilege escalation.

The MATCH_RECOGNIZE query syntax is powerful and should unlock interesting analytical usecases.

## Gotchas

Upgrading to Athena engine version has been a pretty smooth experience. We've only experienced minor issues:

#### Timestamp precision support

Athena engine version 3 [does not support](https://docs.aws.amazon.com/athena/latest/ug/engine-versions-reference-0003.html#engine-versions-reference-0003-known-limitations) a timestamp precision other than milliseconds (`timestamp(3)`). This is particularly an issue for Iceberg tables as the Iceberg specification requires a precision of milliseconds (`timestamp(6)`) for timestamp columns. The workaround is to cast timestamp columns like `cast "ts" as timestamp`, but this is obviously inconvenient. The Athena team is working on adding support for other timestamp precisions.

## Conclusion

One of our goals with Matano is building a high performance petabyte scale security data lake on open standards that lets you leverage the latest advances in modern Big Data query engines like Amazon Athena.

We're excited by the improvements in Athena engine version 3 and the usecases and performance it will provide our users.
