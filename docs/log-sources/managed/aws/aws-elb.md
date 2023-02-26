---
title: AWS Elastic Load Balancer (ELB) logs
sidebar_label: AWS ELB
sidebar_position: 3
---

The AWS Elastic Load Balancer (ELB) Matano managed log source lets you ingest your AWS ELB access logs directly into Matano.

ELB access logs provide detailed information about requests sent to your load balancer. The AWS ELB managed log source supports Classic Load Balancer, Application Load Balancer, and Network Load Balancer logs.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `AWS_ELB`.

```yml
name: "aws_elb"

managed:
  type: "AWS_ELB"
```

## Tables

The AWS ELB managed log source supports a single table containing ELB access logs.

## Ingest

### S3

AWS ELB logs must be enabled on your load balancer and are always delivered to S3 buckets. For more on configuring a load balancer to deliver access logs, see the relevant AWS documentation:

- [*Access logs for your Classic Load Balancer*](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html)
- [*Access logs for your Application Load Balancer*](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-access-logs.html)
- [*Access logs for your Network Load Balancer*](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-access-logs.html)

You can provide the S3 bucket you are using for delivery to Matano by using the `ingest.s3_source` configuration in your `log_source.yml` (Bring your own bucket).

## Schema

AWS ELB log data is normalized to ECS fields. Custom fields are normalized into the `aws.elb` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_elb/log_source.yml