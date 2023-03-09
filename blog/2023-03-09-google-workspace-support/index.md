---
title: Managed Google Workspace Support
authors: "samrose"
keywords: ["google", "google workspace", "log source"]
tags: [announcement]
---

<head>
  <meta name="twitter:creator" content="@AhmedSamrose" />
</head>

Matano now supports a managed integration for ingesting audit events and alerts from Google Workspace. As with all managed log sources, Matano handles the polling, ingestion, parsing, and normalization of all Google Workspace log sources. The integration includes Google Workspace Admin events, Login events, SAML events and alerts from the Google Workspace Alert Center.

<!-- truncate -->

## Google Workspace audit logs

Google Workspace supports a variety of audit logs and alerts that are useful for analyzing and investigating activities that occurred in your Google Workspace account.

The Matano managed log source for Google Workspace now includes the following audit logs and alerts:

* [**Admin audit events**](https://support.google.com/a/answer/4579579?hl=en&ref_topic=9027054): Admin Audit logs provide a record of actions performed in your Google Admin console. For example, you can see when an administrator added a user or turned on a Google Workspace service.

* [**Login events**](https://support.google.com/a/answer/4580120?hl=en&ref_topic=9027054): Login Audit logs track user sign-ins to your domain.

* [**SAML events**](https://support.google.com/a/answer/7007375?hl=en&ref_topic=9027054) SAML Audit logs track users' successful and failed sign-ins to SAML applications.

* [**Google Workspace Alert Center alerts**](https://developers.google.com/admin-sdk/alertcenter/guides) The Google Workspace Alert Center monitors your Google Workspace account and generates alerts on potential security issues affecting your domain, including activities such as email phishing, suspicious activity, data takeout, and more.

* [**Google Workspace Rule log events (DLP)**](https://support.google.com/a/answer/9656783?hl=en&ref_topic=9027054): View a record of actions to review your user’s attempts to share sensitive data, including events triggered by data loss prevention (DLP) rule violation events.

## How it works

As a Matano managed log source, Matano takes care of everything involved with ingesting, parsing, normalizing, and storing all your Google Workspace data and alerts into a security data lake. You only need to provide configuration values and service account credentials. For the full list of steps to follow, see [the documentation](/docs/log-sources/managed/google-workspace#prerequisites).

Google Workspace data has [documented delays/lag times](https://support.google.com/a/answer/7061566?hl=en) that vary per source, Matano takes care of ensuring the source is being polled at the right interval and with the appropriate lag time.

## Examples

After your data is ingested into your Matano security lake, you can perform many actions, including investigation and detection. Here are some examples:

### Find a specific user sign in

You can search the Google Workspace login events for information related to a specific user sign-in you are investigating.

```sql
select * from google_workspace_login
where user.email = 'bob@example.com'
and ts > timestamp '2022-03-08 12:00:00.000'
and ts < timestamp '2022-03-08 14:00:00.000'
```

### Generate a summary of Workspace alerts

This SQL query generates a simple summary of Google Workspace alerts in the past 2 week grouped by the type of alert and ordered by the number of alerts per type of alert.

```sql
select
  google_workspace.alert.type as alert_type,
  count(event.action) as alert_count
from google_workspace_alert
where ts > current_timestamp - interval '14' day
group by google_workspace.alert.type
order by alert_count desc
```

### Detect disabling of multi-factor authentication (MFA) on Google Workspace instance

This is an example of a Python realtime detection that you can use to detect if MFA is disabled on your Google Workspace instance. The detection runs on Google Workspace Admin audit events.

```python
def detect(e):
    return (
        event.action == "ENFORCE_STRONG_AUTHENTICATION"
        or event.action == "ALLOW_STRONG_AUTHENTICATION"
    ) and e.deepget("google_workspace.admin.new_value") == "false"
```

## Up next

You can get started now with the Matano managed log source for Google Workspace and start ingesting data and alerts into a security data lake.

We will continue to improve support for the Google Workspace managed log source, including support for Google Workspace audit logs like Google Drive and Enterprise Group audit logs, and automatically converting Google Workspace alerts into Matano alerts.
