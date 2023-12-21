"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[7482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={id:"faucet",title:"How to Use the Testnet Faucet",sidebar_label:"Get Testnet Tokens",description:"Using the Avail Testnet Faucet",keywords:["docs","avail","explorer","accounts","faucet","funding"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,l={unversionedId:"about/faucet",id:"about/faucet",title:"How to Use the Testnet Faucet",description:"Using the Avail Testnet Faucet",source:"@site/docs/about/faucet.md",sourceDirName:"about",slug:"/about/faucet",permalink:"/about/faucet",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/about/faucet.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1703142089,formattedLastUpdatedAt:"Dec 21, 2023",frontMatter:{id:"faucet",title:"How to Use the Testnet Faucet",sidebar_label:"Get Testnet Tokens",description:"Using the Avail Testnet Faucet",keywords:["docs","avail","explorer","accounts","faucet","funding"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Use the Explorer",permalink:"/about/explorer"},next:{title:"Set Your Identity",permalink:"/about/identity"}},c={},s=[{value:"Account Verification Process",id:"account-verification-process",level:2},{value:"Obtaining Test AVL Tokens from Discord",id:"obtaining-test-avl-tokens-from-discord",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An automated faucet on Discord has been configured to distribute Avail tokens (AVL) for the Goldberg testnet."),(0,a.kt)("admonition",{title:"Please note",type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The verification step is ",(0,a.kt)("strong",{parentName:"li"},"mandatory for all users.")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"/deposit")," command has a cooldown period. You can use it only once every 3 hours."),(0,a.kt)("li",{parentName:"ul"},"The faucet is designed to distribute small amounts of AVL for testing purposes, not large quantities for validator bonding or similar activities."))),(0,a.kt)("h2",{id:"account-verification-process"},"Account Verification Process"),(0,a.kt)("p",null,"To prevent spam and ensure a fair distribution of test tokens, Avail has introduced a mandatory verification process based on ",(0,a.kt)("a",{parentName:"p",href:"https://passport.gitcoin.co/"},(0,a.kt)("ins",null,"Gitcoin Passport")),". This process links your wallet address to your Discord account. If you are not already a member of the Avail community, please join the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/y6fHnxZQX8"},(0,a.kt)("ins",null,"Avail Discord server"))," first."),(0,a.kt)("p",null,"If you attempt to use the faucet without prior verification, you will be prompted with a link to complete this necessary step. By following the provided link, you'll be guided to connect your Ethereum wallet and Discord account on the ",(0,a.kt)("a",{parentName:"p",href:"https://gitcoin-faucet.vercel.app/"},(0,a.kt)("ins",null,"designated verification website")),"."),(0,a.kt)("p",null,"Follow these steps to complete the verification:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://gitcoin-faucet.vercel.app/"},(0,a.kt)("ins",null,"Avail Faucet Verification page")),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on the "Connect Wallet" button in the center of the page. You can choose from several wallet providers. For this demonstration, we will be using ',(0,a.kt)("a",{parentName:"p",href:"https://www.subwallet.app/"},(0,a.kt)("ins",null,"SubWallet")),"."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/faucet/1.png",alt:"Connect Wallet",width:"80%"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A window will appear listing various wallet options. When prompted, verify and approve the connection request."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/faucet/2.png",alt:"Wallet Options",width:"80%"})))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ensure you don't have any pending connections, or else you will get the following prompt:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/faucet/3.png",alt:"SubWallet Selection",width:"80%"}))),(0,a.kt)("p",null,"If the connection is successful, you will be able to see your linked account on the top right-hand corner of the page."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/faucet/4.png",alt:"Connected Wallet",width:"80%"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'You will then need to connect your Discord account. Click on "Connect Discord" and authorize the requested permissions.'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/faucet/5.png",alt:"Discord Authorization",width:"80%"})))),(0,a.kt)("p",null,"Once verified, a confirmation message will be displayed. Ensure that your Discord account is connected as it will be used in the following steps. You will also be able to see your connected Discord account that is verified on the top right-hand corner of the page."),(0,a.kt)("h2",{id:"obtaining-test-avl-tokens-from-discord"},"Obtaining Test AVL Tokens from Discord"),(0,a.kt)("p",null,"After completing the account verification process, you can obtain test AVL tokens:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Avail Discord, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"#goldberg-faucet")," channel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"/deposit <your-address>")," to request AVL tokens."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/faucet/6.png",alt:"Verification Confirmation",width:"100%"})),(0,a.kt)("p",{parentName:"li"},"Your wallet will receive 5 AVL tokens once the transaction status is marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"Complete"),". You can request AVL tokens every 3 hours."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/faucet/8.png",alt:"Transaction Complete",width:"50%"})))),(0,a.kt)("p",null,"If you encounter any issues, please feel free to reach out to the Avail team and greater community on Discord."))}d.isMDXComponent=!0}}]);