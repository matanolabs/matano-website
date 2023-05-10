---
title: Palo Alto Networks
sidebar_position: 10
---

The Palo Alto Networks Matano managed log source lets you ingest your [Palo Alto Networks Firewall logs](https://docs.paloaltonetworks.com/pan-os/9-1/pan-os-web-interface-help/monitor/monitor-logs/log-types). It supports parsing logs in the Palo Alto Networks PAN-OS Syslog Format.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `PANW`.

```yml
name: panw

managed:
  type: PANW
```

Then create tables for each of the Palo Alto Networks logs you want to ingest. For example, if you want to ingest PANW Traffic logs, as well as GlobalProtect logs, create table files like so:

```yml
my-matano-dir/
└── log_sources/
    └── panw/
        └── log_source.yml
        └── tables/
            └── traffic.yml
            └── globalprotect.yml
            └── ...
```

```yml
# log_sources/panw/tables/traffic.yml
name: traffic
```

```yml
# log_sources/panw/tables/globalprotect.yml
name: globalprotect
```

For a complete reference on configuring log sources, including extending the table schema, see [_Log source configuration_](../configuration.md).

## Tables

The Palo Alto Networks managed log source supports the following tables:

- traffic
- globalprotect


## Schema

Palo Alto Networks Firewall log data is normalized to ECS fields. You can view the [complete mappings][1] to see the full schemas.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/panw/log_source.yml

