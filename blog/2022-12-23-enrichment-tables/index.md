---
title: Introducing enrichment tables and threat intelligence
authors: "samrose"
keywords: ["threat intelligence", "enrichment"]
tags: [announcement]
image: ./sg.jpeg
---

import sgImg from "./sg.jpeg"

You can now use enrichment tables in Matano to ingest custom data and threat intelligence to enrich your data, detections, and alerts. You can use this information to enhance correlation, improve alerts, and reduce false positives.

<br/>

<div align="center">
    <img className="mtn-blog-sq-img" src={sgImg}/>
</div>

<!--truncate-->

<br/>

This new feature is designed to provide more comprehensive and relevant information for security monitoring and analysis. With enrichment tables, you can easily ingest data from a variety of sources, including custom logs, APIs, and threat intelligence feeds, to provide additional context and detail for your security events. This allows you to quickly and easily identify potential threats and respond to them in a timely manner.


## How it works

Enrichment tables are Matano Apache Iceberg tables, and work similarly to Matano log sources. In short, you:

- Upload data (JSON, CSV, text) for ingestion as files to an S3 prefix.
- Define a schema for the enrichment table.
- Optionally transform the data using VRL.
- Use the enrichment table in alerts and detections.

You can either have tables append data new data or overwrite/replace the table on each write.

Some common usecases for enrichment are:

- Look up contextual data to eliminate false positives in detections.
- Dynamically set severity of an alert by lookup up data from an enrichment table.
- Improve response by adding contextual information from an enrichment table to an alert.

### An example with IP intelligence data

Let's walk through a real example of ingesting a common source of threat intelligence data: a dataset listing known good IPs. I have a file in JSON format as follows:

```json
{"ip": "1.1.1.1", "description": "CloudFlare's public DNS offering."}
```

I add an enrichment table by creating a file in my [Matano directory](/docs/matano-directory) under `enrichment/known_ip_info/enrichment.yml`:

```yml
# enrichment/known_ip_info/enrichment.yml

name: known_ip_info

enrichment_type: dynamic
write_mode: append
```

I specify the enrichment type as *dynamic*, meaning I will upload the enrichment data to S3 for ingestion. You can also create *static* enrichment tables where you can simply include the data inline as a file inside your Matano directory, without having to upload the data to S3.

I then define a schema for the enrichment table:

```yml
# enrichment/known_ip_info/enrichment.yml

schema:
  primary_key: ip
  fields:
    - name: ip
      type: string
    - name: description
      type: string
```

The definition is similar to that of a log source, but note that I can specify a primary key column for the enrichment table. This can later be used for lookup.

Let's see how I can use this enrichment table. Say I have a Python detection, and I want to lookup the IP in this known IP enrichment table to dynamically set the alert severity. I can add a lookup inside my Python detection and use this in the `severity` function to set the alert severity as `info` for events from known benign IPs.

```python
# detect.py
from matano.enrichment import known_ip_info

def detect(r):
    return (
        "authentication" in r.deepget("event.category", [])
        and r.deepget("event.outcome") == "failure"
    )

def alert_context(r):
    known_ip = known_ip_info.get(r.deepget("source.ip"))
    r.is_known_ip = known_ip is not None

    return {
        "known_ip": known_ip
    }

def title(r):
    user_name, user_ip = r.deepget('user.name'), r.deepget('source.ip')
    return f"Multiple failed logins from {user_name} - {user_ip}"

def severity(r):
    if r.is_known_ip:
        return "low"
    else:
        return "medium"

def dedupe(r):
    return r.deepget("source.ip")
```

Now we use our IP information to both dynamically lower the alert severity for known IPs and append IP intelligence to our alert for context.


### Another example with AWS account Info

That's an example of using threat intelligence sources as enrichment tables. Let's also take a look at custom enrichment tables using internal sources of data. Consider an enrichment table `aws_account_info` that provides configuration data related to our AWS accounts. We can use this inside our detections to, for example, determine if an AWS account is a production or development AWS account and enrich our alert context or set our alert severity.

Let's say our configuration data looks like so:

```json
{"account_id": "123456789012", "name": "backend-prod", "is_production": true}
{"account_id": "123456789012", "name": "frontend-dev", "is_production": false}
```

We can create an enrichment table:

```yml
# enrichment/aws_account_info/enrichment.yml
name: aws_account_info
enrichment_type: dynamic

schema:
  primary_key: account_id
  fields:
    - name: account_id
      type: string
    - name: name
      type: string
    - name: is_production
      type: boolean
```

Let's consider a detection to detect disabling default Amazon Elastic Block Store (EBS) encryption. To reduce false positives, we want only apply this detection to production accounts. We can write the detection as so:

```python
from matano.enrichment import aws_account_info

def detect(r):
    r.aws_acct_info = aws_account_info.get(r.deepget("cloud.account.id"))

    # Detection only relevant for production accounts
    if not r.aws_acct_info.get("is_production"):
        return False

    return (
        r.deepget("event.provider") == "ec2.amazonaws.com"
        and r.deepget("event.action") == "DisableEbsEncryptionByDefault"
    )

def title(r):
    acct_id, acct_name = r.deepget('cloud.account.id'), r.aws_acct_info.get("name")
    return f"Disable EBS encryption for AWS Account: {acct_id} - {acct_name}"

def dedupe(r):
    return r.deepget("source.ip")
```

## Up next

The initial release of enrichment tables is ready to use, and we'll be adding many improvements soon, including:

- More out of the box integrations, with threat intelligence feeds such as Abuse.CH, Greynoise, Geo IP (Maxminds), and more.
- Enriching your log data inside VRL transformation using enrichment tables.
- High performance matching against IoC's inside realtime detections.

Follow and watch our [GitHub repository](https://github.com/matanolabs/matano) and [public roadmap](https://github.com/orgs/matanolabs/projects/1) for updates, and feel free to create an issue if you want to see something supported.
