---
title: Adding Suricata Support to Matano
authors: "shaeq"
keywords: ["suricata", "falcon", "network security", "network", "hosts", "nids", "ids", "nips", "ips"]
image: ./sg.png
---

import sgImg from "./sg.png"


<head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@AhmedShaeq" />
</head>

We're excited to announce that Matano now supports managed log sources from Suricata. This means that you can easily ingest and analyze your network activity logs and alerts from Suricata into your Matano security lake without having to define any schemas or parsers.

<br/>

<div align="center">
    <img className="mtn-blog-sq-img" src={sgImg}/>
</div>

<!--truncate-->

<br/>

## What's new

Using Matano you can efficiently process & store petabytes of Suricata logs & alerts into a normalized security data lake (S3) in your AWS account for context during investigations.

As of today, Matano supports ingesting both Suricata network logs and alerts via S3 ingestion, using an existing or Matano provided source bucket.

## Use Cases

Suricata is a popular open source NIDS/NIPS tools that produces logs/alerts that can help provide a geographical breakdown of incoming and outgoing network traffic in an organization as well as insight into malicious activity.

Matano lets you cost-effectively query historical data using SQL (via 
Athena, Snowflake, [or any compatible engine](https://github.com/matanolabs/matano#query-engines)), perform bulk search for IOCs,
and even create realtime
detections-as-code for your logs using Python!

- **Network forensics and incident response** - Analyze network traffic by querying Suricata logs and alerts using SQL. Identify known/unknown malware and malicious IPs & domains associated with an attack with the ability to search against months of logs cost-effectively retained in object storage.

- **Correlation & Search** - By capturing events from Suricata along with other security data & normalizing all fields to ECS, Matano helps you correlate across logs and alerts, and search for IOCs. For example, the network community ID fingerprint can be used to correlate network activity with endpoint logs coming from Zeek.

## How it works

### Suricata

Let's walk through how to ingest Suricata logs into Matano. We can
simply point Matano at a bucket containing logs delivered from the SIEM
Collector and start ingesting data, with a simple configuration file for the log source:

```yml
# log_source.yml
name: suricata

managed:
  type: "SURICATA"

ingest:
  s3_source:
    bucket_name: "my-bucket"
    key_prefix: "my/key/prefix"
```

And a configuration file to setup the main suricata table (suricata_eve) for EVE JSON logs & alerts:

```yml
# tables/eve.yml
name: eve
```

Deploying Matano with this configuration will create a Matano table named
`suricata_eve` that you can query using SQL (with AWS Athena) and write
realtime detections against using Python.

The schema is fully normalized to ECS so we easily do queries like
searching on
related IPs or checking if an event is a failure, without remebering
the Suricata specific fields.

Here's an example Athena query where we inspect the distribution of events in the last week by event type:

```sql
select   suricata.eve.event_type,
         event.type as ecs_event_type,
         count(*) as count
from     matano.suricata_eve
where    ts > current_timestamp - interval '7' day
group by event.type, suricata.eve.event_type
```

As another example, here is a search for all unique IPs in events pertaining to blocked/denied traffic in the past day.

```sql
select distinct related.ip
from   matano.suricata_eve
where  contains(event.type, 'denied')
       and ts > current_timestamp - interval '1' day
```

By using standardized ECS fields,
and an open source language such as Python for detections, Matano helps you express your detection rules and threat hunting logic in a vendor-neutral way that is to port across log sources and tools!

## Getting started

We're excited to add support for Suricata logs to Matano, making it easy for you to ingest and analyze your network IDS/IPS logs.

You can start using the Suricata managed log sources today. Follow the [steps](/docs/getting-started) to get started with Matano and take a look at the [Suricata](/docs/log-sources/managed-log-sources/suricata) documentation.

