---
sidebar_position: 1
title: Introduction
---

<head>
    <script type="application/ld+json">
    {`{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.matano.dev/docs",
        "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://matano.dev/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
        }
    }`}
    </script>
</head>

## What is Matano?

Matano is an open source security lake platform for AWS. It lets you ingest petabytes of security and log data from various sources, store and query them in a data lake, and create Python detections as code for realtime alerting. Matano is fully serverless and designed specifically for AWS and focuses on enabling high scale, low cost, and zero-ops. Matano deploys fully into your AWS account.

## Key features

* **Security Data Lake**: Matano normalizes unstructured security logs into a structured realtime data lake in your AWS account.
* **Collect All Your Logs**: Matano integrates out of the box with 50+ sources for security logs and can easily be extended with custom sources.
* **Detection-as-Code**: Use Python to build realtime detections as code. Support for automatic import of Sigma detections to Matano.
* **Log Transformation Pipeline**: Matano supports custom VRL (Vector Remap Language) scripting to parse, enrich, normalize and transform your logs as they are ingested without managing any servers.
* **No Vendor Lock-In**: Matano uses an open table format (Apache Iceberg) and open schema standards (ECS), to give you full ownership of your security data in a vendor-neutral format.
* **Bring Your Own Analytics**: Query your security lake directly from any Iceberg-compatible engine (AWS Athena, Snowflake, Spark, Trino etc.) without having to copy data around.
* **Serverless**: Matano is fully serverless and designed specifically for AWS and focuses on enabling high scale, low cost, and zero-ops.
