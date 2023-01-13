---
title: Working with enrichment tables
sidebar_label: Working with enrichment tables
sidebar_position: 2
---

## Creating an enrichment table

To create an enrichment table, use the `enrichment` subdirectory inside your Matano directory. Create a subdirectory inside the `enrichment` directory for each enrichment table. The structure is as follows:

```
├── enrichment
│   └── user_info
│       └── enrichment.yml
```

Inside the enrichment table subdirectory, create a file named `enrichment.yml`. The file has the following structure:

```yml
# enrichment/user_info/enrichment.yml

name: "user_info"

enrichment_type: "dynamic"
write_mode: "append" # only for dynamic tables

# Iceberg schema (same as log sources)
schema:
  primary_key: user_id # for merge write_mode
  fields:
    - name: name
      type: string
```

## Ingesting data into enrichment tables

### Static enrichment tables

To specify the data for a static enrichment table, create a data file in the root of the enrichment table subdirectory, as follows:

```
├── enrichment
│   └── user_info
│       └── enrichment.yml
│       └── data.json
```

The data file must be named `data.json` and be in JSON lines format.

### Dynamic enrichment tables

To write data to a dynamic enrichment table, upload data to the Matano provided sources S3 bucket the same [way you can for log sources](../log-sources/ingestion.md#using-the-matano-provided-sources-bucket). Upload data to the prefix of the enrichment table name, prefixed with `enrich_`. For example, to upload data to an enrichment table named `user_info`, upload data to the S3 prefix `enrich_user_info/`. Data uploaded must be in JSON lines format.

## Updating enrichment table data

Because enrichment tables are Apache Iceberg tables, you can modify the data of *dynamic* enrichment tables using SQL queries. For example, you can run a SQL query to remove old or irrelevant data, update relevant values, or perform other modifications on your enrichment table. Any updates you make will be synced with the Matano system.
