---
sidebar_position: 2
title: Matano configuration file reference
---

The Matano configuration file stores configuration around your matano deployment. The file is named `matano.config.yml` and lives at the root of your Matano directory.

The structure of the configuration is as follows:

```yml
# matano.config.yml

# AWS related configuration
aws:
  # Mandatory. AWS Account and region to deploy to.
  account: 123456789012
  region: us-east-1

  # (optional) Custom AWS tags to add to all Matano resources
  tags:
    key: value
    dept: "123"
```
