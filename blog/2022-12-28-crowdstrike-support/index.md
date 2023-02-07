---
title: Adding Crowdstrike Support to Matano
authors: "shaeq"
keywords: ["crowdstrike", "falcon", "endpoint security", "network", "hosts"]
image: ./sg.png
---

import sgImg from "./sg.png"


<head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@AhmedShaeq" />
</head>

We're excited to announce that Matano now supports managed log sources from
Crowdstrike. This means that you can easily ingest and analyze your endpoint
security logs from Crowdstrike Falcon and Crowdstrike Falcon Data Replicator 
(FDR) logs into your Matano security lake without having to define any
schemas or parsers.


<br/>

<div align="center">
    <img className="mtn-blog-sq-img" src={sgImg}/>
</div>

<!--truncate-->

<br/>

## What's new

Using Matano you can efficiently process & store petabytes of Crowdstrike logs &
detection alerts into a normalized security data lake (S3) in your AWS account
for advanced
correlation & analysis during investigations.

As of today, Matano supports ingesting both Crowdstrike Falcon (from the
Streaming API - SIEM Collector) logs and Crowdstrike Falcon Data Replicator 
(FDR) logs via S3 ingestion, using an existing or Matano provided source bucket.

## Use Cases

Matano lets you cost-effectively query historical data using SQL (via 
Athena, Snowflake, [or any compatible engine](https://github.com/matanolabs/matano#query-engines)), perform bulk search for IOCs,
and even create realtime
detections-as-code for your logs using Python!


- **Correlation & Search** - By capturing events from Crowdstrike Falcon along
with other
security data & normalizing all fields to ECS, Matano helps you correlate
across log sources, analyze DNS events, and search for IOCs.

- **Investigations & Long-Term Storage** - Efficiently store
petabytes of logs from Falcon
Data Replicator (FDR) in
your structured Matano security data lake to help with investigations and enable
analysis
using SQL.

- **Realtime Detection & Alerting** Write detection rules as code in Matano to
alert on malicious user and network activity in host and endpoint logs
from
Crowdstrike in realtime. Our Python-based
detection format allow you to build
highly customizable and effective rules to alert on potential threats.


## How it works

### Crowdstrike Falcon & FDR

Let's walk through how to ingest Crowdstrike Falcon logs into Matano. We can
simply point Matano at a bucket containing logs delivered from the SIEM
Collector and start ingesting data, with a simple configuration file:

```yml
# log_source.yml
name: crowdstrike_falcon

managed:
  type: "CROWDSTRIKE_FALCON"

ingest:
  s3_source:
    bucket_name: "my-bucket"
    key_prefix: "my/key/prefix"
```

Deploying Matano with this configuration will create a Matano table named
`crowdstrike_falcon` that you can query using SQL (with AWS Athena) and write
realtime detections on.

The schema is fully normalized to ECS so we easily do queries like
searching on
related IPs or checking if an event is a failure, without remebering
the Crowdstrike specific fields.

Here's an example Athena query where we check for the latest events that are
related to a failure:

```sql
select message,
       crowdstrike.event,
       crowdstrike.metadata,
       related.hosts
from   matano.crowdstrike_falcon
where  ts > current_timestamp - interval '7' day
       and event.outcome = 'failure' 
```

We can also write Python detections that will run on realtime on each incoming
Crowdstrike event, and optionally create an alert. Here is an example that
detects services that start a vulnerable version of Microsoft Remote Desktop
Protocol (RDP) by using the Crowdstrike
FDR logs:

```python
# port for vulnerable RDP
vuln_rdp_port = 3389

# servers known to be safe
safe_servers = ["192.168.1.10", "10.0.0.1"]

def detect(r):
  return (
    "network" in r.deepget("event.category", [])
    and "start" in r.deepget("event.type", [])
    and r.deepget("event.outcome") == "success"
    and r.deepget("source.port") == vuln_rdp_port
    and r.deepget("observer.ip") not in safe_servers
  )
```

Note that this detection has been written entirely against ECS normalized
fields, without any
mention of the corresponding Crowdstrike event types `NetworkListionIpv4` and
`NetworkListionIpv6` in the original event.

By using standardized ECS fields,
and an open source
language such as Python, Matano helps you express your detection rules in a
completely vendor-neutral way that is portable across log sources and tools!

## Getting started

We're excited to add support for Crowdstrike Falcon and Crowdstrike Falcon Data
Replicator (FDR) logs to Matano, making it easy for you to ingest and analyze
your endpoint logs.

You can start using the Crowdstrike managed log sources today. Follow the [steps](/docs/getting-started) to get started with Matano and take a look at the [Crowdstrike](/docs/log-sources/managed/crowdstrike) documentation.

Happy threat hunting! 🦅
