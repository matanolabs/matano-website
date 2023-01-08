---
sidebar_position: 1
title: Metadata reporting
---

Matano reports **entirely anonymous** metadata about your high level usage of Matano. This metadata is used to help us understand how Matano is being used and how we can improve the project. The metadata we report is anonymous and is only meaningful at the aggregate level.

This is a completely optional feature and you can disable it.

## Disabling metadata reporting

You can disable metadata reporting in the following ways.

Run the following command:

```bash
matano disable-metadata-reporting
```

or export the following environment variable:

```bash
export MATANO_NO_METADATA_REPORTING=1
```

Matano also respects the `DO_NOT_TRACK` [standard environment variable](https://consoledonottrack.com).

## What metadata is reported?

Matano reports the following metadata anonymously:

- The version of Matano used
- The name of the CLI command ran
- General information about the machine (OS, architecture, etc)

Sensitive or possibly sensitive data is never collected.

The metadata reporting source code is fully open source and can be [viewed here](https://github.com/matanolabs/matano/tree/main/cli/src/hooks/metadata-reporting.ts).

## Why we report metadata

Matano is a free and open source project and metadata reporting allows us to accurately assess feature usage and pain points across the community. This lets us make informed decisions about what features to prioritize and how to improve the project. If you choose to allow metadata reporting, we appreciate your support to help us make Matano better for everyone.
