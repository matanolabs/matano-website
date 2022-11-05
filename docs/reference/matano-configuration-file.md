---
sidebar_position: 1
title: Matano configuration file reference
---

The Matano configuration file stores configuration around your matano deployment. The file is named `matano.config.yml` and lives at the root of your Matano directory.

The structure of the configuration is as follows:

```yml
# matano.config.yml

# Mandatory. AWS Account and region to deploy to.
aws_account: 123456789012
aws_region: us-east-1

# (optional) Custom AWS tags to add to all Matano resources
aws_tags:
  key: value
  dept: "123"
```
