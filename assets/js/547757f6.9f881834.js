"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[3150],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),k=p(n),h=r,d=k["".concat(s,".").concat(h)]||k[h]||u[h]||i;return n?a.createElement(d,l(l({ref:e},c),{},{components:n})):a.createElement(d,l({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[k]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8171:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"networks",title:"Network Information",description:"Information on Networks related to Avail",keywords:["docs","avail","node","networks","kate","testnet","rpc","chainspec"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},l=void 0,o={unversionedId:"networks",id:"networks",title:"Network Information",description:"Information on Networks related to Avail",source:"@site/docs/networks.md",sourceDirName:".",slug:"/networks",permalink:"/networks",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/networks.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1697734196,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{id:"networks",title:"Network Information",description:"Information on Networks related to Avail",keywords:["docs","avail","node","networks","kate","testnet","rpc","chainspec"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"}},s={},p=[{value:"Active Networks",id:"active-networks",level:2},{value:"Kate Testnet",id:"kate-testnet",level:3},{value:"Retired Networks",id:"retired-networks",level:2},{value:"Testnet Phase 1",id:"testnet-phase-1",level:3},{value:"<ins>Go back to Homepage</ins>",id:"insgo-back-to-homepageins",level:3},{value:"<ins>Check out the Light Client Guide</ins>",id:"inscheck-out-the-light-client-guideins",level:3},{value:"<ins>Check out the Full Node Guide</ins>",id:"inscheck-out-the-full-node-guideins",level:3}],c={toc:p},k="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"active-networks"},"Active Networks"),(0,r.kt)("h3",{id:"kate-testnet"},"Kate Testnet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explorer"),": ",(0,r.kt)("a",{parentName:"li",href:"https://kate.avail.tools"},(0,r.kt)("ins",null,"https://kate.avail.tools"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RPC Endpoint"),": ",(0,r.kt)("a",{parentName:"li",href:"https://kate.avail.tools/v1"},(0,r.kt)("ins",null,"https://kate.avail.tools/v1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WS Endpoint"),": ",(0,r.kt)("a",{parentName:"li",href:"wss://kate.avail.tools/ws"},(0,r.kt)("ins",null,"wss://kate.avail.tools/ws"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain Spec"),": ",(0,r.kt)("a",{parentName:"li",href:"https://kate.avail.tools/#/explorer/chainspec"},(0,r.kt)("ins",null,"chainspec.raw.json"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain Info"),": ",(0,r.kt)("a",{parentName:"li",href:"https://kate.avail.tools/chaininfo.txt"},(0,r.kt)("ins",null,"chaininfo.txt"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Node Version"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/releases/tag/v1.7.2"},(0,r.kt)("ins",null,"v1.7.2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Light Client Version"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail-light/releases/tag/v1.7.2"},(0,r.kt)("ins",null,"v1.7.2")))),(0,r.kt)("h2",{id:"retired-networks"},"Retired Networks"),(0,r.kt)("h3",{id:"testnet-phase-1"},"Testnet Phase 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Explorer"),": ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.avail.tools"},(0,r.kt)("ins",null,"https://testnet.avail.tools"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RPC Endpoint"),": ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.avail.tools/v1"},(0,r.kt)("ins",null,"https://testnet.avail.tools/v1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WS Endpoint"),": ",(0,r.kt)("a",{parentName:"li",href:"wss://testnet.avail.tools/ws"},(0,r.kt)("ins",null,"wss://testnet.avail.tools/ws"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Node Version"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail/releases/tag/v1.5.0-303f39d"},(0,r.kt)("ins",null,"v1.5.0-303f39d"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Light Client Version"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/availproject/avail-light/releases/tag/v1.3.1"},(0,r.kt)("ins",null,"1.3.1")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"insgo-back-to-homepageins"},(0,r.kt)("a",{parentName:"h3",href:"/"},(0,r.kt)("ins",null,"Go back to Homepage"))),(0,r.kt)("h3",{id:"inscheck-out-the-light-client-guideins"},(0,r.kt)("a",{parentName:"h3",href:"/operate/node/light-client/"},(0,r.kt)("ins",null,"Check out the Light Client Guide"))),(0,r.kt)("h3",{id:"inscheck-out-the-full-node-guideins"},(0,r.kt)("a",{parentName:"h3",href:"/category/full-node/"},(0,r.kt)("ins",null,"Check out the Full Node Guide"))))}u.isMDXComponent=!0}}]);