---
title: Matano now supports 10+ AWS managed log sources
authors: "samrose"
keywords: ["aws", "security", "cloud", "s3"]
image: ./sg.png
---

<head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@AhmedSamrose" />
</head>

We're adding support today to Matano for seven new AWS managed log sources, including S3 Access logs, S3 Inventory reports, AWS ELB access logs, Amazon Inspector findings, and AWS Config configuration history data. With this enhancement, you can gain an even more comprehensive view of your AWS environment and improve your security posture.

<!-- truncate -->

AWS, with its over two hundred services, generates a multitude of logs that are critical for understanding whats going in your cloud environment. Matano already has [full support for CloudTrail logs](https://www.matano.dev/docs/log-sources/managed-log-sources/aws/cloudtrail), which centralize logs from all your AWS services into your own Matano security lake. This new enhancement adds integrations for AWS services that include specific additional information beyond what AWS CloudTrail provides. These include:

### S3 Access Logs

S3 server access logs provide information on all requests made to their S3 buckets. This information includes the requestor's IP address, the request type (e.g., GET, PUT), and the response status code. With Matano's support for S3 access logs, you can retain a granular history of actions performed on your S3 bucket.

### S3 Inventory Reports

S3 Inventory reports provide a comprehensive inventory of all the objects in an S3 bucket and their metadata. This includes object size, last modified date, and storage class. With S3 inventory reports in Matano, you can store a full listing of the objects in an S3 bucket inside your data lake.

### AWS ELB Access Logs

AWS ELB access logs provide information on all requests made to an Elastic Load Balancer, including Classic Load Balancers, Application Load Balancers, and Network Load Balancers. This information includes the requestor's IP address, the request type, the response status code, and more.

### Amazon Inspector findings

Amazon Inspector findings report the results of vulnerability scanning on your ECR images, EC2 instances, and Lambda functions. Using the Matano managed log source for Amazon Inspector findings, you can centrally track all the vulnerability findings across your AWS resources inside your data lake.

### AWS Config configuration history

AWS Config is an AWS service that tracks changes to AWS resource configurations over time. You can use the the Matano managed log source for AWS Config to retain and analyze all changes made to your AWS resources.

### Up next

In the near future, we'll be expanding our AWS managed log support even further, particularly with upcoming support for AWS VPC flow logs.

### Get started now

You can ingest and analyze any of these log sources in your AWS account out of the box today. View the [complete documentation](https://www.matano.dev/docs/log-sources/managed-log-sources/aws) for more information.
