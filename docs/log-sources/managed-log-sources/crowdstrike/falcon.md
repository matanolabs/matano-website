---
title: Crowdstrike Falcon
sidebar_label: Falcon
sidebar_position: 10
---

The Crowdstrike Falcon Matano managed log source lets you ingest your Crowdstrike Falcon logs directly into Matano.

This integration supports CrowdStrike Falcon SIEM-Connector-v2.0.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source.yml` as `CROWDSTRIKE_FALCON`.

```yml
name: "crowdstrike_falcon"

managed:
  type: "CROWDSTRIKE_FALCON"
```

For example, if you want to ingest Crowdstrike Falcon logs (default table) into a log source named `crowdstrike_falcon` you should structure you subdirectory as follows:

```
my-matano-dir/
└── log_sources/
    └── crowdstrike_falcon/
        └── log_source.yml
```

For a complete reference on configuring log sources, including extending the table schema, see [_Log source configuration_](../../configuration.md).

## Tables

The Crowdstrike Falcon managed log source supports the following tables:

- default
  - Contains endpoint data and CrowdStrike Falcon platform audit data forwarded from the Falcon SIEM Connector.

## Ingest

### S3 (default)

For a log source named `crowdstrike_falcon`, a file under the path `crowdstrike_falcon/afe3c55a-8b05-4ac7-be76-b6fda08af95d/alerts.log` will be routed to the `default` (crowdstrike_falcon) table.

#### S3 Path scheme to table:

- `*` (all) -> **default**

## Schema

Crowdstrike Falcon data is normalized to ECS fields. You can view the [complete mappings][1] to see the full schemas.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/crowdstrike_falcon/log_source.yml
