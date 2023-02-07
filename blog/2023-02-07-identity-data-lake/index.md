---
title: Matano adds Identity Data Lake
authors: "shaeq"
keywords: ["aws", "security", "identity", "cloud", "azure", "google", "okta"]
image: ./sg.png
---

import sgImg from "./sg.png"

<head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@AhmedSamrose" />
</head>

We're adding support for pulling logs and enrichment data from identity and auth sources to your Matano data lake. This means you can query failed/successful sign-in attempts, view audit logs, and query user information from popular SaaS sources directly using SQL and write detection rules to detect threats in realtime using Python!

<br/>

<div align="center">
    <img className="mtn-blog-sq-img" src={sgImg}/>
</div>

<!-- truncate -->

<br/>

Identity logs, generated from solutions such as Okta, Azure AD, and Duo, play a crucial role in understanding user activity and behavior within your organization. Matano now fully supports centralizing all your identity data into a structured data lake in your AWS account.

### New Log Sources

| Log Source       | Tables                                                                |
|------------------|-----------------------------------------------------------------------|
| [1Password](/docs/log-sources/managed/1password)        |**item_usages**<br/>**signin_attempts**                                     |
| [Duo](/docs/log-sources/managed/duo)              |**admin**<br/>**auth**<br/>**offline_enrollment**<br/>**summary**<br/>**telephony** |
| [Google Workspace](/docs/log-sources/managed/google-workspace)  |**login**                                                               |
| [Microsoft Azure AD](/docs/log-sources/managed/microsoft-graph)             |**aad_signinlogs**                                                      |
| [Okta](/docs/log-sources/managed/okta)             |**system**                                                              |


### Sample queries

#### Recent failed sign-in attempts from 1Password
```sql
SELECT *
FROM   "matano"."onepassword_signin_attempts"
WHERE  ts > current_timestamp - interval '7' day
       AND event.outcome = 'failure' 
```

#### View activity per user in Okta today
```sql
SELECT user.full_name AS user_name,
       count(*)       AS count_logs
FROM   "matano"."okta_system"
WHERE  ts > current_timestamp - interval '1' day
GROUP  BY user.full_name 
```

### Up next

In the near future, we'll be expanding our Identity & Auth integrations further by **adding support for synchronizing enrichment data (users, roles, lookup tables, etc.)** to your data lake as well. We also are working on new managed integration sources, so feel free to reach out if there is a log source you'd like to see in this list!

### Get started now

You can ingest and analyze any of these log sources in your AWS account out of the box today. View the [complete documentation](https://www.matano.dev/docs/log-sources/managed/) for more information.
