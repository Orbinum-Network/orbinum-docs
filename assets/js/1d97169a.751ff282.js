"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[303],{5336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"basic-concepts/hybrid-consensus","title":"Hybrid Consensus Mechanism","description":"Orbinum Network employs a sophisticated Hybrid Consensus Mechanism, seamlessly integrating Nominated Proof of Stake (NPoS) and Proof of Contribution (PoC). This dual-layered approach is meticulously designed to ensure robust network security, achieve optimal scalability, and implement a fair and meritocratic incentivization system. By strategically combining the strengths of stake-based security with rewards based on valuable contributions, Orbinum fosters a dynamic ecosystem where both validators and contributors play integral and mutually reinforcing roles in maintaining and advancing the network\'s capabilities.","source":"@site/docs/basic-concepts/hybrid-consensus.mdx","sourceDirName":"basic-concepts","slug":"/basic-concepts/hybrid-consensus","permalink":"/basic-concepts/hybrid-consensus","draft":false,"unlisted":false,"editUrl":"https://github.com/Orbinum-Network/orbinum-docs/docs/basic-concepts/hybrid-consensus.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Blockchain","permalink":"/basic-concepts/blockchain"},"next":{"title":"Distributed Model Sharding Framework","permalink":"/basic-concepts/distributed-model-sharding-framework"}}');var r=n(4848),o=n(8453);const s={sidebar_position:2},a="Hybrid Consensus Mechanism",d={},c=[{value:"<strong>Synergistic Operation of Hybrid Consensus</strong>",id:"synergistic-operation-of-hybrid-consensus",level:2},{value:"<strong>1. Nominated Proof of Stake (NPoS) \u2013 Securing the Core and Enabling Governance</strong>",id:"1-nominated-proof-of-stake-npos--securing-the-core-and-enabling-governance",level:3},{value:"<strong>2. Proof of Contribution (PoC) \u2013 Recognizing and Rewarding Merit</strong>",id:"2-proof-of-contribution-poc--recognizing-and-rewarding-merit",level:3},{value:"<strong>Contribution Evaluation &amp; Granular Reward Distribution</strong>",id:"contribution-evaluation--granular-reward-distribution",level:3},{value:"<strong>Evaluated Contributions Types</strong>",id:"evaluated-contributions-types",level:3},{value:"<strong>Security &amp; Fraud Prevention</strong>",id:"security--fraud-prevention",level:2}];function l(e){const t={h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"hybrid-consensus-mechanism",children:"Hybrid Consensus Mechanism"})}),"\n",(0,r.jsxs)(t.p,{children:["Orbinum Network employs a sophisticated ",(0,r.jsx)(t.strong,{children:"Hybrid Consensus Mechanism"}),", seamlessly integrating ",(0,r.jsx)(t.strong,{children:"Nominated Proof of Stake (NPoS)"})," and ",(0,r.jsx)(t.strong,{children:"Proof of Contribution (PoC)"}),". This dual-layered approach is meticulously designed to ensure robust network security, achieve optimal scalability, and implement a fair and meritocratic incentivization system. By strategically combining the strengths of stake-based security with rewards based on valuable contributions, Orbinum fosters a dynamic ecosystem where both validators and contributors play integral and mutually reinforcing roles in maintaining and advancing the network's capabilities."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"synergistic-operation-of-hybrid-consensus",children:(0,r.jsx)(t.strong,{children:"Synergistic Operation of Hybrid Consensus"})}),"\n",(0,r.jsxs)(t.p,{children:["The Hybrid Consensus model in Orbinum operates through the harmonious interaction of two distinct yet complementary mechanisms: ",(0,r.jsx)(t.strong,{children:"Nominated Proof of Stake (NPoS)"})," and ",(0,r.jsx)(t.strong,{children:"Proof of Contribution (PoC)"}),". Each mechanism is specifically tailored to address different critical aspects of network operations, collectively ensuring a decentralized, secure, and equitable system where active participation is both safeguarded and richly rewarded."]}),"\n",(0,r.jsx)(t.h3,{id:"1-nominated-proof-of-stake-npos--securing-the-core-and-enabling-governance",children:(0,r.jsx)(t.strong,{children:"1. Nominated Proof of Stake (NPoS) \u2013 Securing the Core and Enabling Governance"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"NPoS"})," forms the bedrock of Orbinum's blockchain security, responsible for the crucial task of electing a set of reliable validators. These validators are entrusted with the responsibility of verifying network transactions, proposing and finalizing new blocks, and ultimately ensuring the unwavering integrity and operational continuity of the core blockchain infrastructure. In Orbinum's implementation of NPoS, the selection of these critical validators is directly influenced by the amount of network tokens staked by participants. Specifically, nominators play a vital role by delegating their tokens to validators they deem trustworthy and performant. This delegation mechanism ensures that only validators with significant backing and a strong reputation are entrusted with the responsibility of securing the fundamental blockchain operations."]}),"\n",(0,r.jsxs)(t.p,{children:["When a participant chooses to nominate a validator by staking their tokens, they effectively enter into a trust-based agreement. The nominated validator is expected to act with utmost honesty and in strict adherence to the network's established protocols. Validators who consistently perform their assigned duties correctly and reliably are duly rewarded with network tokens, a portion of which is then distributed among their supporting nominators, creating a symbiotic relationship. Conversely, if a validator is found to be acting maliciously or negligently fails to properly validate transactions, they are subject to stringent penalties through a ",(0,r.jsx)(t.strong,{children:"slashing mechanism"}),". This punitive measure involves the burning or confiscation of a portion of their staked funds, serving as a powerful deterrent against dishonest or negligent behavior and reinforcing network integrity."]}),"\n",(0,r.jsxs)(t.p,{children:["Beyond its critical role in network security, ",(0,r.jsx)(t.strong,{children:"NPoS"})," also forms a cornerstone of Orbinum's ",(0,r.jsx)(t.strong,{children:"decentralized governance"}),". Validators, along with nominators and contributors, wield voting power within the ",(0,r.jsx)(t.strong,{children:"Decentralized Autonomous Organization (DAO)"}),". This DAO is responsible for overseeing crucial aspects of the network's evolution, including protocol upgrades, the formulation and adjustment of network policies, and the management of the network's economic parameters. This inclusive governance model ensures that a diverse range of network participants have a direct and meaningful influence on the Orbinum Network's future trajectory."]}),"\n",(0,r.jsxs)("div",{align:"center",children:[(0,r.jsx)("img",{src:"/img/npos.png",alt:"Nominated Proof of Stake",width:"500"}),(0,r.jsx)("p",{children:(0,r.jsx)("em",{children:"Nominated Proof of Stake"})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Feature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Staked Token Weighting"})}),(0,r.jsx)(t.td,{children:"Validator election probability and reward distribution are directly proportional to the amount of ON tokens staked (both by the validator and their nominators)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Slashing for Misbehavior"})}),(0,r.jsx)(t.td,{children:"Defined penalties, including partial or full stake slashing, are enforced for provable instances of malicious activity (e.g., double-signing, producing invalid blocks) or prolonged periods of downtime."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Era-Based Elections"})}),(0,r.jsx)(t.td,{children:"Validator sets are typically re-elected at the end of defined time periods (eras), allowing nominators to adjust their delegations based on validator performance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Active/Waiting Validator Sets"})}),(0,r.jsx)(t.td,{children:"The network may maintain a smaller set of active validators responsible for block production and a larger set of waiting validators ready to rotate in, enhancing network resilience and participation opportunities."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"2-proof-of-contribution-poc--recognizing-and-rewarding-merit",children:(0,r.jsx)(t.strong,{children:"2. Proof of Contribution (PoC) \u2013 Recognizing and Rewarding Merit"})}),"\n",(0,r.jsxs)(t.p,{children:["While ",(0,r.jsx)(t.strong,{children:"NPoS"})," diligently safeguards the Orbinum Network's core security and facilitates its governance, ",(0,r.jsx)(t.strong,{children:"Proof of Contribution (PoC)"})," serves as the engine for incentivizing valuable and diverse contributions to Orbinum's decentralized AI ecosystem. These contributions can manifest in various forms, including the provision of raw computational power essential for AI training and inference, the curation and contribution of high-quality and relevant datasets crucial for model development, and the submission of innovative and performant AI models that enhance the network's capabilities. The fundamental goal of ",(0,r.jsx)(t.strong,{children:"PoC"})," is to establish a fair, transparent, and highly efficient system where rewards are directly and proportionally aligned with the actual value and impact of contributions made to the Orbinum AI ecosystem."]}),"\n",(0,r.jsxs)(t.p,{children:["For instance, a participant who dedicates their GPU computational power to a distributed AI training process is rewarded based on the quantifiable amount of computational work they successfully complete. To actively prevent the undesirable centralization of computational resources, Orbinum implements sophisticated mechanisms such as ",(0,r.jsx)(t.strong,{children:"logarithmic scaling"}),". This ensures that as a single entity contributes an increasingly large amount of computational power, the rewards earned for each additional unit of power provided gradually decrease, thereby discouraging monopolization and promoting broader participation from a diverse range of contributors."]}),"\n",(0,r.jsxs)(t.p,{children:["Similarly, contributors who meticulously curate and provide high-quality AI training datasets are rewarded based on the assessed uniqueness, relevance, and overall value of their data contributions to the network's AI development efforts. The ",(0,r.jsx)(t.strong,{children:"PoC"})," system incorporates rigorous ",(0,r.jsx)(t.strong,{children:"data authenticity checks"})," and quality assessments to prevent the submission of duplicate, irrelevant, or low-value datasets, ensuring the integrity of the training data. Furthermore, contributors who develop and contribute valuable and performant AI models to the Orbinum ecosystem are also incentivized based on the demonstrated performance, utility, and potential impact of their models within the network."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"PoC"})," mechanism encompasses a suite of carefully designed reward strategies aimed at incentivizing a wide spectrum of valuable contributions. These strategies are meticulously crafted to strike a delicate balance between appropriately rewarding high-quality and impactful contributions, actively preventing centralization of resources or influence, and fostering continuous and sustained participation from a diverse community of contributors."]}),"\n",(0,r.jsxs)("div",{align:"center",children:[(0,r.jsx)("img",{src:"/img/poc.png",alt:"Proof of Contribution",width:"700"}),(0,r.jsx)("p",{children:(0,r.jsx)("em",{children:"Proof of Contribution"})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Feature"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Resource Consumption Tracking"})}),(0,r.jsx)(t.td,{children:"Sophisticated on-chain mechanisms track the consumption of computational resources (e.g., GPU hours, CPU cycles) dedicated to AI tasks."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Data Quality & Uniqueness Metrics"})}),(0,r.jsx)(t.td,{children:"Algorithms and potentially decentralized oracles assess the quality, relevance, and uniqueness of contributed datasets."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"AI Model Performance Benchmarking"})}),(0,r.jsx)(t.td,{children:"Frameworks for evaluating the performance and utility of contributed AI models against defined benchmarks and real-world applications are implemented."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Dynamic Reward Weighting"})}),(0,r.jsx)(t.td,{children:"The relative weight and reward allocated to different contribution types (compute, data, models) can be dynamically adjusted based on the network's evolving needs and priorities, as determined by governance."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Anti-Gaming Mechanisms"})}),(0,r.jsx)(t.td,{children:"Various techniques, such as rate limiting, reputation scoring, and challenge-response systems, are employed to prevent Sybil attacks and the gaming of the PoC reward system."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"contribution-evaluation--granular-reward-distribution",children:(0,r.jsx)(t.strong,{children:"Contribution Evaluation & Granular Reward Distribution"})}),"\n",(0,r.jsxs)(t.p,{children:["To uphold fairness and effectively incentivize truly valuable contributions, Orbinum's ",(0,r.jsx)(t.strong,{children:"Proof of Contribution (PoC)"})," mechanism employs a multi-faceted approach incorporating several structured reward strategies:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Weighted Contribution System:"})," The reward system features a dynamic weighting mechanism that adjusts the rewards allocated to different types of contributions (computational power, data provision, AI model contributions) based on the network's current needs and strategic priorities. These weights can be adjusted through governance to ensure the network prioritizes the most critical contributions at any given time."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Logarithmic Scaling for Resource Provision:"})," To actively discourage the centralization of resources and promote a more balanced and distributed ecosystem, Orbinum utilizes ",(0,r.jsx)(t.strong,{children:"logarithmic scaling"})," for contributions like computational power. This ensures that the marginal reward for each additional unit of a specific resource provided by a single contributor decreases as their total contribution increases."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Tiered Reward System Based on Quality and Impact:"})," The ",(0,r.jsx)(t.strong,{children:"PoC"})," mechanism incorporates tiered reward systems that prioritize the inherent quality, uniqueness, and overall impact of contributions over mere quantitative volume. Contributions that demonstrably offer greater value and utility to the Orbinum Network receive proportionally larger rewards."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Time-Based Considerations for Freshness and Continuous Engagement:"})," Mechanisms such as ",(0,r.jsx)(t.strong,{children:"time-based decay"})," may be applied to certain types of contributions, particularly data, to incentivize continuous participation and the provision of fresh and relevant resources. This approach gradually reduces the rewards for older contributions, encouraging contributors to submit new and up-to-date data and resources."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Minimum Contribution Thresholds for Meaningful Participation:"})," To ensure that only meaningful and impactful contributions are eligible for rewards and to prevent the dilution of the reward pool through insignificant contributions, Orbinum may establish clearly defined ",(0,r.jsx)(t.strong,{children:"minimum contribution thresholds"})," for various resource types. Contributions falling below these established quality or quantity benchmarks may not be eligible for PoC rewards."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"evaluated-contributions-types",children:(0,r.jsx)(t.strong,{children:"Evaluated Contributions Types"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Contribution Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description & Measurement Criteria"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Computational Power"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Contributions of GPU/CPU power for AI model training and execution."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"Data Contribution"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Submission of AI training datasets. Evaluated based on ",(0,r.jsx)(t.strong,{children:"quality"})," and ",(0,r.jsx)(t.strong,{children:"relevance"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"AI Model Contribution"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["Contribution of AI models to the ecosystem. Evaluated based on ",(0,r.jsx)(t.strong,{children:"performance"})," and ",(0,r.jsx)(t.strong,{children:"utility"}),"."]})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"security--fraud-prevention",children:(0,r.jsx)(t.strong,{children:"Security & Fraud Prevention"})}),"\n",(0,r.jsxs)(t.p,{children:["To maintain the integrity of the Orbinum network and ensure trust in the contributions made to the ecosystem, Orbinum enforces ",(0,r.jsx)(t.strong,{children:"PoC validation measures"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Verification Mechanisms:"})," Contributions to the Orbinum network are subject to ",(0,r.jsx)(t.strong,{children:"verification mechanisms"})," to ensure their integrity. These mechanisms may include cryptographic proofs, data authenticity checks, and AI model evaluations."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Data Authenticity Checks:"})," AI datasets submitted to the network undergo ",(0,r.jsx)(t.strong,{children:"authenticity checks"})," to prevent the submission of fake, redundant, or low-quality data."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"AI Model Evaluation:"})," AI models are subject to ",(0,r.jsx)(t.strong,{children:"evaluation"})," to validate their performance and utility."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);