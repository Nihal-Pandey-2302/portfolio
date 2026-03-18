import type { SiteConfig, SiteContent } from "../types";

// SITE-WIDE CONFIGURATION
export const SITE_CONFIG: SiteConfig = {
  title: "Nihal Pandey | Rust Backend & Protocol Engineer",
  author: "Nihal Pandey",
  description:
    "Building high-performance blockchain infrastructure. Rust Backend Engineer specializing in deterministic systems, EVM indexing, and resilient distributed architectures.",
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
    specialty: "Blockchain and Backend Engineer | Rust · Solana · Node.js · TypeScript",
    summary:
      "I build blockchain infrastructure and the backend systems around it. My work spans a Token-2022 stablecoin SDK on Solana, a production Node.js webhook processor, a Rust WebSocket engine at 648k msgs/sec, and an EVM indexer handling 10M+ transactions. I write Rust for performance-critical systems and Node.js with TypeScript for everything else. Currently available for remote roles.",
    email: "pandeynihal232@gmail.com",
  },
  
  // Experience Section
  experience: [
    {
      company: "Cybersecurity Research Intern — Government of India (PMO)",
      position: "Security Researcher",
      startDate: "Jun 2025",
      endDate: "Sept 2025",
       summary: [
        "Developed internal Rust-based tooling for vulnerability detection and infrastructure auditing",
        "Built concurrent analysis utilities for security testing and misconfiguration detection",
        "Simulated adversarial scenarios to evaluate system resilience",
        "Collaborated with security teams on threat modeling and incident response exercises",
        "Worked in restricted environment under NDA (project details confidential)"
      ],
    },
  ],

  // Achievements Section
  achievements: [
    {
      company: "Winner - aOS Andromeda Hackathon 2025",
      position: "Team Lead",
      startDate: "Prize",
      endDate: "$2,500",
      summary: [
        "Built production-grade RWA tokenization platform in 48 hours under high-pressure hackathon environment.",
        "Demonstrated expertise in rapid prototyping, CosmWasm smart contracts, and cross-chain architecture.",
        "Rank: 1st out of 2,500+ teams"
      ],
    },
    {
      company: "Winner - Smart India Hackathon 2024 (NTRO)",
      position: "Tech Lead & Backend Developer",
      startDate: "Prize",
      endDate: "INR 100K",
      summary: [
        "Developed agentless Windows vulnerability scanner reducing manual security analysis by 80%.",
        "Integrated automated report generation with Python and PowerShell scripting.",
        "Client: Government of India"
      ],
    },
    {
      company: "Winner - Graph-e-thon 2.0",
      position: "Blockchain Developer",
      startDate: "Prize",
      endDate: "INR 175K",
      summary: [
        "Built blockchain-based analytics solution for Technology Business Incubator event.",
        "Focused on real-time data visualization and decentralized infrastructure.",
        "Host: TBI Graphic Era"
      ],
    },
  ],

  // Projects Section
  projects: [
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
I build blockchain infrastructure and the backend systems around it. On Solana I have shipped a Token-2022 stablecoin SDK with Transfer Hooks and ZK proofs, an on-chain job queue with a native binary max-heap, and a production Helius webhook processor. On EVM I built an indexer handling 10M+ transactions and a Solidity tokenization protocol that won 1st place out of 2,500+ global teams. I also built VatanPay, a live remittance protocol on Stellar using Soroban smart contracts and DEX path payments.

I write Rust for performance-critical systems and on-chain programs, and Node.js with TypeScript for backend services and APIs. Previously I built internal Rust security tooling during my cybersecurity internship at the Prime Minister's Office, Government of India.
    `,
    image: "/nihal-real.jpg",
    skills: [
      "Rust",
      "Solana",
      "Anchor",
      "Token-2022",
      "Node.js",
      "TypeScript",
      "Express",
      "Bull",
      "Redis",
      "Next.js",
      "Solidity",
      "Hardhat",
      "IPFS",
      "PostgreSQL",
      "Docker",
      "Async Systems"
    ],
    interests: [
      "Blockchain Infrastructure",
      "Solana Programs",
      "DeFi Infrastructure"
    ],
    systemsInterests: "Solana programs · DeFi infrastructure · Node.js backend · Rust systems · EVM indexing · Real-time pipelines",
  },
};