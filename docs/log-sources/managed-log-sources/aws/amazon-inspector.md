---
title: Amazon Inspector
sidebar_position: 4
---

The Amazon Inspector Matano managed log source lets you ingest your Amazon Inspector findings directly into Matano.

Amazon Inspector provides automated vulnerability scanning and reports findings from scanning your EC2 instances, ECR images, and Lambda functions.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `AWS_INSPECTOR`.

```yml
name: "aws_inspector"

managed:
  type: "AWS_INSPECTOR"
```

## Tables

The Amazon Inspector managed log source supports a single table containing Amazon Inspector findings.

## Ingest

### Managed (Polling)

Matano will automatically pull Amazon Inspector findings from your AWS account by using the `ListFindings` Amazon Inspector API on a constant schedule (defaults to every 5 minutes).

## Schema

Amazon Inspector findings data is normalized to ECS fields. Custom fields are normalized into the `aws.inspector` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_inspector/log_source.yml
