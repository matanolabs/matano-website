---
title: Writing detections
sidebar_position: 1
---

Each detection you create occupies a directory under the `detections/` directory in your Matano directory.

A detection directory has the following structure:

```
my-matano-directory
├── detections
│   └── my_detection
│       ├── detect.py
│       ├── requirements.txt
│       └── detection.yml
```

## Detection script

_Detection scripts_ are Python programs containing the logic of your detection. To create a detection script, create a file called `detect.py` in your detection directory.

Inside the detection script, you define the following functions:

#### Detect function

The `detect` function is the python function that is invoked for your detection. The function will be invoked with a data record.

The function has the following signature:

```python
def detect(record) -> bool | None:
    ...
```

### Returning values from your detection

Your `detect` function must return a boolean `True` to signal an alert. A return value of `False` or `None` will be interpreted as no alert for detection on that record.

### Examples

Here is a sample Python detection. It runs on AWS CloudTrail logs and detects a failed attempt to export an AWS EC2 instance.

```python
def detect(record):
  return (
    record.deepget("event.action") == "CreateInstanceExportTask"
    and record.deepget("event.provider") == "ec2.amazonaws.com"
    and event.outcome == "failure"
  )
```

Note the use of the normalized ECS field `event.outcome`, which avoids us having to check multiple Cloudtrail properties.

#### Title function (optional)

You can implement a `title` function to format the title if an alert is created using Python.

```python
def title(record) -> str:
  user_name = record.deepget("user.name")
  return f"{user_name} - Elevated login failures"
```

#### Dedupe function (optional)

You can implement a `dedupe` function to return a _dedupe string_ that will be used to group rule matches into alerts.

```python
def dedupe(record) -> str:
  return record.deepget("user.name")
```

Read more about [alert deduplication in _Configuring Alerts_](./alerting/configuring-alerts.md#deduplicating-alerts).

#### Severity function (optional)

You can implement a `severity` function to return the severity (info, notice, low, medium, high or critical) to use for an alert based on the triggering event.

```python
def severity(r):
    return (
        "medium"
        if "admin" in r.deepget("event.category")
        else "low"
    )
```

#### Destinations function (optional)

You can implement a `destinations` function to return the ist of destination names to delivert alerts to.

```python
def destinations(r):
    return [
        "my_pagerduty_main", "my_slack_secops"
        if "admin" in r.deepget("event.category")
        else "my_slack_secops"
    ]
```

## Detection configuration file (`detection.yml`)

Each detection requires a configuration file named `detection.yml`. The file has the following structure:

```yml
# (optional) a unique identifier for the detection.
id: 7ad1600d-e9dc-4251-b0ee-a65268f29add

# (optional) The creation date of the detection.
created: 2022/10/23

# A name for the detection.
name: login_brute_force_by_ip

# (optional) A human readable representation of the detection name.
display_name: Brute Force Login Attempts by IP

# (optional) Description of the detection and alert.
description: Failed login attempts for a user exceeded the configured theshold.

# (default: false) Whether or not detection is enabled.
enabled: true

# (optional) The steps that should be taken to investigate an alert created by this detection.
runbook: Idenitfy whether or not a user from this IP was able to eventually login sucessfully. Investigate this IP and search for activity from it around the duration of this event. 

# (optional) A list of reference links.
references:
  - https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html

# (optional) A list of possible reasons for an alert from this detection is a false positive.
false_positives:
  - Non-malicious user with a forgotten password.

reports:
  # (optional) List of related MITRE ATT&CK IDs
  attack:
    - ta0006:t1110

alert:
  # (default: info, one of: info, notice, low, medium, high, critical) Static severity for an alert created by this detection.
  severity: medium

  # (default: 1) The threshold count for rule matches within a given deduplication window before an alert is created.
  threshold: 5

  # (default: 60) The number of minutes for which an active alert will be deduplicated and incoming rule matches will be appended to the existing alert instead of creating a new one.
  deduplication_window_minutes: 15

  # (optional) A list of Matano alert destination names to deliver alerts to.
  destinations:
    - slack_my_team
    - jira_main

# An array of table names for which to run the detection.
tables:
  - aws_cloudtrail

# (optional) The last modified date.
modified: 2022/10/23 

# (optional) A list of tags to associate with this detection.
tags:
  - brute_force
```

## Python requirements

You can add a `requirements.txt` file to the detection directory to make PyPI dependencies available to your detection program. The listed dependencies will be installed and made available to your program.
