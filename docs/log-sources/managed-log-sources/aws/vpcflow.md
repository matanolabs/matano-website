---
title: AWS VPC Flow Logs
sidebar_label: VPC Flow
sidebar_position: 4
---

The AWS VPC Flow logs managed log source lets you ingest your AWS VPC Flow logs directly into Matano.

VPC Flow logs provide detailed information about network traffic in and out of your Amazon Virtual Private Cloud (VPC).

## Usage

Use the managed log source by specifying the `managed.type` property in your log_source as `AWS_VPCFLOW`.

```yml
name: "aws_vpcflow"

managed:
  type: "AWS_VPCFLOW"
```

## Tables

The AWS VPC Flow managed log source supports a single table containing VPC flow logs.

## Ingest

### S3

AWS VPC Flow logs must be enabled on your VPC. Matano currently **only supports VPC Flow logs that are configured for delivery to an S3 bucket in the `Text` log lines** format.

You can provide the S3 bucket you are using for delivery to Matano by using the `ingest.s3_source` configuration in your `log_source.yml` (Bring your own bucket).

## Schema

AWS VPC Flow log data is normalized to ECS fields. Custom fields are normalized into the `aws.vpcflow` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_vpcflow/log_source.yml