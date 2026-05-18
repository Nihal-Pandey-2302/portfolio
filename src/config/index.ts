import type { SiteConfig, SiteContent } from "../types";

// SITE-WIDE CONFIGURATION
export const SITE_CONFIG: SiteConfig = {
  title: "Nihal Pandey | Rust Backend & OSS Contributor",
  author: "Nihal Pandey",
  description:
    "Backend Engineer and OSS contributor at ParadeDB (YC S23). Rust, Node.js, PostgreSQL.",
  lang: "en",
  siteLogo: "/nihal-small.png", // We will add this image in the next step
  navLinks: [
    { text: "Work", href: "#showcase" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "X", href: "https://x.com/PandeyNihal23" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/nihal-pandey-8529b6257/" },
    { text: "Github", href: "https://github.com/Nihal-Pandey-2302" },
  ],
  socialImage: "/nihal-og.png", // This is for social media previews
  canonicalURL: "https://your-domain.com", // You'll change this after deploying
};

// PAGE-SPECIFIC CONTENT
export const SITE_CONTENT: SiteContent = {
  // Hero Section
  hero: {
    name: "Nihal Pandey",
    specialty: "Backend Engineer | OSS Contributor at ParadeDB (YC S23) · Rust · Node.js · PostgreSQL",
    summary:
      "I build high-throughput backend systems in Rust and Node.js. Currently contributing to ParadeDB (YC S23) with 3 PRs merged into the production codebase touching query pipeline internals, JoinScan correctness, and PostgreSQL executor hooks. Previously built Rust security tooling at the Prime Minister's Office, Government of India.",
    email: "pandeynihal232@gmail.com",
  },
  
  // Experience Section
  experience: [
  {
    company: "ParadeDB (YC S23)",
    position: "Open Source Contributor · Rust / PostgreSQL",
    startDate: "Apr 2026",
    endDate: "Present",
      summary: [
      "3 PRs merged into production Rust codebase -> query pipeline, scan execution, and PostgreSQL executor hook internals; 787 lines changed across 15+ files",
      "Merged PR #4765 into production codebase — refactored ctid lookup across 6 files, consolidated 5 duplicate code blocks, 265 lines changed",
      "Merged PR #4924 into production codebase — fixed nested ExecutorRun panic in fake_aminsertcleanup on PG16; identified second correctness bug mid-review on recursive DML path; replaced depth-counter approach with RAII FrameGuard giving each nesting level an independent frame; 290 lines across 4 files",
      "Merged PR #4763 into production codebase — fixed JoinScan returning wrong rows on self-joins with duplicate sort keys; debugged late materialization in query optimizer; rewrote physical projection to use column indices instead of name-based dedup; caught column misbinding in own fix mid-review and rebuilt; 312 lines across 5 files",
      "PR #4752 in review — added partition-aware BM25 search via SPI expansion, fixed lifecycle panics in begin_custom_scan and rescan",
    ],
  },
  {
    company: "Prime Minister's Office, Government of India",
    position: "Cybersecurity Research Intern",
    startDate: "Jun 2025",
    endDate: "Sept 2025",
    summary: [
      "Built Rust/Tokio vulnerability scanner deployed across critical government infrastructure",
      "Cut manual vulnerability assessment time by 60% with zero downtime across distributed systems",
      "Adopted by 2 internal security teams. Details under NDA.",
    ],
  },
],

  // Achievements Section
  achievements: [
  {
    company: "Winner — aOS Andromeda Hackathon 2025",
    position: "Team Lead",
    startDate: "Prize",
    endDate: "$2,500",
    summary: [
      "1st place out of 2,500+ global teams",
      "Built production RWA tokenization platform with ERC-721 contracts and IPFS metadata in 48 hours",
    ],
  },
  {
    company: "Winner — Smart India Hackathon 2024 (NTRO)",
    position: "Tech Lead & Backend Developer",
    startDate: "Prize",
    endDate: "INR 100K",
    summary: [
      "1st place out of 50,000+ participants",
      "Built agentless Windows vulnerability scanner reducing manual security analysis by 80%",
      "Client: Government of India (NTRO)",
    ],
  },
  {
    company: "4th Place — Kaspa Hackathon 2024",
    position: "Backend Developer",
    startDate: "Prize",
    endDate: "$1,250",
    summary: [
      "4th overall out of international field",
      "Won Most Creative Use of Kaspa and Best Real-Time Data Project",
    ],
  },
  {
    company: "Finalist — Kraken Forge Hackathon 2025",
    position: "Backend Developer",
    startDate: "Prize",
    endDate: "Global Top Tier",
    summary: [
      "Selected as global top-tier finalist in performance optimization category",
    ],
  },
  {
    company: "Winner — Graph-e-thon 2.0",
    position: "Blockchain Developer",
    startDate: "Prize",
    endDate: "INR 175K",
    summary: [
      "Built blockchain-based analytics solution for Technology Business Incubator event",
      "Host: TBI Graphic Era",
    ],
  },
],
  // Projects Section
  projects: [
    // ─── ParadeDB (Current Contribution) ───────────────────────────────────────
    {
  name: "ParadeDB — ctid Refactor (Merged)",
  summary: "Removed ctid from SearchIndexScore and consolidated duplicate lookup logic into a centralized resolve_ctid helper across 5 execution paths in the query pipeline.",
  linkSource: "https://github.com/paradedb/paradedb/pull/4765",
  badge: "Open Source · Merged",
  subsection: "Open Source",
  metrics: [
    "265 lines changed across 6 files",
    "Merged into production codebase",
    "Eliminated 5 duplicate code blocks",
  ],
  technologies: ["Rust", "PostgreSQL", "Tantivy", "pgrx"]
},
{
  name: "ParadeDB — RAII FrameGuard Fix (Merged)",
  summary: "Fixed nested ExecutorRun panic in fake_aminsertcleanup on PG16. Identified a second correctness bug mid-review and replaced depth-counter approach with a proper RAII FrameGuard.",
  linkSource: "https://github.com/paradedb/paradedb/pull/4924",
  badge: "Open Source · Merged",
  subsection: "Open Source",
  metrics: [
    "Fixes unreachable! panic on PG16",
    "RAII guard handles nested DML correctly",
    "282 lines changed",
  ],
  technologies: ["Rust", "PostgreSQL", "pgrx"]
},
{
  name: "ParadeDB — JoinScan Sort Key Fix (Merged)",
  summary: "Fixed JoinScan returning wrong rows on self-joins with duplicate sort keys. Caught a column misbinding in my own fix during review and rebuilt using physical index mapping.",
  linkSource: "https://github.com/paradedb/paradedb/pull/4763",
  badge: "Open Source · Merged",
  subsection: "Open Source",
  metrics: [
    "Fixes incorrect row ordering on self-joins",
    "Rebuilt column mapping using physical indices",
    "261 lines changed",
  ],
  technologies: ["Rust", "PostgreSQL", "DataFusion"]
},
{
  name: "ParadeDB — Partitioned Table BM25",
  summary: "Added partition-aware BM25 search via SPI expansion. Fixed lifecycle panics in begin_custom_scan and rescan for partitioned index relations.",
  linkSource: "https://github.com/paradedb/paradedb/pull/4752",
  badge: "Open Source · In Review",
  subsection: "Open Source",
  metrics: [
    "BM25 search now works on partitioned tables",
    "Fixed begin_custom_scan lifecycle panic",
    "225 lines changed",
  ],
  technologies: ["Rust", "PostgreSQL", "pgrx", "SPI"]
},
    // ─── Solana ────────────────────────────────────────────────────────────────
    {
      name: "Solana Stablecoin Standard (SSS)",
      summary: "OpenZeppelin-equivalent SDK for Solana stablecoins using Token-2022. Three standards: SSS-1 minimal, SSS-2 compliant with Transfer Hook blacklist enforcement and Permanent Delegate seizure, SSS-3 private with ZK Confidential Transfers proof of concept.",
      linkPreview: "https://sss-solana-stablecoin-sdk.vercel.app/",
      linkSource: "https://github.com/Nihal-Pandey-2302/sss-solana-stablecoin-sdk",
      image: "/Solana Stablecoin Standard (SSS).png",
      badge: "Solana / DeFi Infrastructure",
      flagship: true,
      subsection: "Solana",
      metrics: [
        "19/19 Anchor tests passing",
        "Transfer Hook intercepts every token transfer",
        "ZK Confidential Transfers PoC (SSS-3)",
        "Next.js admin dashboard with live oracle feeds",
        "TypeScript SDK + 15-command CLI"
      ],
      technologies: ["Rust", "Anchor", "Token-2022", "TypeScript", "Next.js", "Docker"]
    },
    {
      name: "Solana Job Queue",
      summary: "Redis and SQS-style job queue rebuilt entirely on-chain as a Solana program. Demonstrates how Web2 backend patterns translate to blockchain architecture using Solana's account model.",
      linkPreview: "https://solana-job-queue.vercel.app/",
      linkSource: "https://github.com/Nihal-Pandey-2302/solana-job-queue",
      image: "/Solana Job Queue.png",
      badge: "On-Chain Backend Infrastructure",
      subsection: "Solana",
      metrics: [
        "Native O(log n) binary max-heap in Queue PDA",
        "DAG task dependencies via cryptographic prerequisite validation",
        "Full worker lifecycle with DLQ and scheduled execution",
        "17/17 tests, benchmarked at 400 TPS per Queue PDA"
      ],
      technologies: ["Rust", "Anchor", "TypeScript", "Next.js"]
    },
    {
      name: "Solana Webhook Processor",
      summary: "Production webhook ingestion and alerting service for Helius. Built to handle real-world Solana transaction events with reliability patterns you would find in a production Node.js backend.",
      linkSource: "https://github.com/Nihal-Pandey-2302/solana_webhook_processor",
      image: "/sol_webhook.png",
      badge: "Node.js Backend / Infrastructure",
      subsection: "Solana",
      metrics: [
        "Bull/Redis job queue keeps HTTP layer non-blocking",
        "Dead letter queue with /dlq retry and discard API",
        "Idempotent ingestion via signature deduplication",
        "11/11 Jest tests passing"
      ],
      technologies: ["Node.js", "TypeScript", "Express", "Bull", "Redis", "PostgreSQL", "Docker"]
    },
    // ─── Backend and Systems ───────────────────────────────────────────────────
    {
      name: "Low-Latency Market Data Ingestion System",
      summary: "High-throughput async WebSocket ingestion system designed for real-time financial market data processing.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      linkSource: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      image: "/kraken.gif",
      badge: "Rust Infrastructure",
      subsection: "Backend and Systems",
      metrics: [
        "648,000 msgs/sec throughput",
        "Backpressure-aware pipeline",
        "Deterministic ordering"
      ],
      technologies: ["Rust", "Tokio", "WebSockets", "Serde", "Async Systems"]
    },
    {
      name: "High-Performance EVM Blockchain Indexer",
      summary: "Production Rust ingestion pipeline indexing 10M+ transactions from Ethereum RPC with atomic SQL guarantees, zero data integrity failures across crash and block-reorg scenarios, and a low-latency REST API.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      linkSource: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      image: "/evm-indexer.png",
      badge: "Backend Systems",
      subsection: "Backend and Systems",
      metrics: [
        "10M+ transactions indexed",
        "Crash-safe atomic transactions",
        "Sub-ms PostgreSQL queries"
      ],
      technologies: ["Rust", "Axum", "SQLx", "PostgreSQL", "Docker", "Async"]
    },
    {
      name: "InjectiveQL",
      summary: "GraphQL and REST gateway over the Injective SDK with pre-computed analytics and multi-tier caching.",
      linkSource: "https://github.com/Nihal-Pandey-2302/injectiveql",
      image: "/InjectiveQL.png",
      badge: "GraphQL API / DeFi Backend",
      subsection: "Backend and Systems",
      metrics: [
        "15ms average response time",
        "Pre-computed volatility, liquidity scoring, arbitrage detection",
        "Whale tracking at $100k threshold",
        "NFT-gated rate limiting",
        "8/8 tests passing"
      ],
      technologies: ["Node.js", "TypeScript", "Apollo GraphQL", "PostgreSQL", "Redis", "Docker"]
    },
    // ─── Web3 and DeFi ─────────────────────────────────────────────────────────
    {
      name: "RWA Verification & Tokenization Protocol",
      summary: "Protocol for verifying real-world documents and minting ERC-721 NFTs with IPFS metadata and on-chain authenticity verification.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/ARIA-QIE",
      linkSource: "https://github.com/Nihal-Pandey-2302/ARIA-QIE",
      image: "/aria-qie.png",
      badge: "Blockchain Protocols",
      subsection: "Web3 and DeFi",
      metrics: [
        "ERC-721 smart contracts",
        "IPFS metadata storage",
        "Oracle-based pricing"
      ],
      technologies: ["Solidity", "Hardhat", "IPFS", "React", "Python"]
    },
    {
      name: "VatanPay",
      summary: "Live remittance protocol on Stellar Testnet targeting the $50B Gulf-India corridor. Uses Soroban smart contracts and Stellar DEX path payments for atomic USDC to INR conversion in a single transaction.",
      linkPreview: "https://vatan-pay.vercel.app/",
      linkSource: "https://github.com/Nihal-Pandey-2302/VatanPay",
      image: "/VatanPay.png",
      badge: "Stellar / DeFi",
      subsection: "Web3 and DeFi",
      metrics: [
        "Soroban smart contract with escrow and 24-hour refund mechanism",
        "Stellar DEX path payments for atomic multi-currency conversion",
        "0.5% fee vs 5–7% industry average",
        "78% TypeScript codebase"
      ],
      technologies: ["TypeScript", "Soroban", "Rust", "React", "Stellar SDK"]
    },
  ],


  // Writing Section
  writing: [
    {
      title: "Building a Deterministic, High-Throughput WebSocket Ingestor",
      summary: "A deep dive into building resilient Rust systems that handle 648k msgs/sec with zero drops. Covers actor patterns, buffer management, and error handling.",
      link: "https://dev.to/nihalpandey2302/building-a-deterministic-high-throughput-websocket-ingestion-system-in-rust-38ia",
      badge: "High-Performance Rust"
    },
    {
      title: "Designing a Crash-Safe, Idempotent EVM Indexer",
      summary: "Architecting a production-grade indexer using Rust and PostgreSQL. Focuses on atomic transactions, reorganization handling, and data integrity.",
      link: "https://dev.to/nihalpandey2302/designing-a-crash-safe-idempotent-evm-indexer-in-rust-3ca8",
      badge: "Distributed Systems"
    },
  ],

  // About Section
  about: {
  description: `
I build high-throughput backend systems in Rust and Node.js, with a focus on performance, reliability, and correctness. Currently contributing to ParadeDB (YC S23) — 3 PRs merged into the production Rust codebase touching ctid lookup refactoring, JoinScan duplicate sort key correctness, and nested ExecutorRun panic fixes in PostgreSQL executor hooks. A fourth PR fixing partition-aware BM25 search is in review. Previously built Rust security tooling at the Prime Minister's Office, Government of India, deployed across critical government infrastructure.
On the blockchain side I have shipped production systems on Solana, EVM, and Stellar — from a Token-2022 stablecoin SDK with ZK Confidential Transfers to an EVM indexer handling 10M+ transactions with atomic SQL guarantees and a WebSocket engine at 648k msgs/sec via zero-copy deserialization.`,
  image: "/nihal-real.jpg",
  skills: [
    "Rust", "Node.js", "TypeScript", "PostgreSQL", "Redis",
    "Tokio", "Axum", "SQLx", "Express", "Bull",
    "Docker", "AWS", "Solana", "Anchor", "Solidity"
  ],
  interests: [
    "Database Internals", "Backend Infrastructure", "OSS Contributions"
  ],
  systemsInterests: "PostgreSQL internals · Rust systems · Node.js backend · Real-time pipelines · OSS infrastructure",
},
};