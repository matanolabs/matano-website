"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[5237],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,g=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(80211);const o={title:"Serverless asynchronous Iceberg data ingestion",authors:"samrose",keywords:["apache-iceberg","iceberg","serverless","big data"],image:"./cover.png"},s=void 0,l={permalink:"/blog/2022/09/13/ingesting-data-iceberg",editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/blog/2022-09-13-ingesting-data-iceberg/index.mdx",source:"@site/blog/2022-09-13-ingesting-data-iceberg/index.mdx",title:"Serverless asynchronous Iceberg data ingestion",description:"Matano relies on Apache Iceberg as its main data lake and store. To ingest data into Matano Iceberg tables, we rely on a unique design that keeps the system both realtime and serverless.",date:"2022-09-13T00:00:00.000Z",formattedDate:"September 13, 2022",tags:[],readingTime:5.81,hasTruncateMarker:!0,authors:[{name:"Samrose Ahmed",email:"samrose@matano.dev",key:"samrose"}],frontMatter:{title:"Serverless asynchronous Iceberg data ingestion",authors:"samrose",keywords:["apache-iceberg","iceberg","serverless","big data"],image:"./cover.png"},prevItem:{title:"Managed CloudTrail and Zeek support",permalink:"/blog/2022/10/26/zeek-cloudtrail-support"},nextItem:{title:"Announcing Matano",permalink:"/blog/2022/08/11/announcing-matano"}},c={image:a(66952).Z,authorsImageUrls:[void 0]},d=[{value:"Background",id:"background",level:2},{value:"Design to ingest data into Iceberg",id:"design-to-ingest-data-into-iceberg",level:2},{value:"Concurrent commits",id:"concurrent-commits",level:3},{value:"Handling duplicate messages",id:"handling-duplicate-messages",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@AhmedSamrose"})),(0,r.kt)("p",null,"Matano relies on Apache Iceberg as its main data lake and store. To ingest data into Matano Iceberg tables, we rely on a unique design that keeps the system both realtime and serverless."),(0,r.kt)("figure",{align:"center"},(0,r.kt)("img",{width:"512px",src:i.Z})),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Apache Iceberg is an open data format for large datasets. It lets you query data stored in object storage from a variety of compute engines. Feel free to learn about it ",(0,r.kt)("a",{parentName:"p",href:"https://iceberg.apache.org"},"here"),"."),(0,r.kt)("p",null,"Internally, Iceberg works by maintaining metadata files to track your table's data. For example, every time data is inserted or deleted, Iceberg does record keeping and stores files to track these changes. Thus, if you have a system that generates data and want to query the data using an Apache Iceberg table, you need to ensure the files are also appended to Iceberg. In a realtime/streaming scenario, committing Iceberg metadata alongside data is not often desirable or feasible, as it will result in many concurrent commits and many small metadata files. If you are writing data directly using an engine like Apache Flink, for example, then this is handled for you, through some sort of buffering. However, using such an engine may not be possible for a variety of reasons; e.g. you're ingesting data produced by an external system or you're in an environment not conducive to running an engine like Flink (e.g., in our case, a Lambda function)."),(0,r.kt)("p",null,"We can design a system where we decouple data writing from Iceberg metadata ingestion. This is a good fit for realtime streaming systems. See, for example, ",(0,r.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2021/fastingest-low-latency-gobblin"},"LinkedIn's FastIngest system using Gobblin"),". We additionally needed the system to be completely serverless, and so couldn't rely on a host based buffering model."),(0,r.kt)("h2",{id:"design-to-ingest-data-into-iceberg"},"Design to ingest data into Iceberg"),(0,r.kt)("p",null,"To summarize, we need a system that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Lets us write data independent of Iceberg. For example, we can use a managed service like Firehose to write the Parquet data files or write them ourselves from a Lambda function."),(0,r.kt)("li",{parentName:"ol"},"Ingest the data files into Iceberg in ",(0,r.kt)("em",{parentName:"li"},"realtime"),". Thus, we don't want a batch based approach."),(0,r.kt)("li",{parentName:"ol"},"Be completely serverless. We don't want a system that e.g. relies on long running compute or an in memory/on disk buffer.")),(0,r.kt)("p",null,"The design works as follows. First, we write data files directly to S3. Next, we configure an S3 event notification on this bucket. The S3 event notification is sent to an SQS queue. We add a Lambda function trigger to this SQS queue. The Lambda function, using the Java Apache Iceberg library, calls Iceberg APIs (namely ",(0,r.kt)("inlineCode",{parentName:"p"},"appendFiles"),") and ingests the files that were written to S3 into Apache Iceberg."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(29282).Z,width:"894",height:"250"})),(0,r.kt)("h3",{id:"concurrent-commits"},"Concurrent commits"),(0,r.kt)("p",null,"There's several considerations here. First, we need to ensure we are not making too many concurrent commits to an Iceberg table. In short, each time we append files to an Iceberg table, that creates a commit, and you cannot have a high number of concurrent commits to a single table because Iceberg needs to maintain atomicity by locking the table. Therefore, in a streaming scenario, we need to introduce some sort of buffering. As a durable queue, SQS can be used as a buffer for ingesting our files into Iceberg tables. You can set a batch size and window that is both realtime and ensures you aren't creating commits too often. In general, there is always a tradeoff with latency of data ingestion but one can experiment to set a satisfactory buffering rate."),(0,r.kt)("h3",{id:"handling-duplicate-messages"},"Handling duplicate messages"),(0,r.kt)("p",null,"If you're an astute observer, you may have noticed that our inclusion of SQS in our design introduced the possibility of duplicate messages, as SQS only guarantees at least once delivery. In this scenario, this would mean that we would accidentally incorrectly ingest the same file twice into Iceberg. We can handle this with a DynamoDB table to track duplicates. Each S3 event notification includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"sequencer")," key that is unique per file. We can use a DynamoDB condition expression before committing each file to Iceberg to ensure we aren't processing a duplicate."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"Let's dig a bit deeper into a how we'd actually implement this. These examples are simplified, see a full example with imports ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/lib/java/matano/iceberg_metadata/src/main/kotlin/com/matano/iceberg/IcebergMetadataWriter.kt"},"on GitHub"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class IcebergMetadataWriter {\n    // In a real world usecase, you can create this dynamically from the data.\n    val icebergTable: Table = icebergCatalog.loadTable(TableIdentifier.of(Namespace.of(NAMESPACE), TABLE_NAME))\n    val appendFiles: AppendFiles = icebergTable.newAppend()\n\n    // Lambda handler\n    fun handle(sqsEvent: SQSEvent) {\n        for (record in sqsEvent.records) {\n            processRecord(record, tableObjs)\n        }\n        appendFiles.commit()\n    }\n}\n")),(0,r.kt)("p",null,"We have a Lambda handler processing an SQS event. We create a new appendFiles for Iceberg. We then process each record in the event and (remember, we receive multiple files to commit based on our batch size) and append a file for each record and then we commit the entire appendFiles."),(0,r.kt)("p",null,"Let's look at the how we process each record:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun processRecord(sqsMessage: SQSMessage): Unit {\n    val record = S3EventNotification.parseJson(sqsMessage.body).records[0]\n    val s3Bucket = record.s3.bucket.name\n    val s3Object = record.s3.`object`\n    val s3ObjectKey = s3Object.key\n    val s3ObjectSize = s3Object.sizeAsLong\n    val s3Path = "s3://$s3Bucket/$s3ObjectKey"\n\n    if (checkDuplicate(s3Object.sequencer)) {\n        println("Found duplicate SQS message for key: ${s3ObjectKey}. Skipping...")\n        return\n    }\n\n    val metrics = readParquetMetrics(s3Path, icebergTable)\n    val partition = PartitionSpec.builderFor(icebergTable.schema()).day(TIMESTAMP_COLUMN_NAME).build()\n    val dataFile = DataFiles.builder(partition)\n            .withPath(s3Path)\n            .withFileSizeInBytes(s3ObjectSize)\n            .withFormat("PARQUET")\n            .withMetrics(metrics)\n            .build()\n    appendFiles.appendFile(dataFile)\n}\n')),(0,r.kt)("p",null,"There's a few things going on here. For each SQS record (which represents an S3 file) we're appending a file to the Iceberg table. In addition to the path of the S3 File, we also provide to Iceberg the file size, which was conveniently included in the S3 event notification, as well as metrics, which are used by Iceberg for querying. To retreive the metrics from our Parquet files, we'll need to make a network call, but it will read just the footer, where the metrics are stored. Here's the implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun readParquetMetrics(s3Path: String, table: Table): Metrics {\n    return ParquetUtil.fileMetrics(fileIO.newInputFile(s3Path), MetricsConfig.forTable(table))\n}\n")),(0,r.kt)("p",null,"Lastly, we need to implement checking for duplicates. We use a DynamoDB table and do a conditional PutItem to ensure we aren't processing a duplicate. Our code looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun checkDuplicate(sequencer: String): Boolean {\n    // TTL to expire old DynamoDB items\n    val expireTime = ((System.currentTimeMillis() / 1000L) + DDB_ITEM_EXPIRE_SECONDS).toString()\n    val attrs = mapOf(\n            "sequencer" to AttributeValue(sequencer),\n            "ttl" to AttributeValue().apply { this.setN(expireTime) }\n    )\n    val req = PutItemRequest(DUPLICATES_DDB_TABLE_NAME, attrs)\n            .apply { this.conditionExpression = "attribute_not_exists(sequencer)" }\n\n    try { ddb.putItem(req) }\n    catch (e: ConditionalCheckFailedException) {\n        return true\n    }\n    return false\n}\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"And that's how we do Iceberg ingestion in Matano. We think its a lightweight and useful pattern for ingesting data into Iceberg tables. Feel free to use and adapt it in your systems. You can also view a real world implementation inside the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/lib/java/matano/iceberg_metadata/src/main/kotlin/com/matano/iceberg/IcebergMetadataWriter.kt"},"Matano GitHub repo"),"."),(0,r.kt)("p",{style:{fontSize:"20px"}},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Interested in how we use Iceberg to build the open source security lake platform for AWS? Check out ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/matanolabs/matano"},(0,r.kt)("strong",{parentName:"a"},"Matano on GitHub"))," and give us a star."))))}m.isMDXComponent=!0},80211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cover-0985a53694269ef145ffa0f614930418.png"},29282:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arch-e64180970c00e38fe1fb90892a170f57.png"},66952:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cover-0985a53694269ef145ffa0f614930418.png"}}]);