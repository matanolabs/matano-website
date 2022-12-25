"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[4685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const r={title:"Writing detections",sidebar_position:1},a=void 0,l={unversionedId:"detections/writing",id:"detections/writing",title:"Writing detections",description:"Each detection you create occupies a directory under the detections/ directory in your Matano directory.",source:"@site/docs/detections/writing.md",sourceDirName:"detections",slug:"/detections/writing",permalink:"/docs/detections/writing",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/detections/writing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Writing detections",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Detections",permalink:"/docs/detections/"},next:{title:"Importing from Sigma rules",permalink:"/docs/detections/importing-from-sigma-rules"}},c={},d=[{value:"Detection script",id:"detection-script",level:2},{value:"Detect function",id:"detect-function",level:4},{value:"Returning values from your detection",id:"returning-values-from-your-detection",level:3},{value:"Examples",id:"examples",level:3},{value:"Title function (optional)",id:"title-function-optional",level:4},{value:"Dedupe function (optional)",id:"dedupe-function-optional",level:4},{value:"Severity function (optional)",id:"severity-function-optional",level:4},{value:"Destinations function (optional)",id:"destinations-function-optional",level:4},{value:"Detection configuration file (<code>detection.yml</code>)",id:"detection-configuration-file-detectionyml",level:2},{value:"Python requirements",id:"python-requirements",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each detection you create occupies a directory under the ",(0,o.kt)("inlineCode",{parentName:"p"},"detections/")," directory in your Matano directory."),(0,o.kt)("p",null,"A detection directory has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-matano-directory\n\u251c\u2500\u2500 detections\n\u2502   \u2514\u2500\u2500 my_detection\n\u2502       \u251c\u2500\u2500 detect.py\n\u2502       \u251c\u2500\u2500 requirements.txt\n\u2502       \u2514\u2500\u2500 detection.yml\n")),(0,o.kt)("h2",{id:"detection-script"},"Detection script"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Detection scripts")," are Python programs containing the logic of your detection. To create a detection script, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"detect.py")," in your detection directory."),(0,o.kt)("p",null,"Inside the detection script, you define the following functions:"),(0,o.kt)("h4",{id:"detect-function"},"Detect function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"detect")," function is the python function that is invoked for your detection. The function will be invoked with a data record."),(0,o.kt)("p",null,"The function has the following signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def detect(record) -> bool | None:\n    ...\n")),(0,o.kt)("h3",{id:"returning-values-from-your-detection"},"Returning values from your detection"),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"detect")," function must return a boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," to signal an alert. A return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," will be interpreted as no alert for detection on that record."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Here is a sample Python detection. It runs on AWS CloudTrail logs and detects a failed attempt to export an AWS EC2 instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def detect(record):\n  return (\n    record.deepget("event.action") == "CreateInstanceExportTask"\n    and record.deepget("event.provider") == "ec2.amazonaws.com"\n    and event.outcome == "failure"\n  )\n')),(0,o.kt)("p",null,"Note the use of the normalized ECS field ",(0,o.kt)("inlineCode",{parentName:"p"},"event.outcome"),", which avoids us having to check multiple Cloudtrail properties."),(0,o.kt)("h4",{id:"title-function-optional"},"Title function (optional)"),(0,o.kt)("p",null,"You can implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," function to format the title if an alert is created using Python."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def title(record) -> str:\n  user_name = record.deepget("user.name")\n  return f"{user_name} - Elevated login failures"\n')),(0,o.kt)("h4",{id:"dedupe-function-optional"},"Dedupe function (optional)"),(0,o.kt)("p",null,"You can implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"dedupe")," function to return a ",(0,o.kt)("em",{parentName:"p"},"dedupe string")," that will be used to group rule matches into alerts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def dedupe(record) -> str:\n  return record.deepget("user.name")\n')),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/detections/alerting/configuring-alerts#deduplicating-alerts"},"alert deduplication in ",(0,o.kt)("em",{parentName:"a"},"Configuring Alerts")),"."),(0,o.kt)("h4",{id:"severity-function-optional"},"Severity function (optional)"),(0,o.kt)("p",null,"You can implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"severity")," function to return the severity (info, notice, low, medium, high or critical) to use for an alert based on the triggering event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def severity(r):\n    return (\n        "medium"\n        if "admin" in r.deepget("event.category")\n        else "low"\n    )\n')),(0,o.kt)("h4",{id:"destinations-function-optional"},"Destinations function (optional)"),(0,o.kt)("p",null,"You can implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"destinations")," function to return the ist of destination names to delivert alerts to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def destinations(r):\n    return [\n        "my_pagerduty_main", "my_slack_secops"\n        if "admin" in r.deepget("event.category")\n        else "my_slack_secops"\n    ]\n')),(0,o.kt)("h2",{id:"detection-configuration-file-detectionyml"},"Detection configuration file (",(0,o.kt)("inlineCode",{parentName:"h2"},"detection.yml"),")"),(0,o.kt)("p",null,"Each detection requires a configuration file named ",(0,o.kt)("inlineCode",{parentName:"p"},"detection.yml"),". The file has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# (optional) a unique identifier for the detection.\nid: 7ad1600d-e9dc-4251-b0ee-a65268f29add\n\n# (optional) The creation date of the detection.\ncreated: 2022/10/23\n\n# A name for the detection.\nname: login_brute_force_by_ip\n\n# (optional) A human readable representation of the detection name.\ndisplay_name: Brute Force Login Attempts by IP\n\n# (optional) Description of the detection and alert.\ndescription: Failed login attempts for a user exceeded the configured theshold.\n\n# (default: false) Whether or not detection is enabled.\nenabled: true\n\n# (optional) The steps that should be taken to investigate an alert created by this detection.\nrunbook: Idenitfy whether or not a user from this IP was able to eventually login sucessfully. Investigate this IP and search for activity from it around the duration of this event. \n\n# (optional) A list of reference links.\nreferences:\n  - https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html\n\n# (optional) A list of possible reasons for an alert from this detection is a false positive.\nfalse_positives:\n  - Non-malicious user with a forgotten password.\n\nreports:\n  # (optional) List of related MITRE ATT&CK IDs\n  attack:\n    - ta0006:t1110\n\nalert:\n  # (default: info, one of: info, notice, low, medium, high, critical) Static severity for an alert created by this detection.\n  severity: medium\n\n  # (default: 1) The threshold count for rule matches within a given deduplication window before an alert is created.\n  threshold: 5\n\n  # (default: 60) The number of minutes for which an active alert will be deduplicated and incoming rule matches will be appended to the existing alert instead of creating a new one.\n  deduplication_window_minutes: 15\n\n  # (optional) A list of Matano alert destination names to deliver alerts to.\n  destinations:\n    - slack_my_team\n    - jira_main\n\n# An array of table names for which to run the detection.\ntables:\n  - aws_cloudtrail\n\n# (optional) The last modified date.\nmodified: 2022/10/23 \n\n# (optional) A list of tags to associate with this detection.\ntags:\n  - brute_force\n")),(0,o.kt)("h2",{id:"python-requirements"},"Python requirements"),(0,o.kt)("p",null,"You can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file to the detection directory to make PyPI dependencies available to your detection program. The listed dependencies will be installed and made available to your program."))}u.isMDXComponent=!0}}]);