---
sidebar_position: 3
title: Getting started
---

## Deployment

To get started with Matano, run the `matano init` command. Make sure you have AWS credentials in your environment (or in an AWS CLI profile).

The interactive CLI wizard will walk you through getting started by generating an initial [Matano directory](./matano-directory.md) for you, initializing your AWS account, and deploying Matano into your AWS account.

Initial deployment takes a few minutes.

:::info

Matano uses Lambda [reserved concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html) to limit the concurrency of some Lambda functions to 1. If you are deploying Matano in a new AWS account with the default Lambda account concurrency limit, you will need to submit a limit increase to have your limit increased beyond the default. (You can request a limit of e.g. 100 or the default of 1000).

:::

### Retrieving resource values

Matano creates several resources, such as S3 buckets and SQS queues, that you may need to interact with. Use the `matano info` CLI command to retrieve these values.
