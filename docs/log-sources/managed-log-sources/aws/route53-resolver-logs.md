---
title: AWS Route53 Resolver Logs
sidebar_label: AWS Route53
sidebar_position: 5
---

The AWS Route53 Resolver Logs Matano managed log source lets you ingest DNS logs for queries & responses from: 

- Queries that originate in Amazon Virtual Private Cloud VPCs that you specify, as well as the responses to those DNS queries.
- Queries from on-premises resources that use an inbound Resolver endpoint.
- Queries that use an outbound Resolver endpoint for recursive DNS resolution.
- Queries that use Route 53 Resolver DNS Firewall rules to block, allow, or monitor domain lists.

See the [AWS Route53 Docs](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-query-logs.html) for more information.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source.yml` configuration file as `AWS_ROUTE53_RESOLVER_LOGS`.

```yml
name: "aws_route53_resolver_logs"

managed:
  type: "AWS_ROUTE53_RESOLVER_LOGS"
```

For example, if you want to ingest AWS Route53 Resolver Logs (default table) may structure your log source under a subdirectory called `aws_route53` (for short) as follows:

```
my-matano-dir/
└── log_sources/
    └── aws_route53_resolver_logs/
        └── log_source.yml
```

For a complete reference on configuring log sources, including extending the table schema, see [_Log source configuration_](../../configuration.md).

## Tables

The AWS Route53 Resolver Logs managed log source supports the following tables:

- default (aws_route53_resolver_logs)

## Ingest

### S3 (default)

For a log source named `aws_route53_resolver_logs`, a file under the path `aws_route53_resolver_logs/afe3c55a-8b05-4ac7-be76-b6fda08af95d/file.log.gz` will be routed to the `default` table.

#### S3 Path scheme to table:

- `*` (all) -> **default**

## Schema

AWS Route53 Resolver Logs data is normalized to ECS fields. You can view the [complete mappings][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_route53_resolver_logs/log_source.yml
