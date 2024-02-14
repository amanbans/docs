"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[3434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={id:"madara-karnot",title:"How to Deploy an Appchain using Madara & Karnot",sidebar_label:"Madara | Karnot Appchains",description:"Discover how to build chains with Madara that utilize Avail as a DA layer.",keywords:["documentation","avail","develop","build","data availability","da","karnot"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},i=void 0,l={unversionedId:"clash-of-nodes/madara-karnot",id:"clash-of-nodes/madara-karnot",title:"How to Deploy an Appchain using Madara & Karnot",description:"Discover how to build chains with Madara that utilize Avail as a DA layer.",source:"@site/docs/clash-of-nodes/madara-karnot.md",sourceDirName:"clash-of-nodes",slug:"/clash-of-nodes/madara-karnot",permalink:"/clash-of-nodes/madara-karnot",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/clash-of-nodes/madara-karnot.md",tags:[],version:"current",lastUpdatedBy:"Yash Mittal",lastUpdatedAt:1707634964,formattedLastUpdatedAt:"Feb 11, 2024",frontMatter:{id:"madara-karnot",title:"How to Deploy an Appchain using Madara & Karnot",sidebar_label:"Madara | Karnot Appchains",description:"Discover how to build chains with Madara that utilize Avail as a DA layer.",keywords:["documentation","avail","develop","build","data availability","da","karnot"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Dymension RollApps",permalink:"/clash-of-nodes/dymension"},next:{title:"FAQs",permalink:"/clash-of-nodes/faqs"}},s={},p=[{value:"Introduction",id:"introduction",level:3},{value:"How to Participate",id:"how-to-participate",level:3},{value:"How to Deploy a Madara Appchain",id:"how-to-deploy-a-madara-appchain",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'The "Madara | Karnot Appchain Challenge", part of the groundbreaking ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/category/clash-of-nodes/"},(0,r.kt)("ins",null,"Clash of Nodes campaign"))),", represents an exciting collaboration between ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.karnot.xyz/"},(0,r.kt)("ins",null,"Karnot")))," and Avail. This guide offers developers comprehensive instructions to deploy a Madara appchain using Avail as the data availability (DA) layer, with the option to self-host or Karnot as a chain-running service."),(0,r.kt)("h3",{id:"how-to-participate"},"How to Participate"),(0,r.kt)("p",null,"To partake in the Madara | Karnot Appchain Challenge, follow these key steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Deploy a Madara Appchain"),": Use the Karnot CLI for rapid deployment. You can choose to host it yourself or request the Karnot team for hosting services."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Deploy on Avail's Goldberg Testnet"),": Opt to post your chain data to the Avail Goldberg testnet."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Fund Your Account"),": Use the Avail Goldberg faucet to acquire tokens for the Goldberg testnet."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"List Your Appchain for Clash of Nodes"),": Create a PR to list your app chain on the official repo for the Karnot CLI, following the specified JSON format.")),(0,r.kt)("admonition",{title:"What Qualifies as an Avail-Powered Madara Appchain?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For your project to qualify, it must meet these criteria:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Uses Madara & Avail"),": Your appchain should be deployed using Madara and must integrate Avail as the DA layer."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Operational and Accessible"),": The appchain should be actively running and accessible to the public."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Functionality and Public Interface"),": They must have operational features and a publicly accessible interface or usage instructions."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Compliance with Listing and Registration Requirements"),": Follow the JSON format for chain listing and include Avail-specific configurations in the campaign listing directory."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Community Engagement"),": Engage with the community and adhere to the verification processes outlined in the respective documentation."))),(0,r.kt)("h3",{id:"how-to-deploy-a-madara-appchain"},"How to Deploy a Madara Appchain"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a New Appchain Instance"),": To begin, create a new appchain instance. Detailed instructions can be found ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/karnotxyz/madara-cli"},(0,r.kt)("ins",null,"here"))),". This step involves setting up the environment and initializing your appchain using the Karnot CLI. ",(0,r.kt)("strong",{parentName:"p"},"Ensure you select 'Avail' as the DA layer"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For help in creating an AppId, check out the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/about/app-ids"},(0,r.kt)("ins",null,"AppId guide"))),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fund Your Avail Account"),": You will also need to fund your Avail account for your appchain. Visit the Avail faucet with your Avail address and follow the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/about/faucet"},(0,r.kt)("ins",null,"faucet guide instructions")))," to secure the necessary testnet tokens for the Goldberg network."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The faucet requires meeting a mandatory threshold using the Gitcoin passport. If necessary, you can link your Avail account on your machine with the wallet you are using for this process. Exercise caution when exporting your account's key for any reason."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"If Needed, Host Your Appchain with Karnot"),": Karnot provides comprehensive, ready-to-use services for appchains, including RPC, proof, cross-chain capabilities, and more. Fill out ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://forms.gle/8cYP2d3PqMDZc5oj7"},(0,r.kt)("ins",null,"this form")))," to request hosting services.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a PR to Register Your Appchain"),": For your appchain to be recognized in the Clash of Nodes campaign, you must register it by submitting a pull request in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/karnotxyz/avail-campaign-listing"},(0,r.kt)("ins",null,"avail-campaign-listing"))),' repository. The PR should include a JSON configuration file named "listing.json" with the following structure:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my_app_chain",\n  "logo": "https://placehold.co/400x400",\n  "rpc_url": "https://rpc.mychain.xyz",\n  "explorer_url": "https://explorer.mychain.xyz",\n  "metrics_endpoint": "https://metrics.mychain.xyz",\n  "id": "942ff35e-f048-4d10-ae61-6cb970cad2f0"\n}\n')),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/karnot/karnot-pr.png",alt:"Karnot PR Submission",width:"100%"})),(0,r.kt)("p",{parentName:"li"},"This configuration file includes essential details about your appchain, such as its name, logo URL, RPC endpoint, explorer URL, metrics endpoint, and a unique identifier. Ensure all information is accurate and up-to-date to facilitate smooth registration and participation in the campaign. Once the PR is merged, the appchain will appear on the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://leaderboard.availproject.org/"},(0,r.kt)("ins",null,"Clash of Nodes Leaderboard"))),"."))))}u.isMDXComponent=!0}}]);