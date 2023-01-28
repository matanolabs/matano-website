---
title: AWS CloudTrail
sidebar_label: CloudTrail
sidebar_position: 1
---

The CloudTrail Matano managed log source lets you ingest your AWS CloudTrail logs directly into Matano.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `AWS_CLOUDTRAIL`.

```yml
name: "aws_cloudtrail"

managed:
  type: "AWS_CLOUDTRAIL"
```

Then create tables for each of the Cloudtrail log types you want to ingest,  under a `tables/` subdirectory for your log source. For example, if you want to ingest Cloudtrail (default) and Cloudtrail Insights logs, create table files like so:

```
my-matano-dir/
└── log_sources/
    └── cloudtrail/
        └── log_source.yml
        └── tables/
            └── default.yml
            └── insights.yml
            └── ...
```

```yml
# log_sources/aws_cloudtrail/tables/default.yml
name: "default"
```

For a complete reference on configuring log sources, including extending the table schema, see [_Log source configuration_](../../configuration.md).

## Tables

The AWS CloudTrail managed log source supports the following tables:

- default
  - A table is created for actual CloudTrail logs.
- digest
  - CloudTrail digest files are transformed into a separate Matano table.
- insights
  - CloudTrail insights logs are processed into a Matano table.

<!--
**CloudTrail Logs:** A table is created for actual CloudTrail logs.

**CloudTrail Digest:** Your CloudTrail digest files are transformed into a separate Matano table.

**CloudTrail Insights:** CloudTrail insights files are processed into a Matano table. -->

Matano automatically ingests data in your CloudTrail bucket into the corresponding table (e.g. cloudtrail_insights, cloudtrail).

## Ingest

### S3 (default)

For a log source named `aws_cloudtrail`, a file under the path `/AWSLogs/249463413804/CloudTrail-Digest/us-east-1/2022/10/15/249463413804_CloudTrail-Digest_us-east-1_cheeseiad_us-east-1_20221015T195315Z.json.gz` will be routed to the `digest` table.

#### Path scheme to table:

- `*Insights*` -> **insights**
- `*Digest*` -> **digest**
- *else* -> **default**


## Schema

CloudTrail data is normalized to ECS fields. Custom fields are normalized into the `aws` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_cloudtrail/log_source.yml


