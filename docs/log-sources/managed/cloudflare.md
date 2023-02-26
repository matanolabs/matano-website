---
title: Cloudflare
sidebar_position: 3
---

The Cloudflare Matano managed log source lets you ingest your Cloudflare logs directly into Matano.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `CLOUDFLARE`.

```yml
name: cloudflare

managed:
  type: CLOUDFLARE

```

For the tables you would like to enable from this managed log source, under a `tables/` subdirectory in your log source directory, create a file with the name `<table_name>.yml>`. For example:

```
my-matano-dir/
└── log_sources/
    └── cloudflare/
        └── log_source.yml
        └── tables/
            └── audit.yml
            └── dns.yml
            └── firewall_event.yml
            └── http_request.yml
            └── nel_report.yml
            └── network_analytics.yml
            └── spectrum_event.yml
```

For a complete reference on configuring log sources, including extending the table schema, see [_Log source configuration_](../configuration.md).

## Tables

The Cloudflare managed log source supports the following tables:

- audit
- dns
- firewall_event
- http_request
- nel_report
- network_analytics
- spectrum_event

## Ingest

:::info

The Matano Cloudflare integration is desgined to ingest datasets delivered to an S3 bucket via a Logpush job. 

:::

:::note

When creating a job for each dataset, make sure the corresponding table name is included somewhere in the path (e.g. my-s3-bucket/my-prefix/network_analytics) so that Matano can determine which table incoming files belong to.

:::

### S3 (default)

For a log source named `cloudflare`, a file under the path `http_request/afe3c55a-8b05-4ac7-be76-b6fda08af95d/conn.log.gz` will be routed to the `http_request` table.

#### S3 Path scheme to table:

- `*audit*` -> **audit**
- `*dns*` -> **dns**
- `*firewall_event*` -> **firewall_event**
- `*http_request*` -> **http_request**
- `*nel_report*` -> **nel_report**
- `*network_analytics*` -> **network_analytics**
- `*spectrum_event*` -> **spectrum_event**

## Schema

Cloudflare log data is normalized to ECS fields. Custom fields are normalized into the `cloudflare` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/cloudflare/tables/