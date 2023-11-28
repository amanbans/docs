"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[2579],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return a?i.createElement(m,r(r({ref:t},d),{},{components:a})):i.createElement(m,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9679:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));a(4996);const o={id:"introduction",title:"What is Avail?",sidebar_label:"What is Avail",description:"Learn about Avail's data availability chain",keywords:["docs","avail","availability","scale","rollup"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,s={unversionedId:"about/introduction",id:"about/introduction",title:"What is Avail?",description:"Learn about Avail's data availability chain",source:"@site/docs/about/introduction.md",sourceDirName:"about",slug:"/about/introduction",permalink:"/about/introduction",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/about/introduction.md",tags:[],version:"current",lastUpdatedBy:"salmad3",lastUpdatedAt:1700504070,formattedLastUpdatedAt:"Nov 20, 2023",frontMatter:{id:"introduction",title:"What is Avail?",sidebar_label:"What is Avail",description:"Learn about Avail's data availability chain",keywords:["docs","avail","availability","scale","rollup"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Home",permalink:"/"},next:{title:"Clash of Nodes",permalink:"/category/clash-of-nodes"}},l={},c=[{value:"Data Availability",id:"data-availability",level:2},{value:"Data Availability in Layer 2s",id:"data-availability-in-layer-2s",level:3},{value:"Taking Layer 2 Data Off-Chain",id:"taking-layer-2-data-off-chain",level:3},{value:"System Design Overview",id:"system-design-overview",level:2},{value:"Data Hosting and Ordering Layer (DA Layer)",id:"data-hosting-and-ordering-layer-da-layer",level:3},{value:"Execution Layer (Exec Layer)",id:"execution-layer-exec-layer",level:3},{value:"Verification/Dispute Resolution Layer (DR Layer)",id:"verificationdispute-resolution-layer-dr-layer",level:3},{value:"Network Participants",id:"network-participants",level:3},{value:"Consensus",id:"consensus",level:3},{value:"How Does Avail Work?",id:"how-does-avail-work",level:2},{value:"Transaction Lifecycle",id:"transaction-lifecycle",level:3},{value:"Starting with Transaction Submission",id:"starting-with-transaction-submission",level:3},{value:"Enhancing Data Reliability Through Erasure Coding",id:"enhancing-data-reliability-through-erasure-coding",level:3},{value:"Solidifying Data Integrity with Commitment Creation",id:"solidifying-data-integrity-with-commitment-creation",level:3},{value:"Ensuring Consensus &amp; Block Propagation",id:"ensuring-consensus--block-propagation",level:3},{value:"Light Clients: The Guardians of Data Availability Using DAS",id:"light-clients-the-guardians-of-data-availability-using-das",level:3},{value:"Proof Verification: The Final Checkpoint",id:"proof-verification-the-final-checkpoint",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Join the Clash of Nodes Campaign",id:"join-the-clash-of-nodes-campaign",level:3}],d={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Avail is a ",(0,n.kt)("strong",{parentName:"p"},"robust base layer with a laser focus on data availability"),"."),(0,n.kt)("p",null,"It is built to meet the needs of next-generation, trust-minimized applications and sovereign rollups.\nAvail's strengths lie in its innovative security approach, which allows light clients to easily verify data availability through sampling over a peer-to-peer network. Avail\u2019s modular approach simplifies blockchain integration for developers, as they no longer need to worry about validator sets or tokenomics. With Avail's unparalleled data availability interface and powerful security capabilities, developers can create zero-knowledge or fraud-proof-based blockchain applications with greater efficiency and ease."),(0,n.kt)("p",null,"At its core, Avail prioritizes ordering and publishing transactions while enabling users to verify the availability of block data without needing to download entire blocks. Avail's data-agnostic nature is one of its defining features. It supports various execution environments, including EVM, WASM, and custom new runtimes, offering a versatile foundation for diverse blockchain applications."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Overview of L2 scailability"),(0,n.kt)("p",null,"In traditional blockchain networks, full nodes execute all transactions, ensuring integrity and security. However, while secure, this model limits throughput and scalability due to its comprehensive processing requirements. Layer 2 (L2) solutions emerged to address these constraints, offering enhanced performance by shifting the bulk of transaction execution away from the main chain (Layer 1)."),(0,n.kt)("p",null,"Despite their advantages, L2 solutions face challenges in maintaining data availability and transaction integrity, especially in a manner that is both efficient and cost-effective. Rollups aim to mitigate these challenges by executing transactions off-chain and then posting aggregated results back to the main chain. This approach significantly reduces the strain on Layer 1, leading to lower operational costs and reduced transaction fees, offering a more scalable solution for blockchain networks."),(0,n.kt)("p",null,"Rollups come in two primary forms:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Optimistic Rollups:")),(0,n.kt)("p",null,"Optimistic Rollups operate on a principle of presumed validity, where transactions are assumed to be valid unless proven otherwise. Their lifecycle involves:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Transaction Aggregation"),": Transactions are gathered by sequencers and formed into a rollup block."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Block Submission"),": This block is submitted to an Ethereum-based smart contract with a bond as a security measure."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Assumption of Validity"),": Transactions are presumed valid upon submission."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Challenge Window"),": A period for submitting fraud proofs, allowing challenges to the block's validity."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Outcome"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Challenge Successful"),": The bond is forfeited, and the block is reversed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"No Challenge"),": The block is finalized if unchallenged.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ZK Rollups:")),(0,n.kt)("p",null,"ZK Rollups require upfront cryptographic proofs of transaction validity, focusing on security and data integrity. Their lifecycle involves:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Validity Requirement"),": A validity proof must be provided before block submission."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Block Submission"),": Blocks are submitted with the required validity proof."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Assumption of Validity"),": Proof of validity is demanded upfront, unlike Optimistic Rollups."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Data Availability"),": While validity proofs are independent of data availability, the chain's security heavily depends on it."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Implications of Data Unavailability"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"State Recreation"),": Users can recreate the state using main chain data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sequencer Intervention"),": Other sequencers can step in to restore state and continue operations.")))),(0,n.kt)("p",null,"Still, there are constraints with data availability.")),(0,n.kt)("h2",{id:"data-availability"},"Data Availability"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What is the data availability problem?"),(0,n.kt)("p",null,"The data availability problem is a critical issue in blockchain and distributed ledger technologies, centering on the necessity to make all transaction data publicly accessible and verifiable across the network. This challenge is integral to the blockchain's integrity and security."),(0,n.kt)("p",null,"In blockchain systems, each block's transaction data requires verification by network nodes. The problem emerges when nodes strive to validate new blocks by downloading and verifying their transaction data. The crux of this issue is not just in publishing data but in ensuring its reliable distribution across the network, guaranteeing equal access to all participants."),(0,n.kt)("p",null,"The data availability problem is particularly significant in L2 networks in due to several reasons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Off-Chain Transactions"),": L2 solutions process transactions off the main chain to improve scalability. However, this can lead to challenges in verifying that all transaction data is complete and accurate, since it's not immediately recorded on the L1 blockchain.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Security Dependence on Layer 1"),": While L2 networks operate independently for transaction processing, they rely on L1 for security. Ensuring complete and accurate data transfer from L2 to L1 is vital for maintaining the integrity of the overall network.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Resolution Mechanisms Dependence on Data"),": L2 networks may use mechanisms like fraud proofs for dispute resolution. The effectiveness of these mechanisms hinges on the availability and accessibility of transaction data.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Transparency and Trust Issues"),": Transparency is a core principle of blockchain technology. In L2 networks, any compromise in data availability can lead to trust issues, as users may not be able to independently verify transactions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Increased Complexity in Verification"),": The addition of L2 adds complexity in ensuring that data is accurately reported back to the main chain. This increases the risk of data availability issues, impacting the network's reliability.")))),(0,n.kt)("h3",{id:"data-availability-in-layer-2s"},"Data Availability in Layer 2s"),(0,n.kt)("p",null,"Data availability in L2 solutions can be classified into two methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"On-Chain Data Availability"),": All transaction data is stored on the L1 chain, offering higher security but at a greater cost."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Off-Chain Data Availability"),": Data is stored off-chain, with only cryptographic summaries (hashes) on-chain. This method is cost-effective but depends on external entities for data retrieval.")),(0,n.kt)("p",null,"These methods emphasize the role of L2s in enhancing state management and interaction with L1."),(0,n.kt)("h3",{id:"taking-layer-2-data-off-chain"},"Taking Layer 2 Data Off-Chain"),(0,n.kt)("p",null,"Adaptations of rollups represent a class of scalability solutions that offer off-chain data availability while maintaining the integrity of transaction processing. These solutions are the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Validiums: ZK Rollups + Off-Chain DA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optimiums: Optimistic Rollups + Off-Chain DA")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Volitions: ZK Rollups + Validiums")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sovereign Rollups: Independent Rollups with Custom DA and Security Models"))),(0,n.kt)("p",null,"Moving data availability off-chain inherently incorporates additional trust dependencies due to their reliance on external data managers."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What are Validiums?"),(0,n.kt)("p",null,"Validiums are a direct adaptation of ZK rollups, shifting data availability off-chain while continuing to use validity proofs."),(0,n.kt)("p",null,"They represent a class of scaling solutions characterized by off-chain computation and robust validity proofs. Unlike traditional approaches, Validiums do not store data on the Ethereum main chain, resulting in significantly enhanced transaction throughput. The cornerstone of these systems is using zero-knowledge proofs, such as ZK-SNARKs or ZK-STARKs. These cryptographic tools enable one party to confirm the truth of a statement to another without revealing any additional information beyond the statement's validity."),(0,n.kt)("p",null,"In Validiums, the integrity of all transactions is secured through these validity proofs, while data availability is maintained off-chain. This architecture allows users to execute withdrawals by providing a Merkle proof. Such proofs can attest to including a user's withdrawal transaction, enabling the on-chain contract to facilitate the withdrawal process."),(0,n.kt)("p",null,"Interactions between Validiums and Ethereum are orchestrated through a suite of smart contracts. The primary component in this setup is the main attestation contract. This contract stores state commitments, represented as Merkle data roots, which block producers submit. Additionally, a verification contract is critical in verifying the validity proofs during state transitions, ensuring the seamless integration and operation of Validiums within the Ethereum ecosystem.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What are Optimiums?"),(0,n.kt)("p",null,"Optimium are a direct adaptation of Optimistic rollups and also take data availability off-chain. They retain fraud-proof mechanisms for verification while boosting scalability."),(0,n.kt)("p",null,"At the heart of Optimiums lies the principle of assumed transaction validity. Transactions within this system are initially presumed to be valid. This assumption holds until proven otherwise, a process facilitated by fraud-proof mechanisms. These mechanisms are crucial in maintaining the integrity and reliability of the network. If a transaction is challenged and found to be fraudulent, it is reverted, ensuring the network's security and fidelity."),(0,n.kt)("p",null,"The key distinction of Optimiums from their traditional counterparts is the off-chain storage of transaction data. This strategic shift markedly increases network efficiency and scalability by reducing the data load on the main Ethereum chain. However, this also introduces new data retrieval and verification considerations, which are adeptly handled through the fraud-proof system."),(0,n.kt)("p",null,"In Optimiums, users can execute transactions and interact with the system seamlessly. Withdrawals are processed by submitting fraud proofs that validate the transaction's authenticity. These proofs serve as the cornerstone for ensuring that all operations within the network are legitimate and under the established rules."),(0,n.kt)("p",null,"The integration of Optimiums with the Ethereum main chain is managed via a set of specialized smart contracts. These contracts collectively oversee the transaction lifecycle, from submission to finalization, while ensuring that all data, though stored off-chain, remains accessible and verifiable as needed.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What are Volitions?"),(0,n.kt)("p",null,"Volitions represent a versatile approach in the realm of scaling solutions. They blend the features of ZK-Rollups and Validiums. This hybrid model offers flexibility in data storage, allowing users to choose between on-chain and off-chain data availability based on their specific requirements and preferences."),(0,n.kt)("p",null,"At their core, Volitions leverage zero-knowledge proofs, such as ZK-SNARKs or ZK-STARKs, to ensure the integrity and validity of transactions. This mechanism enables transaction verification without compromising privacy or revealing underlying data."),(0,n.kt)("p",null,"The unique feature of Volitions lies in their dual-mode operation. Users can opt for the ZK-Rollup mode, where transaction data is stored on-chain, thus benefiting from the security and decentralization of the Ethereum main chain. Alternatively, users can choose the Validium mode, which stores transaction data off-chain, enhancing scalability and throughput while maintaining robust validity proofs."),(0,n.kt)("p",null,"In both modes, the transaction integrity is maintained through zero-knowledge proofs, but the choice of data availability mode allows for a customizable balance between scalability, security, and cost-efficiency."),(0,n.kt)("p",null,"The interaction of Volitions with the Ethereum ecosystem is also facilitated through a comprehensive set of smart contracts. These contracts manage state commitments and validity proof verifications, ensuring the system remains secure, efficient, and seamlessly integrated with Ethereum, regardless of the chosen data availability mode.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What are Sovereign Rollups?"),(0,n.kt)("p",null,"Sovereign Rollups represent a distinct class of blockchain scaling solutions, where each rollup operates as a self-governing entity with its own validator set and consensus rules. Unlike traditional rollups tied to a specific main chain's security and data availability model, Sovereign Rollups maintain autonomy over these aspects."),(0,n.kt)("p",null,"These rollups provide a unique combination of scalability and sovereignty, allowing them to tailor their infrastructure to specific use cases or community needs. By managing their own data availability, either on-chain or off-chain, Sovereign Rollups can optimize for performance, cost, and security as per their requirements."),(0,n.kt)("p",null,"The key feature of Sovereign Rollups is their independence in decision-making regarding upgrades, tokenomics, and governance models. This autonomy enables a more flexible and adaptive approach to blockchain scalability, catering to diverse and evolving ecosystem needs."),(0,n.kt)("p",null,"In Sovereign Rollups, the transaction integrity is usually maintained through customized consensus mechanisms or cryptographic proofs, and their interactions with main chains (if any) are defined by their unique governance protocols. This structure empowers them to operate as independent blockchains while still benefiting from the scalability features of rollup technology.")),(0,n.kt)("p",null,"Avail addresses these trust assumptions by providing a robust and reliable off-chain data availability mechanism. This integration significantly strengthens transaction data integrity and accessibility while minimizing reliance on trust-based data management, thus enhancing the overall security and efficiency of various scaling solutions."),(0,n.kt)("h2",{id:"system-design-overview"},"System Design Overview"),(0,n.kt)("p",null,"By decoupling the data hosting, execution, and verification, Avail optimizes each component's efficiency and effectiveness as a direct result of modularity."),(0,n.kt)("h3",{id:"data-hosting-and-ordering-layer-da-layer"},"Data Hosting and Ordering Layer (DA Layer)"),(0,n.kt)("p",null,"At the foundational level, the DA Layer is tasked with ingesting and ordering transactional data. This layer does not engage in executing transactions but is dedicated to storing the data and guaranteeing its availability. The DA Layer is pivotal for ensuring that the system does not rely on every full node to execute transactions, thus mitigating the bottleneck issues in traditional blockchains."),(0,n.kt)("h3",{id:"execution-layer-exec-layer"},"Execution Layer (Exec Layer)"),(0,n.kt)("p",null,"The Exec Layer interfaces with the DA Layer to access the ordered transactions. It then processes these transactions and generates the necessary checkpoints, assertions, or proofs. These are subsequently committed to the Verification/Dispute Resolution Layer (DR Layer), which can be regarded as the security anchor of the Avail ecosystem."),(0,n.kt)("h3",{id:"verificationdispute-resolution-layer-dr-layer"},"Verification/Dispute Resolution Layer (DR Layer)"),(0,n.kt)("p",null,"The DR Layer serves as the adjudicating component where checkpoints or proofs submitted by the Execution Layer are verified. This ensures that only valid state transitions are accepted within the network."),(0,n.kt)("h3",{id:"network-participants"},"Network Participants"),(0,n.kt)("p",null,"The Avail network comprises three types of nodes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full Nodes"),": These nodes download and verify the correctness of blocks but do not partake in the consensus process. Their role is essential for maintaining the network's integrity."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Validator Nodes"),": These nodes are central to Avail's consensus mechanism. They are responsible for generating blocks, deciding on transaction inclusion, and maintaining the order. Validator nodes are incentivized through consensus participation and are fundamental to the DA Layer's operations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Light Clients"),": Operating with constrained resources, light clients rely on block headers to participate in the network. They can query full nodes for specific transactional data as required and are crucial for upholding a decentralized and accessible network.")),(0,n.kt)("h3",{id:"consensus"},"Consensus"),(0,n.kt)("p",null,"Avail opts for a Nominated Proof-of-Stake (NPoS) consensus model for its scalability and energy efficiency benefits. Specifically, it employs Substrate's BABE/GRANDPA consensus, offering a blend of fast block production and provable finality."),(0,n.kt)("h2",{id:"how-does-avail-work"},"How Does Avail Work?"),(0,n.kt)("p",null,"Avail redefines blockchain scalability by combining erasure coding, KZG polynomial commitments, and data availability sampling to deliver world-class data availability guarantees. It functions as a foundational (base) layer, offering scalable data hosting without transaction execution, specifically for rollups."),(0,n.kt)("h3",{id:"transaction-lifecycle"},"Transaction Lifecycle"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Transaction Submission")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Data Extension and Erasure Coding")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Commitment Creation")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Block Propagation")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Light Client Network")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Proof Verification"))),(0,n.kt)("h3",{id:"starting-with-transaction-submission"},"Starting with Transaction Submission"),(0,n.kt)("p",null,"As Avail's primary consumers, rollups begin the process by submitting transactions to Avail. Each transaction carries a unique ",(0,n.kt)("a",{parentName:"p",href:"/about/introduction/app-id"},(0,n.kt)("ins",null,"application ID"))," (or appID for short), signifying its origin and purpose within the broader ecosystem."),(0,n.kt)("h3",{id:"enhancing-data-reliability-through-erasure-coding"},"Enhancing Data Reliability Through Erasure Coding"),(0,n.kt)("p",null,"Once transactions reach Avail, they are processed through erasure coding. This procedure adds redundancy, enhancing the data's reliability and integrity. Blocks are divided into ",(0,n.kt)("inlineCode",{parentName:"p"},"n")," original chunks and extended to ",(0,n.kt)("inlineCode",{parentName:"p"},"2n"),", allowing for reconstruction from any ",(0,n.kt)("inlineCode",{parentName:"p"},"n")," out of ",(0,n.kt)("inlineCode",{parentName:"p"},"2n")," chunks. While Avail incorporates mechanisms for fraud proofs, the primary reliance for data integrity is on the consensus of validators. Over 2/3 of the validators are required to be honest to reach a consensus, ensuring robust security for the erasure-coded data."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To combat the misconstruction of erasure-coded chunks, full nodes can create and propagate ",(0,n.kt)("strong",{parentName:"p"},"fraud proofs"),", ensuring that light clients can verify the authenticity of block headers.")),(0,n.kt)("h3",{id:"solidifying-data-integrity-with-commitment-creation"},"Solidifying Data Integrity with Commitment Creation"),(0,n.kt)("p",null,"Avail takes the redundant data and applies KZG polynomial commitments to each block. These commitments serve as cryptographic proofs of the data's integrity, ensuring that what is stored is accurate and tamper-proof. The commitments are used by ",(0,n.kt)("a",{parentName:"p",href:"#ensuring-consensus--block-propagation"},(0,n.kt)("ins",null,"validators"))," to confirm the data's integrity before it is attested and transmitted to main chain via Avail\u2019s ",(0,n.kt)("a",{parentName:"p",href:"/glossary#data-attestation"},(0,n.kt)("ins",null,"data attestation bridge")),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Block producers create a ",(0,n.kt)("strong",{parentName:"p"},"Coded Merkle Tree (CMT)")," Merkle tree from data chunks and include the root in the block header, facilitating swift and secure data verification by clients.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The CMT-based design features systematic erasure codes at each Merkle tree layer, leading to constant-sized commitments and logarithmically sized fraud proofs. This structure enables efficient data reconstruction and block integrity verification, even under the assumption of minimal honest full nodes.")),(0,n.kt)("h3",{id:"ensuring-consensus--block-propagation"},"Ensuring Consensus & Block Propagation"),(0,n.kt)("p",null,"Validators play a pivotal role in Avail's ecosystem. They receive the commitment-laden blocks, regenerate the commitments to verify their accuracy and reach a consensus on the block, which requires agreement from at least two-thirds (super majority). Validators ensure that only verified and agreed-upon data is propagated through the network. They reach consensus This stage is vital for ensuring that the data, once validated, can be relayed via Avail\u2019s data attestation bridge."),(0,n.kt)("h3",{id:"light-clients-the-guardians-of-data-availability-using-das"},"Light Clients: The Guardians of Data Availability Using DAS"),(0,n.kt)("p",null,"Light clients within Avail's ecosystem use ",(0,n.kt)("a",{parentName:"p",href:"/glossary#data-availability-sampling-das"},(0,n.kt)("ins",null,"Data Availability Sampling (DAS)"))," to verify block data integrity. They check KZG polynomial openings against the commitments in the block header for each sampled cell, enabling them to independently and instantly verify data availability. This method bypasses the need for reconstructing full KZG commitments or relying on fraud proofs, underpinning Avail's high security and data integrity standards maintained by decentralized verification. However, for more comprehensive data integrity checks, especially for row integrity within the data matrix, app clients perform KZG reconstruction. This approach is more optimal for verifying the integrity of entire rows than validating individual cells."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"On the other side, full nodes use Kate commitments for two primary purposes: reconstructing the full data for network-wide verification or creating fraud proofs to challenge any discrepancies in the data. This dual mechanism of light clients and full nodes working in tandem also strengthens the overall security and reliability of the network.")),(0,n.kt)("h3",{id:"proof-verification-the-final-checkpoint"},"Proof Verification: The Final Checkpoint"),(0,n.kt)("p",null,"The journey culminates with light clients performing proof verification. This process involves generating cell-level proofs from the data matrix, enabling light clients to efficiently and independently verify the state of the blockchain. This decentralized approach to verification underpins the security and integrity of the Avail ecosystem."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The settlement in Avail is primarily about ensuring data availability for rollups. The actual transaction execution and finality occur at the rollup layer, while Avail provides the necessary data infrastructure.")),(0,n.kt)("h2",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"With your foundational understanding of Avail, if you're new to the ecosystem, be sure to visit the ",(0,n.kt)("a",{parentName:"p",href:"/category/get-started/"},(0,n.kt)("ins",null,"Getting Started"))," section."),(0,n.kt)("p",null,"Additionally, consider experimenting with a light client. For this, the ",(0,n.kt)("a",{parentName:"p",href:"/build/quickstart/"},(0,n.kt)("ins",null,"Quickstart guide"))," is great resource. To run an Avail light client, all you need to do is run one of the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL1 avail.sh | sh\n")),(0,n.kt)("p",null,"or, with wget:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget --https-only --secure-protocol=TLSv1_2 --quiet -O - avail.sh | sh\n")),(0,n.kt)("p",null,"That's it!"),(0,n.kt)("h3",{id:"join-the-clash-of-nodes-campaign"},"Join the Clash of Nodes Campaign"),(0,n.kt)("p",null,"As you delve deeper into Avail's ecosystem, an exciting opportunity awaits. Avail is advancing the frontiers of modular blockchains, and we invite node operators to participate in the dynamic Clash of Nodes campaign. This campaign is a cornerstone in testing the capabilities of the Avail network, offering a real-time, incentivized testnet environment. It's a chance to be part of a community shaping the future of blockchain infrastructure. If you're ready to further your journey with Avail and engage in this innovative campaign, visit the ",(0,n.kt)("a",{parentName:"p",href:"/category/clash-of-nodes/"},(0,n.kt)("ins",null,"Clash of Nodes"))," section in the documentation."))}h.isMDXComponent=!0}}]);