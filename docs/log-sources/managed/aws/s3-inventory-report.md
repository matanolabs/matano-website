---
title: Amazon S3 Inventory Reports
sidebar_label: Amazon S3 Inventory Reports
sidebar_position: 3
---

The Amazon S3 Inventory Reports Matano managed log source lets you ingest your S3 inventory reports directly into Matano.

Amazon S3 Inventory Reports contain a full listing of every object in an S3 bucket.

## Usage

Use the managed log source by specifying the `managed.type` property in your `log_source` as `AWS_S3INVENTORY`.

```yml
name: "aws_s3inventory"

managed:
  type: "AWS_S3INVENTORY"
```

## Tables

The S3 inventory reports managed log source supports a single table containing S3 inventory reports.

## Ingest

### S3

S3 server inventory reports are always delivered to S3 buckets. You can provide the S3 bucket you are using for delivery to Matano by using the `ingest.s3_source` configuration in your `log_source.yml` (Bring your own bucket).

#### Format

Matano only supports the **CSV** format for Amazon S3 inventory reports.

#### Specifying CSV headers

Because Amazon S3 inventory reports allow you to configure which fields are present in the report, you must specify the header format for your configuration.

To determine the header format for S3 inventory reports, access an existing delivery and locate the `manifest.json` file for the delivery. The file will contain the CSV headers in the `fileSchema` key. Add the list of strings in that order to your `log_source.yml` under `ingest.csv_headers`.

For example, if your `manifest.json` is as follows:

```json
{
  ...
  "fileSchema" : "Bucket, Key, Size, LastModifiedDate, ETag, StorageClass, IsMultipartUploaded, ReplicationStatus, EncryptionStatus, ObjectLockRetainUntilDate, ObjectLockMode, ObjectLockLegalHoldStatus, IntelligentTieringAccessTier, BucketKeyStatus, ChecksumAlgorithm"
}
```

You would specify the following in your `log_source.yml`

```yml
# log_source.yml
name: aws_s3inventory
managed:
  type: aws_s3inventory

ingest:
  csv_headers: ["Bucket", "Key", "Size", "LastModifiedDate", "ETag", "StorageClass", "IsMultipartUploaded", "ReplicationStatus", "EncryptionStatus",  "ObjectLockRetainUntilDate", "ObjectLockMode", "ObjectLockLegalHoldStatus", "IntelligentTieringAccessTier", "BucketKeyStatus", "ChecksumAlgorithm"]
```

## Schema

S3 Inventory report data is normalized to ECS fields. Custom fields are normalized into the `aws.s3inventory` field. You can view the [complete mapping][1] to see the full schema.

[1]: https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/aws_s3inventory/log_source.yml

## Notes

S3 inventory reports are delivered hourly or weekly. When querying S3 inventory report data, make sure to add a constraint on the `ts` column (partition) to ensure that you are only accessing data for a specific report.
