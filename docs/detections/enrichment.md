---
title: Using enrichment tables in detections
sidebar_label: Using enrichment tables
sidebar_position: 4
---

You can use [enrichment tables](../enrichment/overview.md) to enrich your alerts and detection logic inside Python detections.

For information on creating and working with enrichment tables, see [*Working with enrichment tables*](../enrichment/working-with-enrichment-tables.md).

### Access enrichment tables in detections

To access an enrichment table inside a Python detection, you can simply import the enrichment table by name inside your Python program. For example, if we have an enrichment table named `user_info`, we can add the following code to our detection script to access the enrichment table:

```python
# detect.py

from matano.enrichment import user_info

def detect(e):
    ...
```

The import statement in the first line imports our enrichment table. We can also import multiple enrichment tables using regular Python syntax:

```python
# detect.py

from matano.enrichment import user_info, host_info

def detect(e):
    ...
```

## Lookup enrichment table data

Enrichment tables allow you to lookup data based on a key you specify. For more on configuring enrichment lookups, see [*Lookup enrichment data*](../enrichment/lookup-data.md).

To lookup data by a key in your detection script, you can use the `.get` method on the enrichment table object. For example, to lookup a user from a `user_info` enrichment table by the `user_id` key we can call the `.get` method with the value of the lookup key:

```python
# detect.py

from matano.enrichment import user_info

def detect(e):
    user_id = e.deepget("user.id")
    info = user_info.get(user_id)
    ...
```

The method will return `None` in the case that the key does not exist in the enrichment table.

### Enrichment tables with multiple lookup keys

By default, if you have one lookup key defined for your enrichment table, you can simply call the `.get` method with the value of the single lookup key. If you have configured your table with multiple lookup keys, you must disambiguate the lookup key you want to use by providing a second argument to the `.get` method with the name of the lookup key to use.

For example, if we have an enrichment table with two lookup keys as so:

```yml
# enrichment/user_info/enrichment.yml

name: user_info
lookup_keys: ["user_id", "email"]
```

We can then use this enrichment table in our detection as follows:

```python
# detect.py

from matano.enrichment import user_info

def detect(e):
    user_id = e.deepget("user.id")
    info = user_info.get(user_id, "user_id")

    email = e.deepget("email")
    info = user_info.get(user_id, "email")
    ...
```

We can then either lookup our user information by user ID or email address.
