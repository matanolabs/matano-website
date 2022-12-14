---
title: Remote cache
sidebar_position: 3
---

You can use a _remote cache_ in your detections to persist and retrieve values by a key. This gives you a powerful way to be able to retain context and perform correlation across your detections.

## Types supported by the remote cache

You can store the following types in the remote cache:

#### Integer (counter)

You can store integers to keep track of counters. You can set and get these counters, as well as atomically increment or decrement them.

#### String set

String sets track unique collections of strings. Use this to append values that you want to track.

#### String

You can also directly store strings in the cache.

## Using the remote cache

To use the remote cache in your detection, import the remotecache and instantiate it with a namespace:

```python
from detection import remotecache

user_ips = remotecache("UserIp")
```

The remote cache implements `dict`-like methods, so in your Python code, you can treat it like a Python dictionary.

### Time to live

You can specify a Time to Live (TTL), in seconds, for cache entries to expire when instantiating the cache:

```python
user_ips = remotecache("UserIp", ttl=86400)
```

If you don't specify a TTL, a default TTL of 3600 seconds (1 hour) is used.

### Adding a value to the cache

```python
users_ips = remotecache("UserIp")
users_ips["john@example.com"] = set("1.1.1.1")
```

### Getting a value from the cache

```python
users_ips = remotecache("UserIp")
user_ip = users_ips["john@example.com"]
user_ip = users_ips.get("john@example.com")
```

### Removing a value from the cache

```python
users_ips = remotecache("UserIp")
del users_ips["john@example.com"]
```

### Incrementing/decrementing an integer counter

The remote cache provides methods to atomically increment or decrement an integer value in a single operation.

```python
user_failure_count = remotecache("UserFailure")

user_failure_count.increment_counter("john@example.com")
user_failure_count.increment_counter("john@example.com", 10) # optional value to increment by

user_failure_count.decrement_counter("john@example.com")
user_failure_count.decrement_counter("john@example.com", 10) # optional value to decrement by
```

### Appending to and removing from a string set

The remote cache provides methods to atomically add or remove an item from a string set in a single operation. You can append or remove a single string by passing a string or multiple strings by passing an iterable (e.g `list`, `set`, etc.) of strings.

```python
users_ips = remotecache("UserIp")

# provide a string or iterable
users_ips.add_to_string_set("john@example.com", "1.1.1.1")
users_ips.add_to_string_set("john@example.com", ["1.1.1.1", "8.8.8.8"])
users_ips.remove_from_string_set("john@example.com", "1.1.1.1")
users_ips.remove_from_string_set("john@example.com", {"1.1.1.1", "8.8.8.8"})
```

## Notes

- The remote cache is backed by a DynamoDB table.
- The remote cache is eventually consistent. Do not rely on it for situations where you need strict in order guarantees or updates within short periods of time.

## Examples

The following is an example detection using the remote cache with a counter.

```python
from detection import remotecache

# an hourly cache
errors_count = remotecache("access_denied", ttl=3600)
failure_threshold = 15

def detect(record):
    if record.deepget("aws.cloudtrail.error_code") == "AccessDenied":
        # A unique key on the user name
        key = record.deepget("user.name")

        # Increment the counter and alert if exceeds a threshold
        error_count = errors_count.increment_counter(key)
        if error_count >= failure_threshold:
            del errors_count[key]
            return True
```

The following is an example detection using the remote cache with a string set.

```python
from detection import remotecache

# a weekly cache of user -> ip[]
users_ips = remotecache("user_ip", ttl=86400 * 7)

def detect(record):
    if (
      record.deepget("event.action") == "ConsoleLogin" and
      record.deepget("event.outcome") == "success"
    ):
        # A unique key on the user name
        user = record.deepget("user.name")
        record_ip = record.deepget("source.ip")

        prev_ips = users_ips[user]
        curr_ips = users_ips.add_to_string_set(user, record_ip)
        # Alert on new IPs
        new_ips = curr_ips - prev_ips
        if curr_ips and new_ips:
            return True
```
