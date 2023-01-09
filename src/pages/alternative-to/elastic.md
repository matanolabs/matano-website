import { AltYes, AltNo, AltMeh } from "@site/src/components/emoji-alt"

# Open source Elastic Alternative

Matano is an open source security lake platform (SIEM alternative) that provides a more scalable and cost-effective alternative to Elastic Security.

Elastic Security is a security analytics platform that is built on top of the Elastic Stack (formerly known as the Elasticsearch, Logstash, and Kibana stack).

## Comparison

Some similarities between Matano and Elastic Security include:

**Elastic Common Schema (ECS)**: Matano and Elastic Security both support the Elastic Common Schema (ECS) to normalize security data. This makes it easy to use the same detections and queries across multiple data sources.

**Enrichment**: Matano supports enrichment and custom lookup tables to enrich incoming events with contextual information such as GeoIP, threat intelligence, and business information. Matano integrates with popular threat intelligence providers such as AbuseCH, AlienVault, and more. Elastic Security supports automated enrichment including several integrations.

**Alerting**: Matano and Panther both support alerting using a variety of channels, including email, Slack, and webhook.

Some key differences between Matano and Elastic Security include:

**Scalability**: Matano is designed to be highly scalable and handle petabyte level volumes of log data. While Elastic works well for smaller volumes of ingest, it does not scale to large volumes of data and becomes unreasonably expensive due to its index heavy architecture. Matano's lakehouse platform decouples storage from compute, allowing you to cost effectively retain data in object storage and efficiently analyze your data at massive scale.

**Cost**: Matano is built using Rust, uses an entirely serverless architecture, and leverages modern Big Data technology like Apache Parquet, resulting in an order of magnitude lower cost than that of Elastic Security.

**Log Transformation**: Matano includes a serverless log transformation pipeline to transform and normalize unstructured security logs into a structured format using a standard schema. While Matano and Elastic Security both support the Elastic Common Schema (ECS) and ship with integrations for common security data sources, Elastic requires you to maintain a fleet of Logstash instances to transform and normalize your logs.

**Security Data Lake**: Matano is built around a security data lake in your cloud, and uses a modern lakehouse architecture. This allows you to leverage the power of Big Data technology to store and analyze your security data. Elastic Security stores your data in an Elasticsearch database, which results in ballooning storage costs as data grows.

**Architecture**: Elastic is optimized for searching and point lookups. It suffers from performance issues when running aggregations and complex queries that require correlation. Matano is built around a lakehouse architecture that can easily handle complex joins and aggregations, and is optimized for running complex queries.

**Vendor lock-in**: Matano uses the open Apache Iceberg table format, which means that the data it collects and stores is not tied to any specific vendor or platform. This allow organizations to avoid vendor lock-in by owning their data and being able to analyze using any tool, from Snowflake and BigQuery to Amazon Athena or Apache Spark. Elastic Security is tied to the Elastic Stack, which means that it is not possible to use the data collected and stored in Elastic Security with any other tool.

**Detection as code**: Matano allows you to write detections as code using the Python programming language. Matano's detection as code approach is more flexible and powerful than Elastic's custom EQL query rules. Matano supports advanced correlation across data sources and alerts using SQL to build more effective detections, which is not possible using Elastic.

**Real time detections**: Matano runs detections in realtime on streaming data in motion. Elastic can only execute detection rules once the data has landed inside the SIEM, which is inefficient and slow for detections that require limited correlation.

**Open source** Matano is an open source Apache-2.0 licensed project, which means that it is free to use and can be deployed on any cloud infrastructure. Elastic Security is a proprietary commercial product, and Elasticsearch no longer offers an open source licensed version (although the OpenSearch fork does exist).

## Summary

<div className="flex justify-center">

|                              |  Matano   | Traditional SIEM |
| :--------------------------: | :-------: | :--------------: |
|           Alerting           | <AltYes/> |    <AltYes/>     |
|          Enrichment          | <AltYes/> |    <AltYes/>     |
|         Correlation          | <AltYes/> |    <AltMeh/>     |
|         Scalability          | <AltYes/> |     <AltNo/>     |
|       Cost effectivity       | <AltYes/> |     <AltNo/>     |
| Built on data lake/lakehouse | <AltYes/> |     <AltNo/>     |
|      No Vendor lock-in       | <AltYes/> |     <AltNo/>     |
|     Realtime detections      | <AltYes/> |     <AltNo/>     |
|      Detections as code      | <AltYes/> |     <AltNo/>     |

</div>
