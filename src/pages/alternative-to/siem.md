import { AltYes, AltNo, AltMeh } from "@site/src/components/emoji-alt"

# Open source SIEM alternative

Matano is an open source security lake platform (SIEM alternative) that aims to provide a more scalable and cost-effective alternative to traditional SIEM.

## Comparison

Some key differences between Matano and traditional SIEM include:

**Scalability**: Matano is designed to be highly scalable and handle petabyte level volumes of log data. It is not feasible or cost-effective to deploy a traditional SIEM to handle this volume of data.

**Cost**: Matano is built using Rust, uses an entirely serverless architecture, and leverages modern Big Data technology like Apache Parquet, that results in a cost that is an order of magnitude lower than that existing SIEM solutions.

**Log Transformation**: Matano includes a serverless log transformation pipeline to transform and normalize unstructured security logs into a structured format using a standard schema. With traditional SIEM, log transformation is either entirely unsupported (limited to basic regex parsing) or requires using a separate product and maintaining a fleet of servers for log transformation (e.g. Logstash).

**Enrichment**: Matano supports enrichment and custom lookup tables to enrich incoming events with contextual information such as GeoIP, threat intelligence, and business information. Matano integrates with popular threat intelligence providers such as AbuseCH, AlienVault, and more. With traditional SIEM, enrichment is either entirely unsupported or is limited to simple lookups and lacks automation.

**Security Data Lake**: Matano is built around a security data lake in your cloud, and uses a modern lakehouse architecture. This allows you to leverage the power of Big Data technology to store and analyze your security data. Traditional SIEM require data to be stored in a database and are not built for cloud data lakes.

**Vendor lock-in**: Matano uses the open Apache Iceberg table format, which means that the data it collects and stores is not tied to any specific vendor or platform. This allow organizations to avoid vendor lock-in by owning their data and being able to analyze using any tool, from Snowflake and BigQuery to Amazon Athena or Apache Spark. Traditional SIEM are tied to a specific vendor and store your data in a proprietary database and format which makes it difficult or impossible to migrate to a different vendor.

**Detection as code**: Matano allows you to write detections as code using the Python programming language. Matano's detection as code approach is more flexible and powerful than traditional SIEM query rules. Matano supports advanced correlation across data sources and alerts using SQL to build more effective detections, which is not possible using traditional SIEM.

**Real time detections**: Matano runs detections in realtime on streaming data in motion. Traditional SIEM can only execute detection rules once the data has landed inside the SIEM, which is inefficient and slow for detections that require limited correlation.

## Summary

<div className="flex justify-center">

|                                  |  Matano   |   Traditional SIEM    |
| :------------------------------: | :-------: | :-------------------: |
|             Alerting             | <AltYes/> |       <AltYes/>       |
|           Correlation            | <AltYes/> | <AltMeh/>\* (limited) |
|            Enrichment            | <AltYes/> | <AltMeh/>\* (limited) |
|           Scalability            | <AltYes/> |       <AltNo/>        |
|         Cost effectivity         | <AltYes/> |       <AltNo/>        |
| Log transformation/normalization | <AltYes/> |       <AltNo/>        |
|   Built on data lake/lakehouse   | <AltYes/> |       <AltNo/>        |
|        No Vendor lock-in         | <AltYes/> |       <AltNo/>        |
|       Realtime detections        | <AltYes/> |       <AltNo/>        |
|        Detections as code        | <AltYes/> |       <AltNo/>        |

</div>
