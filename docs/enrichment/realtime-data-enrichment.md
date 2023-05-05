---
title: Realtime data enrichment
sidebar_position: 4
---

You can use enrichment tables to directly enrich incoming data being ingested from a log source into Matano, during the transformation step. This lets you add fields to your data based on an enrichment table lookup.

The enrichment is done using a VRL function named `get_enrichment_table_record`. You can use this function inside your VRL transforms to lookup a record in an enrichment table based on a key and add fields to your data.

## Function reference

The `get_enrichment_table_record` function takes two arguments. The first argument is always the name of the enrichment table you want to lookup from. The second argument specifies the lookup - it is either a string, in the case of an enrichment table with only one lookup key, or an key value object in the case of an enrichment table with multiple lookup keys.

### Look up data for an enrichment table with a single lookup key

To lookup an enrichment table record from an enrichment table that has only one lookup key, pass the first argument as the enrichment table name and the second argument as the value of the lookup key.

For example, if we have a `users` enrichment table that has a sole `user_id` lookup key, we would lookup the record in our VRL transform as follows:

```go
user_info = get_enrichment_table_record("users", .userid)
```

### Look up data for an enrichment table with multiple lookup keys

To lookup an enrichment table record from an enrichment table that has multiple lookup keys, pass the first argument as the enrichment table name and the second argument as an object with the key as the lookup key name and the value as the lookup key value.

For example, if we have a `users` enrichment table that has two lookup keys, `user_id` and `user_email`, we would lookup the record in our VRL transform as follows:

```go
user_info = get_enrichment_table_record("users", { "user_id": .userid })
```