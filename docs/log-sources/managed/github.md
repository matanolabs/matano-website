---
title: GitHub Audit logs
sidebar_label: GitHub
sidebar_position: 4
---

The GitHub audit logs managed log source lets you ingest your GitHub audit logs directly into Matano.

The Github audit log tracks events triggered by activities that affect your GitHub organization. For a complete list of supported events, consult the [GitHub audit log documentation](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `GITHUB_AUDIT`.

```yml
name: "github_audit"

managed:
  type: "GITHUB_AUDIT"
```

## Tables

The GitHub audit logs history managed log source supports a single table containing GitHub audit log data.

## Ingest

### S3 (GitHub audit log streaming)

Matano supports ingestion using S3. You can use GitHub's audit log streaming feature to deliver GitHub audit logs to an S3 bucket. Consult the [GitHub documentation](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#setting-up-streaming-to-amazon-s3) for more information.

## Schema

GitHub audit log data is normalized to ECS fields. Custom fields are normalized into the `github` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/github_audit/log_source.yml
