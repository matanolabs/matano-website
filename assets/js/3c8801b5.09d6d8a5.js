"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[8202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Office 365"},l=void 0,i={unversionedId:"log-sources/managed-log-sources/o365",id:"log-sources/managed-log-sources/o365",title:"Office 365",description:"The Office 365 Matano managed log source lets you ingest your Microsoft Office 365 logs directly into Matano.",source:"@site/docs/log-sources/managed-log-sources/o365.md",sourceDirName:"log-sources/managed-log-sources",slug:"/log-sources/managed-log-sources/o365",permalink:"/docs/log-sources/managed-log-sources/o365",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/log-sources/managed-log-sources/o365.md",tags:[],version:"current",frontMatter:{title:"Office 365"},sidebar:"tutorialSidebar",previous:{title:"AWS CloudTrail",permalink:"/docs/log-sources/managed-log-sources/cloudtrail"},next:{title:"Suricata",permalink:"/docs/log-sources/managed-log-sources/suricata"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Tables",id:"tables",level:2},{value:"Ingest",id:"ingest",level:2},{value:"Pull (default)",id:"pull-default",level:3},{value:"Secret",id:"secret",level:4},{value:"Schema",id:"schema",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Office 365 Matano managed log source lets you ingest your Microsoft Office 365 logs directly into Matano."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Use the managed log source by specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,o.kt)("inlineCode",{parentName:"p"},"log_source")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"O365"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"name: o365\n\nmanaged:\n  type: O365\n  properties:\n    client_id: <MY_CLIENT_ID>\n    tenant_id: <MY_TENANT_ID>\n")),(0,o.kt)("p",null,"For the tables you would like to enable from this managed log source, under a ",(0,o.kt)("inlineCode",{parentName:"p"},"tables/")," subdirectory in your log source directory, create a file with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"<table_name>.yml>"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-matano-dir/\n\u2514\u2500\u2500 log_sources/\n    \u2514\u2500\u2500 o365/\n        \u2514\u2500\u2500 log_source.yml\n        \u2514\u2500\u2500 tables/\n            \u2514\u2500\u2500 audit.yml\n")),(0,o.kt)("p",null,"For a complete reference on configuring log sources, including extending the table schema, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/log-sources/configuration"},(0,o.kt)("em",{parentName:"a"},"Log source configuration")),"."),(0,o.kt)("h2",{id:"tables"},"Tables"),(0,o.kt)("p",null,"The Office 365 managed log source supports the following tables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"audit")),(0,o.kt)("h2",{id:"ingest"},"Ingest"),(0,o.kt)("h3",{id:"pull-default"},"Pull (default)"),(0,o.kt)("p",null,"Matano integrates with your Microsoft Office 365 account to automatically pull relevant logs on a regular basis (every 5 min)."),(0,o.kt)("p",null,"To get started with the integration, specify the following properties in the log source configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"managed:\n  type: O365\n  properties:\n    client_id: <MY_CLIENT_ID>\n    tenant_id: <MY_TENANT_ID>\n    tenant_name: my_tenant.onmicrosoft.com # optional\n")),(0,o.kt)("p",null,"After the first deployment, this log source will also generate a secret in AWS secret's manager to store secrets related to this integration."),(0,o.kt)("h4",{id:"secret"},"Secret"),(0,o.kt)("p",null,"To finish onboarding the log source, populate the ",(0,o.kt)("inlineCode",{parentName:"p"},"client_secret")," key in the secret generated by Matano in AWS Secrets Manager, with the value from your OAuth app."),(0,o.kt)("h2",{id:"schema"},"Schema"),(0,o.kt)("p",null,"O365 data is normalized to ECS fields. Custom fields are normalized into the ",(0,o.kt)("inlineCode",{parentName:"p"},"o365")," field. You can view the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/matanolabs/matano/blob/main/data/managed/log_sources/o365/tables/audit.yml"},"complete mapping")," to see the full schema."))}p.isMDXComponent=!0}}]);