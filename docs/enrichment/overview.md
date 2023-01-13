---
title: Enrichment tables overview
sidebar_label: Overview
sidebar_position: 1
---

You can use *enrichment tables* to enrich your data and alerts inside Matano. Enrichment tables let you incorporate external, custom data sources and threat intelligence data into your data, detections, and alerting. For example, you can use an enrichment table of user account data to map the user ID in log data to an entry in the enrichment table, and retrieve other attributes of that user. You can also use enrichment tables to ingest and use threat intelligence data, including Indicators of Compromise (IoCs), from external feeds and sources.

In Matano, all enrichment tables are Apache Iceberg tables.

## Types of enrichment tables

Matano supports two types of enrichment tables: *static* and *dynamic*.

### Static enrichment tables

Static enrichment tables are tables for which the table data is statically defined inline as part of the Matano directory. You include a data file in your Matano directory that contains the contents of the enrichment table. Each time you deploy Matano, if the data is changed, your table is overwritten with the current data.

Use static enrichment tables for quick or simple tables you want to inline in your Matano directory and track in Git, without having to upload data for ingestion.

### Dynamic enrichment tables

Dynamic enrichment tables are tables for which the table data is uploaded dynamically to be ingested into the table. You decide when and how to upload data to be ingested into the enrichment table.

### Dynamic enrichment table write mode

For dynamic enrichment tables, you can specify a *write mode* in your configuration to instruct Matano how to handle new data written to an enrichment table for ingestion. Matano supports **append**,  **overwrite**, and **merge** write modes.

#### Append write mode

When you write data files for ingestion to an enrichment table that has write mode *append*, the written rows will be appended to the table, and the existing data will remain unchanged.

#### Overwrite write mode

When you write data files for ingestion to an enrichment table that has write mode *overwrite*, the written rows will become the new content of the table, and the existing data will be overwritten.

#### Merge write mode

When you write data files for ingestion to an enrichment table that has write mode *merge*, you specify a primary key, and rows are either inserted or replaced based on the primary key value. You can use this, for example, to deduplicate data that is being ingested based on a primary key.

To use the merge write mode, specify the `write_mode` key in your `enrichment.yml` as `merge` and set the `schema.primary_key` property to the name of the column that you wish to use as the primary key (you can use dotted syntax for nested columns). For example:

```yml
name: user_info

write_mode: merge

schema:
  primary_key: user.id
```

In this example, when you ingest enrichment data, for a given user ID, a row will either be inserted if it doesn't exist or replaced with the new data if it already exists.
