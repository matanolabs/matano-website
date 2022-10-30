"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[2177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=n,g=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"What makes a good audit trail?",keywords:["audit logs","audit trail"],authors:["samrose"],tags:["general"]},i=void 0,l={permalink:"/blog-archive/2022/02/05/what-makes-a-good-audit-trail",source:"@site/blog-archive/2022-02-05-what-makes-a-good-audit-trail/index.mdx",title:"What makes a good audit trail?",description:"At Apptrail, we obsess over audit trails and how to make them most valuable for our customers, so we thought we'd examine some real world examples of audit trails and see what makes some stand out from others.",date:"2022-02-05T00:00:00.000Z",formattedDate:"February 5, 2022",tags:[{label:"general",permalink:"/blog-archive/tags/general"}],readingTime:5.405,hasTruncateMarker:!0,authors:[{name:"Samrose Ahmed",url:"https://www.matano.dev",email:"samrose@matano.dev",imageURL:"https://github.com/Samrose-Ahmed.png",key:"samrose"}],frontMatter:{title:"What makes a good audit trail?",keywords:["audit logs","audit trail"],authors:["samrose"],tags:["general"]},prevItem:{title:"S3 POST Policy - The hidden S3 feature you haven't heard of",permalink:"/blog-archive/2022/02/14/s3-post-policy"}},s={authorsImageUrls:[void 0]},d=[{value:"What&#39;s an audit trail anyway?",id:"whats-an-audit-trail-anyway",level:2},{value:"Some real world examples",id:"some-real-world-examples",level:2},{value:"Google Admin",id:"google-admin",level:3},{value:"Stripe",id:"stripe",level:3},{value:"Security history",id:"security-history",level:4},{value:"Request logs",id:"request-logs",level:4},{value:"Github",id:"github",level:3},{value:"AWS CloudTrail",id:"aws-cloudtrail",level:3},{value:"And more",id:"and-more",level:3},{value:"Comparison",id:"comparison",level:2},{value:"Self service access",id:"self-service-access",level:4},{value:"Exportability",id:"exportability",level:4},{value:"Programmatic API access",id:"programmatic-api-access",level:4},{value:"Audit log streaming",id:"audit-log-streaming",level:4},{value:"Data retention",id:"data-retention",level:4},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"At Apptrail, we obsess over audit trails and how to make them most valuable for our customers, so we thought we'd examine some real world examples of audit trails and see what makes some stand out from others."),(0,n.kt)("p",null,"There's a lot of details and requirements that go into building an audit trails solution, from availability and immutability to\nsecurity and delivery, but, let's examine some of the features that differentiate solutions from one another."),(0,n.kt)("h2",{id:"whats-an-audit-trail-anyway"},"What's an audit trail anyway?"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"If you're already familiar with audit trails, feel free to skip this section.")),(0,n.kt)("p",null,"An audit trail is a way to record user or API activity and surface that information. Generally, an audit trail lets admins or users\nanswer the ",(0,n.kt)("em",{parentName:"p"},"Who"),", ",(0,n.kt)("em",{parentName:"p"},"When"),", ",(0,n.kt)("em",{parentName:"p"},"Where"),", and ",(0,n.kt)("em",{parentName:"p"},"What")," of an action. Audit trails can be used to monitor suspicious activity\nor replay activity in the aftermath of an event."),(0,n.kt)("p",null,"We use ",(0,n.kt)("em",{parentName:"p"},"audit trails"),", ",(0,n.kt)("em",{parentName:"p"},"audit logs"),", and ",(0,n.kt)("em",{parentName:"p"},"audit events")," here interchangeably."),(0,n.kt)("h2",{id:"some-real-world-examples"},"Some real world examples"),(0,n.kt)("p",null,"Lets take a whirl through some popular tools that offer audit logs."),(0,n.kt)("h3",{id:"google-admin"},"Google Admin"),(0,n.kt)("p",null,"Google Workspace has a mature audit logs offering. Let's see what we can do:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(25774).Z,width:"1432",height:"504"})),(0,n.kt)("p",null,"Immediately, we can see all the recent actions that took place with Google workspace.\nThe information contains the event name, description, time, who did the action (",(0,n.kt)("em",{parentName:"p"},"actor"),"), and the IP address associated with the actor. The data is filterable and offers a CSV export through the UI. Google offers several types of audit logs, and data retention (how long the data is stored ranges from 6 to 15 months."),(0,n.kt)("p",null,"Google workspace audit log coverage is ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging/docs/audit/gsuite-audit-logging#log-types"},"fairly extensive"),", with both configuration changes and data access changes audited. Google also offers ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging/docs/audit/configure-gsuite-audit-logs#api"},"an API")," for accessing audit logs, and also enables ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/logging/docs/audit/configure-gsuite-audit-logs#gcloud"},"streaming Google Audit logs into Google Cloud"),"."),(0,n.kt)("h3",{id:"stripe"},"Stripe"),(0,n.kt)("p",null,"Stripe uses logs in a few places. Let's take a look."),(0,n.kt)("h4",{id:"security-history"},"Security history"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(54497).Z,width:"1134",height:"481"})),(0,n.kt)("p",null,"These events contain important actions, and similarly add information about the when, who, and where of the action.\nThe results are accessible in the Dashboard UI, and exportable to CSV."),(0,n.kt)("h4",{id:"request-logs"},"Request logs"),(0,n.kt)("p",null,"Stripe also offers developer oriented request logs. These are often used for debugging but are also essentially audit logs."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(38894).Z,width:"1165",height:"566"})),(0,n.kt)("p",null,"The Stripe request logs contain full request, response, and context data for every HTTP request\nmade to the API. They're viewable through the Stripe Dashboard UI and filterable on each dimension. Stripe request logs have a\n15 month data retention period."),(0,n.kt)("h3",{id:"github"},"Github"),(0,n.kt)("p",null,"Github offers a pretty full featured ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account"},"audit logs solution"),"\nto its Enterprise customers. You can access Github audit logs by 1) using the web UI, 2) polling with the REST API, and 3) streaming to destinations like S3 or Splunk using\ntheir audit log streaming feature."),(0,n.kt)("p",null,"Streaming audit logs is an important feature that a lot of audit logs solutions lack. It unlocks a lot of usecases, like being able to explore a large amount of data or retaining ownership over data, that a UI or API based approach don't allow."),(0,n.kt)("h3",{id:"aws-cloudtrail"},"AWS CloudTrail"),(0,n.kt)("p",null,"AWS offers audit logs for most of its services using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"},"CloudTrail"),". You can query audit logs from the Console UI and using the AWS APIs. You can also deliver AWS audit logs to your S3 bucket or CloudWatch logs group. CloudTrail offers a pretty limited (heavily paginated and throttled) ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html"},"LookupEvents")," API to query audit data but in general nudges you towards sending audit logs to S3."),(0,n.kt)("h3",{id:"and-more"},"And more"),(0,n.kt)("p",null,"There's many more software services offering audit logs. For the sake of brevity:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.zendesk.com/hc/en-us/articles/4408828001434"},"Zendesk")," offers audit logs through a UI, with filters, CSV export, and a REST query API. Logs\nare retained for 1 year, which is not configurable."),(0,n.kt)("li",{parentName:"ul"},"1Password offers a UI based ",(0,n.kt)("a",{parentName:"li",href:"https://support.1password.com/activity-log/"},"activity log")," with viewable and searchable activity including event, actor, and date, but omitting context such as IP. The activity log has a non configurable retention of 6 months.\nAdditionally, they offer a more extensive REST ",(0,n.kt)("a",{parentName:"li",href:"https://blog.1password.com/introducing-events-api/"},"Events API")," for programmatic access and access to more audit events.")),(0,n.kt)("h2",{id:"comparison"},"Comparison"),(0,n.kt)("p",null,"That covers a bit about audit trails, how customers use them, and what elements make them most useful to customers. Summarizing our survey:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:"center"},"Filterable?"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Exportable?"),(0,n.kt)("th",{parentName:"tr",align:"center"},"API access?"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Streaming?"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Configurable retention?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Stripe"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1Password"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Zendesk"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Google Workspace"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Github"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CloudTrail"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,n.kt)("p",null,"We can see audit trails vary on several dimensions:"),(0,n.kt)("h4",{id:"self-service-access"},"Self service access"),(0,n.kt)("p",null,"Admins being able to access the audit logs themselves, without needing a manual request, is the first step to a customer facing audit trail. At the bare minimum, a web UI to explore audit\nlogs should be provided."),(0,n.kt)("h4",{id:"exportability"},"Exportability"),(0,n.kt)("p",null,"Viewing audit logs in a UI is good for one off usecases, but users often want to export the data for analysis with other tools."),(0,n.kt)("h4",{id:"programmatic-api-access"},"Programmatic API access"),(0,n.kt)("p",null,"Users want to be able to interact with their data programatically, for scripting, workflows, etc. The API should allow for querying events by time and filtering on fields. These APIs are generally paginated and throttled, as there is an unbounded number of audit logs."),(0,n.kt)("h4",{id:"audit-log-streaming"},"Audit log streaming"),(0,n.kt)("p",null,"When there's a large amount of audit logs, a poll based API is not sufficient, and users will want to have their data pushed into tools like S3 or Splunk, or other SIEM's or data analysis tools, for analysis."),(0,n.kt)("h4",{id:"data-retention"},"Data retention"),(0,n.kt)("p",null,"Audit logs must be immutable to protect their integrity, but they are usually retained for a period of time, ranging from months to years. Ideally, this should be configurable by the user. Adding audit log streaming also automatically enables this, as it gives the customer ownership of their audit data (essentially unlimited retention)."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"That was a short overview of some popular tools and how they offer audit trails to their customers.\nWe can see there are a range of different features that go into an audit logs solution, and software\nproviders vary in what they currently offer."),(0,n.kt)("p",null,"Do you have any examples of great audit logs? Feel free to share."))}m.isMDXComponent=!0},25774:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gadmin1-82647547805b5fba819d9c6619f8cece.png"},54497:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/stripe1-bbc2ef7620b5aa3760c98ab8b8244714.png"},38894:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/stripe2-eb6db5bd9019140a58eee0e445783115.png"}}]);