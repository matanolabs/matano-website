---
title: Transformation
sidebar_position: 3
---

Matano allows you to transform your data into a normalized form. The transformation is specified using the [Vector ReMap Language (VRL)](https://vector.dev/docs/reference/vrl/).

### Using Matano managed log sources

If you're using a [Matano managed log source](./managed-log-sources/index.mdx), a transformation will be applied for you and you don't need to write a VRL expression to transform your data.

## Transformations

To apply a transformation to your log source, specify a VRL expression to transform your data as a string in the `transform` key in your `log_source.yml` file.

### Example: parsing JSON

Let's have a look at a simple example. Imagine that you're working with
HTTP log events that look like this:

```json
{
  "line":"{\"status\":200,\"srcIpAddress\":\"1.1.1.1\",\"message\":\"SUCCESS\",\"username\":\"ub40fan4life\"}"
}
```

You want to apply these changes to each event:

- Parse the raw `line` string into JSON, and explode the fields to the top level
- Rename `srcIpAddress` to the `source.ip` ECS field
- Remove the `username` field
- Convert the `message` to lowercase

Adding this VRL program to your log source as a `transform` step would accomplish all of that:

###### log_source.yml
```yml
transform: |
  . = object!(parse_json!(string!(.line)))
  .source.ip = del(.srcIpAddress)
  del(.username)
  .message = downcase(string!(.message))

schema:
  ecs_field_names:
  - source.ip
  - http.status
```

The resulting event 🎉:

```json
{
  "message": "success",
  "status": 200,
  "source": {
    "ip": "1.1.1.1"
  }
}
```

### Writing transformation VRL expressions

The input to your VRL expression is a single record from your data source. The output of the VRL expression is the transformed record.

<!-- ### Examples -->
