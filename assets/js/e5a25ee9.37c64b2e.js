"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[7092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={title:"Authoring detections",sidebar_position:1},a=void 0,l={unversionedId:"detections/authoring",id:"detections/authoring",title:"Authoring detections",description:"Each detection you create occupies a directory under the detections/ directory in your Matano directory.",source:"@site/docs/detections/authoring.md",sourceDirName:"detections",slug:"/detections/authoring",permalink:"/docs/detections/authoring",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/detections/authoring.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Authoring detections",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Detections",permalink:"/docs/detections/"},next:{title:"Importing from Sigma rules",permalink:"/docs/detections/importing-from-sigma-rules"}},c={},d=[{value:"Detection script",id:"detection-script",level:2},{value:"Detect function",id:"detect-function",level:4},{value:"Title function",id:"title-function",level:4},{value:"Dedupe function",id:"dedupe-function",level:4},{value:"Returning values from your detection",id:"returning-values-from-your-detection",level:3},{value:"Examples",id:"examples",level:3},{value:"Detection configuration file (<code>detection.yml</code>)",id:"detection-configuration-file-detectionyml",level:2},{value:"Python requirements",id:"python-requirements",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each detection you create occupies a directory under the ",(0,o.kt)("inlineCode",{parentName:"p"},"detections/")," directory in your Matano directory."),(0,o.kt)("p",null,"A detection directory has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-matano-directory\n\u251c\u2500\u2500 detections\n\u2502   \u2514\u2500\u2500 my_detection\n\u2502       \u251c\u2500\u2500 detect.py\n\u2502       \u251c\u2500\u2500 requirements.txt\n\u2502       \u2514\u2500\u2500 detection.yml\n")),(0,o.kt)("h2",{id:"detection-script"},"Detection script"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Detection scripts")," are Python programs containing the logic of your detection. To create a detection script, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"detect.py")," in your detection directory."),(0,o.kt)("p",null,"Inside the detection script, you define the following functions:"),(0,o.kt)("h4",{id:"detect-function"},"Detect function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"detect")," function is the python function that is invoked for your detection. The function will be invoked with a data record."),(0,o.kt)("p",null,"The function has the following signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def detect(record) -> bool | None:\n    ...\n")),(0,o.kt)("h4",{id:"title-function"},"Title function"),(0,o.kt)("p",null,"You can implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," function to format the title if an alert is created using Python."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def title(record) -> str\n  user_name = record.get("user", {}).get("name")\n  return f"{user_name} - Elevated login failures"\n')),(0,o.kt)("h4",{id:"dedupe-function"},"Dedupe function"),(0,o.kt)("p",null,"You can implement a ",(0,o.kt)("inlineCode",{parentName:"p"},"dedupe")," function to return a ",(0,o.kt)("em",{parentName:"p"},"dedupe string")," that will be used to group rule matches into alerts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def dedupe(record) -> str\n  return record.get("user", {}).get("name")\n')),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/detections/alerting/configuring-alerts#deduplicating-alerts"},"alert deduplication in ",(0,o.kt)("em",{parentName:"a"},"Configuring Alerts")),"."),(0,o.kt)("h3",{id:"returning-values-from-your-detection"},"Returning values from your detection"),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"detect")," function must return a boolean ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," to signal an alert. A return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," will be interpreted as no alert for detection on that record."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Here is a sample Python detection. It runs on AWS CloudTrail logs and detects a failed attempt to export an AWS EC2 instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def detect(record):\n  return (\n    record.get("event", {}).get("action")\n    == "CreateInstanceExportTask"\n    and record.get("event", {}).get("provider")\n    == "ec2.amazonaws.com"\n    and event.outcome == "failure\n  )\n')),(0,o.kt)("p",null,"Note the use of the normalized ECS field ",(0,o.kt)("inlineCode",{parentName:"p"},"event.outcome"),", which avoids us having to check multiple Cloudtrail properties."),(0,o.kt)("h2",{id:"detection-configuration-file-detectionyml"},"Detection configuration file (",(0,o.kt)("inlineCode",{parentName:"h2"},"detection.yml"),")"),(0,o.kt)("p",null,"Each detection requires a configuration file named ",(0,o.kt)("inlineCode",{parentName:"p"},"detection.yml"),". The file has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'name: "my_detection" # The name of the detection\ntables: # An array of table names for which to run the detection\n  - "aws_cloudtrail"\n')),(0,o.kt)("h2",{id:"python-requirements"},"Python requirements"),(0,o.kt)("p",null,"You can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file to the detection directory to make PyPI dependencies available to your detection program. The listed dependencies will be installed and made available to your program."))}p.isMDXComponent=!0}}]);