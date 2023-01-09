import { AltYes, AltNo, AltMeh } from "@site/src/components/emoji-alt"

# Open source Panther Alternative

Matano is an open source security lake platform (SIEM alternative) that is a cost effective and vendor neutral alternative to Panther.

Panther is a commercial security operations platform built on Snowflake.

## Comparison

Some similarities between Matano and Panther include:

**Detection as code**: Matano allows you to write detections as code using the Python programming language. Matano supports advanced correlation across data sources and alerts using SQL to build more effective detections. Panther also supports detection as code using Python and SQL.

**Alerting**: Matano and Panther both support alerting using a variety of channels, including email, Slack, and webhook.

**Security Data Lake**: Matano is built around a security data lake in your cloud that stores your data in Apache Iceberg tables on object storage and uses a modern lakehouse architecture. This allows you to use your existing analytics stack (Amazon Athena, Snowflake, BigQuery, Apache Spark, etc.) to analyze your security data. Panther is built on a data lake but uses a legacy warehouse architecture that requires you to ETL your data into Snowflake and does not support open table formats such as Apache Iceberg.

Some key differences between Matano and Panther include:

**Open source**: Matano is an open source Apache-2.0 licensed project, which means that it is free to use and can be deployed on any cloud infrastructure. Panther is a commercial product that is not open source.

**Vendor lock-in**: Matano uses the open Apache Iceberg table format, which means that the data it collects and stores is not tied to any specific vendor or platform. This allows organizations to avoid vendor lock-in by owning their data and using a query engine of their choice, from Snowflake and BigQuery to Amazon Athena or Apache Spark. Panther locks your data into the Snowflake data warehouse, which means that you can only use Snowflake for your data lake and analytics, and cannot use any other tool to analyze your data (e.g. Apache Spark for machine learning). With Panther, it is infeasible to migrate to a different data platform, as you would have to copy all your data, which is cost prohibitive. With Matano, you are not tied to a specific vendor or platform, and can use multiple tools for analysis or migrate between platforms without having to make copies of your data.

**Cost**: Matano is built using Rust, uses an entirely serverless architecture, and leverages modern Big Data technology like Apache Parquet, resulting in an order of magnitude lower cost than that of Panther. Panther has a costly ingest based pricing model that requires paying licensing fees for both the platform and Snowflake.

**Log Transformation**: Matano includes a serverless log transformation pipeline to transform and normalize unstructured security logs into a structured format using a standard schema. Matano integrates with the Vector Remap Language (VRL) to allow you to write complex log transformation pipelines that parse and transform nested fields using a flexible syntax that supports redaction and remapping arbitrary fields. Panther does not include a log transformation pipeline, and supports a limited set of log transformation capabilities, such as regex and JSON parsing based on the output schema, and requires purchasing an additional third party product for complex transformations (e.g. Cribl).

**Data Normalization**: Matano heavily normalizes fields in your data and alerts according to the Elastic Common Schema (ECS), which allows you to easily correlate across different data sources and build generalized detections. Panther's data model is limited to simple indicators and does not support arbitrary normalization of fields. This makes it difficult to search your data lake and pivot on fields while threat hunting.

## Summary

<div className="flex justify-center">

|                    |  Matano   |  Panther  |
| :----------------: | :-------: | :-------: |
|    Open source     | <AltYes/> | <AltNo/>  |
| No Vendor lock-in  | <AltYes/> | <AltNo/>  |
|  Cost effectivity  | <AltYes/> | <AltMeh/> |
| Data normalization | <AltYes/> | <AltMeh/> |
| Log transformation | <AltYes/> | <AltMeh/> |
|      Alerting      | <AltYes/> | <AltYes/> |
|     Enrichment     | <AltYes/> | <AltYes/> |
| Detections as code | <AltYes/> | <AltYes/> |
|    Scalability     | <AltYes/> | <AltYes/> |
| Built on data lake | <AltYes/> | <AltYes/> |

</div>
