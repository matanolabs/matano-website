---
title: AWS Config
sidebar_position: 5
---

The AWS Config managed log source lets you ingest your AWS Config configuration history data directly into Matano.

AWS Config lets you track configuration history, and configuration changes to your AWS resources. The configuration history table tracks all changes made to resources tracked by AWS Config.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `AWS_CONFIG_HISTORY`.

```yml
name: "aws_config_history"

managed:
  type: "AWS_CONFIG_HISTORY"
```

## Tables

The AWS Config history managed log source supports a single table containing AWS Config configuration history data.

## Ingest

### S3

Matano supports ingestion using S3. You can set up AWS Config to send configuration history data to an S3 bucket. The data is delivered every 6 hours. Consult the [AWS documentation](https://aws.amazon.com/blogs/mt/configuration-history-configuration-snapshot-files-aws-config/) for more information.

## Schema

AWS Config configuration history data is normalized to ECS fields. Custom fields are normalized into the `aws.config_history` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_config_history/log_source.yml
