---
title: Crowdstrike Falcon Data Replicator
sidebar_label: Falcon Data Replicator
sidebar_position: 11
---

The Crowdstrike managed log source lets you ingest your Crowdstrike FDR logs (data) directly into Matano and synchronize enrichment tables supported by the replicator (e.g. appinfo, aidmaster, etc.)

The CrowdStrike Falcon Data Replicator (FDR) allows CrowdStrike users to replicate FDR data from CrowdStrike managed S3 buckets. CrowdStrike writes notification events to a CrowdStrike managed SQS queue when new data is available in S3.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source.yml` as `CROWDSTRIKE`.

```yml
name: "crowdstrike"

managed:
  type: "CROWDSTRIKE"
```

Then create tables for each of the Crowdstrike log types you want to ingest. For example, if you want to ingest FDR data logs, create table file(s) like so:

```
my-matano-dir/
└── log_sources/
    └── crowdstrike/
        └── log_source.yml
        └── tables/
            └── fdr.yml
            └── ...
```

```yml
# log_sources/suricata/tables/fdr.yml
name: "fdr"
```

## Tables

The Crowdstrike managed log source supports the following tables:

- fdr
  - Primary events that come with the Falcon Insight XDR subscription or the Falcon FileVantage subscription.
  - Describe individual actions taking place on your hosts. This includes everything from user logins to malware being executed. Load these events into your Matano security lake to power investigations and enhanced threat hunting for your environment.

## Ingest

**To use Matano with Crowdstrike FDR, you must configure the FDR tool to replicate the data to the default [Matano source bucket](/docs/log-sources/ingestion#using-the-matano-provided-sources-bucket) or a [custom self-managed S3 bucket](/docs/log-sources/ingestion#bringing-your-own-bucket).**

**Note:** Matano does not currently support consuming SQS notifications directly from the CrowdStrike managed SQS queue.

### S3 (default)

For a log source named `crowdstrike`, a file under the path `crowdstrike/data/afe3c55a-8b05-4ac7-be76-b6fda08af95d/logs.json.gz` will be routed to the `fdr` (crowdstrike_fdr) table.

#### S3 Path scheme to table:

- `*data/*` -> **fdr**

## Schema

Crowdstrike FDR data is normalized to ECS fields. You can view the [complete mappings][1] to see the full schemas.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/crowdstrike/tables/fdr.yml
