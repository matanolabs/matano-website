---
title: Zeek
sidebar_position: 7
---

The Zeek Matano managed log source lets you ingest your Zeek logs directly into Matano.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `ZEEK`.

```yml
name: "zeek"

managed:
  type: "ZEEK"
```

Then create tables for each of the Zeek logs you want to ingest. For example, if you want to ingest Zeek DNS and HTTP logs, create table files like so:

```
my-matano-dir/
└── log_sources/
    └── zeek/
        └── log_source.yml
        └── tables/
            └── dns.yml
            └── http.yml
            └── ...
```

```yml
# log_sources/zeek/tables/dns.yml
name: "dns"
```

For a complete reference on configuring log sources, including extending the table schema, see [_Log source configuration_](../configuration.md).

## Tables

The Zeek managed log source supports the following tables:

- capture_loss
- connection
- dce_rpc
- dhcp
- dnp3
- dns
- dpd
- files
- ftp
- http
- intel
- irc
- kerberos
- known_certs
- known_hosts
- known_services
- modbus
- mysql
- notice
- ntlm
- ntp
- ocsp
- pe
- radius
- rdp
- rfb
- signature
- sip
- smb_cmd
- smb_files
- smb_mapping
- smtp
- snmp
- socks
- software
- ssh
- ssl
- stats
- syslog
- traceroute
- tunnel
- weird
- x509

## Ingest

### S3 (default)

For a log source named `zeek`, a file under the path `zeek/afe3c55a-8b05-4ac7-be76-b6fda08af95d/conn.log.gz` will be routed to the `connection` table.

#### S3 Path scheme to table:

- `*capture_loss*` -> **capture_loss**
- `*conn*` -> **connection**
- `*dce_rpc*` -> **dce_rpc**
- `*dhcp*` -> **dhcp**
- `*dnp3*` -> **dnp3**
- `*dns*` -> **dns**
- `*dpd*` -> **dpd**
- `*files*` -> **files**
- `*ftp*` -> **ftp**
- `*http*` -> **http**
- `*intel*` -> **intel**
- `*irc*` -> **irc**
- `*kerberos*` -> **kerberos**
- `*known_certs*` -> **known_certs**
- `*known_hosts*` -> **known_hosts**
- `*known_services*` -> **known_services**
- `*modbus*` -> **modbus**
- `*mysql*` -> **mysql**
- `*notice*` -> **notice**
- `*ntlm*` -> **ntlm**
- `*ntp*` -> **ntp**
- `*ocsp*` -> **ocsp**
- `*pe*` -> **pe**
- `*radius*` -> **radius**
- `*rdp*` -> **rdp**
- `*rfb*` -> **rfb**
- `*signature*` -> **signature**
- `*sip*` -> **sip**
- `*smb_cmd*` -> **smb_cmd**
- `*smb_files*` -> **smb_files**
- `*smb_mapping*` -> **smb_mapping**
- `*smtp*` -> **smtp**
- `*snmp*` -> **snmp**
- `*socks*` -> **socks**
- `*software*` -> **software**
- `*ssh*` -> **ssh**
- `*ssl*` -> **ssl**
- `*stats*` -> **stats**
- `*syslog*` -> **syslog**
- `*traceroute*` -> **traceroute**
- `*tunnel*` -> **tunnel**
- `*weird*` -> **weird**
- `*x509*` -> **x509**

## Schema

Zeek data is normalized to ECS fields. You can view the [complete mappings][1] to see the full schemas.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/zeek/log_source.yml
