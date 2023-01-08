"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[8202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(g,l(l({ref:t},u),{},{components:n})):o.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Office 365",sidebar_position:4},l=void 0,i={unversionedId:"log-sources/managed-log-sources/o365",id:"log-sources/managed-log-sources/o365",title:"Office 365",description:"The Office 365 Matano managed log source lets you ingest your Microsoft Office 365 logs directly into Matano.",source:"@site/docs/log-sources/managed-log-sources/o365.md",sourceDirName:"log-sources/managed-log-sources",slug:"/log-sources/managed-log-sources/o365",permalink:"/docs/log-sources/managed-log-sources/o365",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed-log-sources/o365.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Office 365",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Falcon Data Replicator",permalink:"/docs/log-sources/managed-log-sources/crowdstrike/fdr"},next:{title:"Suricata",permalink:"/docs/log-sources/managed-log-sources/suricata"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Tables",id:"tables",level:2},{value:"Ingest",id:"ingest",level:2},{value:"Pull (default)",id:"pull-default",level:3},{value:"Secret",id:"secret",level:4},{value:"Schema",id:"schema",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Office 365 Matano managed log source lets you ingest your Microsoft Office 365 logs directly into Matano."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Use the managed log source by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,r.kt)("inlineCode",{parentName:"p"},"log_source")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"O365"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"name: o365\n\nmanaged:\n  type: O365\n  properties:\n    client_id: <MY_CLIENT_ID>\n    tenant_id: <MY_TENANT_ID>\n")),(0,r.kt)("p",null,"For the tables you would like to enable from this managed log source, under a ",(0,r.kt)("inlineCode",{parentName:"p"},"tables/")," subdirectory in your log source directory, create a file with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"<table_name>.yml>"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"my-matano-dir/\n\u2514\u2500\u2500 log_sources/\n    \u2514\u2500\u2500 o365/\n        \u2514\u2500\u2500 log_source.yml\n        \u2514\u2500\u2500 tables/\n            \u2514\u2500\u2500 audit.yml\n")),(0,r.kt)("p",null,"For a complete reference on configuring log sources, including extending the table schema, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/log-sources/configuration"},(0,r.kt)("em",{parentName:"a"},"Log source configuration")),"."),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("p",null,"The Office 365 managed log source supports the following tables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"audit")),(0,r.kt)("h2",{id:"ingest"},"Ingest"),(0,r.kt)("h3",{id:"pull-default"},"Pull (default)"),(0,r.kt)("p",null,"Matano integrates with your Microsoft Office 365 account to automatically pull relevant logs on a regular basis (every 5 min)."),(0,r.kt)("p",null,"To get started with the integration, specify the following properties in the log source configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"managed:\n  type: O365\n  properties:\n    client_id: <MY_CLIENT_ID>\n    tenant_id: <MY_TENANT_ID>\n    tenant_name: my_tenant.onmicrosoft.com # optional\n")),(0,r.kt)("p",null,"After the first deployment, this log source will also generate a secret in AWS secret's manager to store secrets related to this integration."),(0,r.kt)("h4",{id:"secret"},"Secret"),(0,r.kt)("p",null,"To finish onboarding the log source, populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_secret")," key in the secret generated by Matano in AWS Secrets Manager, with the value from your OAuth app."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("p",null,"O365 data is normalized to ECS fields. Custom fields are normalized into the ",(0,r.kt)("inlineCode",{parentName:"p"},"o365")," field. You can view the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/o365/tables/audit.yml"},"complete mapping")," to see the full schema."))}p.isMDXComponent=!0}}]);