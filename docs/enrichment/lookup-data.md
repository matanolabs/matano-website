---
title: Lookup enrichment table data
sidebar_position: 3
---

You can use enrichment tables to lookup data in the Matano system, including in Python detections.

## Using enrichment tables

You can use enrichment tables in three ways.

* **Query enrichment Iceberg tables** - All enrichment tables are ingested into Apache Iceberg tables. You can directly query and join these enrichment tables during analysis and investigation.
* **Lookup in Python detections** - You can use enrichment tables inside Python detections to lookup records. [Read more on enrichment in Python detections](../detections/enrichment).
* **Realtime data enrichment** - You can use enrichment tables to enrich your data directly during the transformation step, using a special VRL function. Read more on [realtime data enrichment](./realtime-data-enrichment).

## Specifying lookup keys

To specify which column keys you can lookup data based on, use the `lookup_keys` property in your `enrichment.yml`. Matano supports looking up data based on multiple columns. Specify an array of column names in your `enrichment.yml` to enable lookup:

```yml
# enrichment/user_info/enrichment.yml

name: user_info
lookup_keys: ["user_id", "email"]
```

In this example, we create a user information enrichment table that allows us to lookup data both using the `user_id` column as well as the `email` column as keys.

