---
title: Lookup enrichment table data
sidebar_position: 3
---

You can use enrichment tables to lookup data in the Matano system, including in Python detections.

## Specifying lookup keys

To specify which column keys you can lookup data based on, use the `lookup_keys` property in your `enrichment.yml`. Matano supports looking up data based on multiple columns. Specify an array of column names in your `enrichment.yml` to enable lookup:

```yml
# enrichment/user_info/enrichment.yml

name: user_info
lookup_keys: ["user_id", "email"]
```

In this example, we create a user information enrichment table that allows us to lookup data both using the `user_id` column as well as the `email` column as keys.

