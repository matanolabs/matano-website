"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[9759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,u=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(u,o(o({ref:t},m),{},{components:n})):r.createElement(u,o({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Working with enrichment tables",sidebar_label:"Working with enrichment tables",sidebar_position:2},o=void 0,l={unversionedId:"enrichment/working-with-enrichment-tables",id:"enrichment/working-with-enrichment-tables",title:"Working with enrichment tables",description:"Creating an enrichment table",source:"@site/docs/enrichment/working-with-enrichment-tables.md",sourceDirName:"enrichment",slug:"/enrichment/working-with-enrichment-tables",permalink:"/docs/enrichment/working-with-enrichment-tables",draft:!1,editUrl:"https://github.com/matanolabs/matano-website/tree/main/website/docs/enrichment/working-with-enrichment-tables.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Working with enrichment tables",sidebar_label:"Working with enrichment tables",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/enrichment/overview"},next:{title:"Alert destinations",permalink:"/docs/integrations/destinations/"}},c={},s=[{value:"Creating an enrichment table",id:"creating-an-enrichment-table",level:2},{value:"Ingesting data into enrichment tables",id:"ingesting-data-into-enrichment-tables",level:2},{value:"Static enrichment tables",id:"static-enrichment-tables",level:3},{value:"Dynamic enrichment tables",id:"dynamic-enrichment-tables",level:3},{value:"Updating enrichment table data",id:"updating-enrichment-table-data",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-an-enrichment-table"},"Creating an enrichment table"),(0,a.kt)("p",null,"To create an enrichment table, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"enrichment")," subdirectory inside your Matano directory. Create a subdirectory inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"enrichment")," directory for each enrichment table. The structure is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 enrichment\n\u2502   \u2514\u2500\u2500 user_info\n\u2502       \u2514\u2500\u2500 enrichment_table.yml\n")),(0,a.kt)("p",null,"Inside the enrichment table subdirectory, create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"enrichment_table.yml"),". The file has the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: "user_info"\n\nenrichment_type: "dynamic"\nwrite_mode: "append" # only for dynamic tables\n\n# Iceberg schema (same as log sources)\nschema:\n  primary_key: user_id\n  fields:\n    - name: name\n      type: string\n')),(0,a.kt)("h2",{id:"ingesting-data-into-enrichment-tables"},"Ingesting data into enrichment tables"),(0,a.kt)("h3",{id:"static-enrichment-tables"},"Static enrichment tables"),(0,a.kt)("p",null,"To specify the data for a static enrichment table, create a data file in the root of the enrichment table subdirectory, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 enrichment\n\u2502   \u2514\u2500\u2500 user_info\n\u2502       \u2514\u2500\u2500 enrichment_table.yml\n\u2502       \u2514\u2500\u2500 data.json\n")),(0,a.kt)("p",null,"The data file must be named ",(0,a.kt)("inlineCode",{parentName:"p"},"data.json")," and be in JSON lines format."),(0,a.kt)("h3",{id:"dynamic-enrichment-tables"},"Dynamic enrichment tables"),(0,a.kt)("p",null,"To write data to a dynamic enrichment table, upload data to the Matano provided sources S3 bucket the same ",(0,a.kt)("a",{parentName:"p",href:"/docs/log-sources/ingestion#using-the-matano-provided-sources-bucket"},"way you can for log sources"),". Upload data to the prefix of the enrichment table name, prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"enrich_"),". For example, to upload data to an enrichment table named ",(0,a.kt)("inlineCode",{parentName:"p"},"user_info"),", upload data to the S3 prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"enrich_user_info/"),". Data uploaded must be in JSON lines format."),(0,a.kt)("h2",{id:"updating-enrichment-table-data"},"Updating enrichment table data"),(0,a.kt)("p",null,"Because enrichment tables are Apache Iceberg tables, you can modify the data of ",(0,a.kt)("em",{parentName:"p"},"dynamic")," enrichment tables using SQL queries. For example, you can run a SQL query to remove old or irrelevant data, update relevant values, or perform other modifications on your enrichment table. Any updates you make will be synced with the Matano system."))}d.isMDXComponent=!0}}]);