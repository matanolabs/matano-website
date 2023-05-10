---
title: Suricata
sidebar_position: 12
---

The Suricata Matano managed log source lets you ingest your Suricata IDS/IPS/NSM logs. It parses logs that are in the [Suricata Eve JSON](https://suricata.readthedocs.io/en/latest/output/eve/eve-json-format.html) format.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `SURICATA`.

```yml
name: "suricata"

managed:
  type: "SURICATA"
```

Then create tables for each of the Suricata logs you want to ingest. For example, if you want to ingest Suricata Eve logs, create table files like so:

```
my-matano-dir/
└── log_sources/
    └── suricata/
        └── log_source.yml
        └── tables/
            └── eve.yml
            └── ...
```

```yml
# log_sources/suricata/tables/eve.yml
name: "eve"
```

For a complete reference on configuring log sources, including extending the table schema, see [_Log source configuration_](../configuration.md).

## Tables

The Suricata managed log source supports the following tables:

- eve

## Ingest

### S3 (default)

For a log source named `suricata`, a file under the path `suricata/afe3c55a-8b05-4ac7-be76-b6fda08af95d/alerts.log` will be routed to the `eve` table.

#### S3 Path scheme to table:

- `*` (all) -> **eve**

## Schema

Suricata data is normalized to ECS fields. You can view the [complete mappings][1] to see the full schemas.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/suricata/log_source.yml
