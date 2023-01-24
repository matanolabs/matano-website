---
title: Matano Tables overview
sidebar_label: Overview
sidebar_position: 3
---

All Matano data is stored as Apache Iceberg tables, with data stored in Parquet files on S3. You can query and interact with these like any other Iceberg table, using Athena, Spark, or any other technology supporting Iceberg.

## Schema

Matano tables have schemas based on the specified log source configuration. See [Log source schema](../log-sources/schema.md) for more on specifying the schema. You are encouraged to conform to ECS when defining schemas to improve correlation. All Matano tables are required to have a **`ts`** column in their schema.

## Partitioning

Matano log tables are partitioned **hourly** by time (on the `ts` column). Matano tables use Apache Iceberg [hidden partitioning](https://iceberg.apache.org/docs/latest/partitioning/) so you don't need to manually specify the hour partition. Instead, if you specify a predicate on the `ts` column, that will be automatically mapped to the corresponding partition by Iceberg. For example, you can write the following query, and it will automatically map to using the correct partitions.

```sql
SELECT * FROM aws_cloudtrail
WHERE ts BETWEEN timestamp '2018-12-01 10:00:00' AND timestamp '2018-12-01 12:00:00'
```

## Querying a Matano table

**See more on [Querying Iceberg tables](https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg-table-data.html) in Athena.**

You can query a Matano table from Athena using the following syntax:

```sql
SELECT * FROM matano.table_name [WHERE predicate]
```

## Optimization and Iceberg Table maintenance

Apache Iceberg tables require regular table maintenance to ensure optimal performance and cost efficiency. Matano automatically performs Iceberg table maintenance, including rewriting data files (compaction), expiring snapshots, and rewriting manifests. The maintenance is run asynchronously every hour on each partition. For more information, see [this blog post](/blog/2022/11/04/automated-iceberg-table-maintenance).

## Advanced

### Performing ACID transactions

Iceberg tables support ACID transactions such as deleting, inserting, and updating. You can use this feature if you need to modify your data for compliance, legal, or any other reason, without having to copy and re-load your entire dataset.

See [Updating Iceberg table data](https://docs.aws.amazon.com/athena/latest/ug/querying-iceberg-updating-iceberg-table-data.html) on the syntax to perform Update and Delete transactions on your tables.

## Notes

Matano tables are stored in an AWS Glue database named **matano**, with the Iceberg table name as the table name specified as per your log source configuration.
