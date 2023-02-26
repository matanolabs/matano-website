---
title: AWS Web Application Firewall (WAF) logs
sidebar_label: AWS WAF
sidebar_position: 5
---

The AWS Web Application Firewall (WAF) Matano managed log source lets you ingest your AWS WAF protected traffic logs directly into Matano.

WAF traffic logs provide detailed information about traffic that is analyzed by your web access control lists (ACLs). The AWS WAF managed log source supports AWS WAF but not AWS WAF Classic.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `AWS_WAF`.

```yml
name: "aws_waf"

managed:
  type: "AWS_WAF"
```

## Tables

The AWS WAF managed log source supports a single table containing WAF traffic logs.

## Ingest

### S3

AWS WAF logging must be enabled on your Web ACL and configured to deliver to the desired S3 Bucket ARN. For more on configuring a Web ACL to deliver traffic logs, see the relevant AWS documentation:

- [*AWS WAF logging destinations: Amazon S3*](https://docs.aws.amazon.com/waf/latest/developerguide/logging-s3.html)

You can provide the S3 bucket you are using for delivery to Matano by using the `ingest.s3_source` configuration in your `log_source.yml` (Bring your own bucket).

## Schema

AWS WAF log data is normalized to ECS fields. Custom fields are normalized into the `aws.waf` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_waf/log_source.yml