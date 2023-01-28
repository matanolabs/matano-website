---
title: Amazon S3 Server Access Logs
sidebar_label: Amazon S3 Access
sidebar_position: 2
---

The Amazon S3 Server Access Logs Matano managed log source lets you ingest your S3 server access logs directly into Matano.

Amazon S3 server access logs contain detailed records for the requests that are made to a bucket.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `AWS_S3ACCESS`.

```yml
name: "aws_s3access"

managed:
  type: "AWS_S3ACCESS"
```

## Tables

The S3 access logs managed log source supports a single table containing S3 access logs.


## Ingest

### S3

S3 server access logs are always delivered to S3 buckets. You can provide the S3 bucket you are using for delivery to Matano by using the `ingest.s3_source` configuration in your `log_source.yml` (Bring your own bucket).

## Schema

S3 access log data is normalized to ECS fields. Custom fields are normalized into the `aws.s3access` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_s3access/log_source.yml