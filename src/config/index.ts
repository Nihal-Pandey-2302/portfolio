import type { SiteConfig, SiteContent } from "../types";

// SITE-WIDE CONFIGURATION
export const SITE_CONFIG: SiteConfig = {
  title: "Nihal Pandey | Founding Engineer at Tvaram",
  author: "Nihal Pandey",
  description:
    "Founding engineer at Tvaram, building Tasvam and MailTitan. Open source contributor to ParadeDB (YC S23), working on PostgreSQL internals.",
  lang: "en",
  navLinks: [
    { text: "Work", href: "/#projects" },
    { text: "Experience", href: "/#experience" },
    { text: "Writing", href: "/#writing" },
    { text: "About", href: "/#about" },
    { text: "Contact", href: "/#contact" },
  ],
  socialLinks: [
    { text: "X", href: "https://x.com/PandeyNihal23" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/nihal-pandey-8529b6257/" },
    { text: "Github", href: "https://github.com/Nihal-Pandey-2302" },
  ],
  socialImage: "/nihal-og.png",
};

// PAGE-SPECIFIC CONTENT
export const SITE_CONTENT: SiteContent = {
  // Hero Section
  hero: {
    name: "Nihal Pandey",
    specialty: "Founding Engineer @ Tvaram · Building Tasvam & MailTitan",
    summary:
      "I'm the founding engineer at Tvaram, building the backend for its product suite: Tasvam, the data intelligence layer, and MailTitan, email sending infrastructure. Both are announced and launching soon. I also contribute to ParadeDB (YC S23), with merged PRs in PostgreSQL executor and query pipeline internals. Before this I built Rust security tooling at the Prime Minister's Office, Government of India.",
    email: "pandeynihal232@gmail.com",
  },

  // "Now Building" card
  seeking: {
    status: "Now Building",
    role: "Founding Engineer",
    company: "Tvaram",
    companyUrl: "https://tvaram.com",
    description:
      "Building two products at Tvaram: Tasvam, the data intelligence layer, and MailTitan, email sending infrastructure. Both announced, launching soon.",
    meta: [
      { label: "Building", value: "Tasvam · MailTitan", accent: true },
      { label: "Open Source", value: "ParadeDB (YC S23) · PostgreSQL internals" },
    ],
  },

  // Engineering Highlights (Metrics bar)
  highlights: [
    {
      value: "2",
      unit: "systems",
      label: "Building Tasvam and MailTitan end to end",
      sub: "Founding Engineer @ Tvaram",
    },
    {
      value: "4",
      unit: "PRs",
      label: "ParadeDB (YC S23) · PostgreSQL internals",
      sub: "3 merged · 1 in review",
    },
    {
      value: "648K",
      unit: "msgs/sec",
      label: "WebSocket throughput benchmark",
      sub: "Kraken Market Data Engine",
    },
    {
      value: "10M+",
      unit: "transactions",
      label: "Atomic SQL guarantees, zero data loss",
      sub: "Production EVM Indexer",
    },
    {
      value: "5x",
      unit: "Winner",
      label: "Hackathon wins incl. Smart India Hackathon",
      sub: "Client: Government of India (NTRO)",
    },
  ],

  // Experience Section
  experience: [
    {
      company: "Tvaram",
      position: "Founding Engineer",
      startDate: "Jun 2026",
      endDate: "Present",
      url: "https://tvaram.com",
      summary: [
        "Sole engineer across Tvaram's product suite, including MailTitan (enterprise email sending infrastructure) and Tasvam (the data intelligence layer). Both announced, launching soon.",
        "Own the backend end to end on both products.",
        "Engineering write-ups and case studies coming once the products are live.",
      ],
    },
    {
      company: "ParadeDB (YC S23)",
      position: "Open Source Contributor · Rust / PostgreSQL",
      startDate: "Apr 2026",
      endDate: "Present",
      url: "https://www.paradedb.com",
      summary: [
        "Multiple PRs merged into the production Rust codebase: query pipeline, scan execution, and PostgreSQL executor hooks",
        "PR #4924 (merged): fixed a nested ExecutorRun panic on PG16, found a second bug on the recursive DML path during review, and replaced a depth counter with an RAII FrameGuard",
        "PR #4763 (merged): fixed JoinScan returning wrong rows on self-joins with duplicate sort keys by rewriting physical projection to use column indices instead of name-based dedup",
        "PR #4765 (merged): refactored ctid lookup across the query pipeline and removed five duplicate code blocks",
        "PR #4752 (in review): partition-aware BM25 search via SPI expansion, plus lifecycle panic fixes in begin_custom_scan and rescan",
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
      company: "Winner: aOS Andromeda Hackathon 2025",
      position: "Team Lead",
      startDate: "Prize",
      endDate: "$2,500",
      summary: [
        "1st place out of 2,500+ global teams",
        "Built production RWA tokenization platform with ERC-721 contracts and IPFS metadata in 48 hours",
      ],
    },
    {
      company: "Winner: Smart India Hackathon 2024 (NTRO)",
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
      company: "4th Place: Kaspa Hackathon 2024",
      position: "Backend Developer",
      startDate: "Prize",
      endDate: "$1,250",
      summary: [
        "4th overall out of international field",
        "Won Most Creative Use of Kaspa and Best Real-Time Data Project",
      ],
    },
    {
      company: "Finalist: Kraken Forge Hackathon 2025",
      position: "Backend Developer",
      startDate: "Prize",
      endDate: "Global Top Tier",
      summary: [
        "Selected as global top-tier finalist in performance optimization category",
      ],
    },
    {
      company: "Winner: Graph-e-thon 2.0",
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
    // Current Work (Tvaram)
    {
      name: "Tasvam",
      summary:
        "The data intelligence layer of the Tvaram ecosystem. I'm building the entire backend as founding engineer.",
      linkPreview: "https://tvaram.com",
      badge: "Tvaram · Launching soon",
      flagship: true,
      subsection: "Current Work",
      metrics: ["Case study coming after launch"],
    },
    {
      name: "MailTitan",
      summary:
        "Enterprise email sending infrastructure built for high-volume, mission-critical delivery. I'm building the entire platform as founding engineer.",
      linkPreview: "https://tvaram.com",
      badge: "Tvaram · Launching soon",
      flagship: true,
      subsection: "Current Work",
      metrics: ["Case study coming after launch"],
    },
    // ParadeDB (Open Source)
    {
      name: "ParadeDB: ctid Refactor (Merged)",
      summary:
        "Removed ctid from SearchIndexScore and consolidated duplicate lookup logic into a centralized resolve_ctid helper across 5 execution paths in the query pipeline.",
      linkSource: "https://github.com/paradedb/paradedb/pull/4765",
      badge: "Open Source · Merged",
      subsection: "Open Source",
      metrics: [
        "265 lines changed across 6 files",
        "Merged into production codebase",
        "Eliminated 5 duplicate code blocks",
      ],
      technologies: ["Rust", "PostgreSQL", "Tantivy", "pgrx"],
    },
    {
      name: "ParadeDB: RAII FrameGuard Fix (Merged)",
      summary:
        "Fixed nested ExecutorRun panic in fake_aminsertcleanup on PG16. Identified a second correctness bug mid-review and replaced depth-counter approach with a proper RAII FrameGuard.",
      linkSource: "https://github.com/paradedb/paradedb/pull/4924",
      badge: "Open Source · Merged",
      subsection: "Open Source",
      metrics: [
        "Fixes unreachable! panic on PG16",
        "RAII guard handles nested DML correctly",
        "282 lines changed",
      ],
      technologies: ["Rust", "PostgreSQL", "pgrx"],
    },
    {
      name: "ParadeDB: JoinScan Sort Key Fix (Merged)",
      summary:
        "Fixed JoinScan returning wrong rows on self-joins with duplicate sort keys. Caught a column misbinding in my own fix during review and rebuilt using physical index mapping.",
      linkSource: "https://github.com/paradedb/paradedb/pull/4763",
      badge: "Open Source · Merged",
      subsection: "Open Source",
      metrics: [
        "Fixes incorrect row ordering on self-joins",
        "Rebuilt column mapping using physical indices",
        "261 lines changed",
      ],
      technologies: ["Rust", "PostgreSQL", "DataFusion"],
    },
    {
      name: "ParadeDB: Partitioned Table BM25",
      summary:
        "Added partition-aware BM25 search via SPI expansion. Fixed lifecycle panics in begin_custom_scan and rescan for partitioned index relations.",
      linkSource: "https://github.com/paradedb/paradedb/pull/4752",
      badge: "Open Source · In Review",
      subsection: "Open Source",
      metrics: [
        "BM25 search now works on partitioned tables",
        "Fixed begin_custom_scan lifecycle panic",
        "225 lines changed",
      ],
      technologies: ["Rust", "PostgreSQL", "pgrx", "SPI"],
    },
    // Systems & Performance
    {
      name: "Low-Latency Market Data Ingestion System",
      summary:
        "High-throughput async WebSocket ingestion system designed for real-time financial market data processing.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      linkSource: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      image: "/kraken.gif",
      badge: "Rust Infrastructure",
      subsection: "Systems & Performance",
      metrics: [
        "648,000 msgs/sec throughput",
        "Backpressure-aware pipeline",
        "Deterministic ordering",
      ],
      technologies: ["Rust", "Tokio", "WebSockets", "Serde", "Async Systems"],
    },
    {
      name: "Crash-Safe High-Throughput EVM Indexer",
      summary:
        "Production Rust ingestion pipeline indexing 10M+ transactions from Ethereum RPC with atomic SQL guarantees, zero data integrity failures across crash and block-reorg scenarios, and a low-latency REST API.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      linkSource: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      image: "/evm-indexer.png",
      badge: "Backend Systems",
      subsection: "Systems & Performance",
      metrics: [
        "10M+ transactions indexed",
        "Crash-safe atomic transactions",
        "Sub-ms PostgreSQL queries",
      ],
      technologies: ["Rust", "Axum", "SQLx", "PostgreSQL", "Docker", "Async"],
    },
    // Earlier Work
    {
      name: "Solana Stablecoin Standard (SSS)",
      summary:
        "OpenZeppelin-equivalent SDK for Solana stablecoins using Token-2022. Three standards: SSS-1 minimal, SSS-2 compliant with Transfer Hook blacklist enforcement and Permanent Delegate seizure, SSS-3 private with ZK Confidential Transfers proof of concept.",
      linkPreview: "https://sss-solana-stablecoin-sdk.vercel.app/",
      linkSource: "https://github.com/Nihal-Pandey-2302/sss-solana-stablecoin-sdk",
      image: "/Solana Stablecoin Standard (SSS).png",
      badge: "Solana / DeFi Infrastructure",
      subsection: "Earlier Work",
      metrics: [
        "19/19 Anchor tests passing",
        "Transfer Hook intercepts every token transfer",
        "ZK Confidential Transfers PoC (SSS-3)",
        "TypeScript SDK + 15-command CLI",
      ],
      technologies: ["Rust", "Anchor", "Token-2022", "TypeScript", "Next.js", "Docker"],
    },
    {
      name: "Solana Job Queue",
      summary:
        "Redis and SQS style job queue rebuilt as a Solana program: worker lifecycles, DAG dependencies, dead letter queues, and scheduled execution.",
      linkPreview: "https://solana-job-queue.vercel.app/",
      linkSource: "https://github.com/Nihal-Pandey-2302/solana-job-queue",
      image: "/Solana Job Queue.png",
      badge: "On-Chain Backend Infrastructure",
      subsection: "Earlier Work",
      metrics: [
        "Native O(log n) binary max-heap in Queue PDA",
        "DAG task dependencies via cryptographic prerequisite validation",
        "Full worker lifecycle with DLQ and scheduled execution",
        "17/17 tests, benchmarked at 400 TPS per Queue PDA",
      ],
      technologies: ["Rust", "Anchor", "TypeScript", "Next.js"],
    },
  ],

  // Writing Section
  writing: [
    {
      title: "Building a Deterministic, High-Throughput WebSocket Ingestor",
      summary:
        "A deep dive into building resilient Rust systems that handle 648k msgs/sec with zero drops. Covers actor patterns, buffer management, and error handling.",
      link: "https://dev.to/nihalpandey2302/building-a-deterministic-high-throughput-websocket-ingestion-system-in-rust-38ia",
      badge: "High-Performance Rust",
      status: "published",
    },
    {
      title: "Designing a Crash-Safe, Idempotent EVM Indexer",
      summary:
        "Architecting a production-grade indexer using Rust and PostgreSQL. Focuses on atomic transactions, reorganization handling, and data integrity.",
      link: "https://dev.to/nihalpandey2302/designing-a-crash-safe-idempotent-evm-indexer-in-rust-3ca8",
      badge: "Distributed Systems",
      status: "published",
    },
    {
      title: "Fixing Wrong Rows: Debugging ParadeDB's JoinScan on Self-Joins",
      summary:
        "A self-join with duplicate sort keys was returning wrong rows. How I traced it through the optimizer and rebuilt physical projection on column indices.",
      badge: "PostgreSQL Internals",
      status: "in-progress",
    },
    {
      title: "RAII in Postgres Extensions: Surviving Nested ExecutorRun",
      summary:
        "Why a depth counter can't model recursive DML in executor hooks, and how an RAII FrameGuard fixes it.",
      badge: "PostgreSQL Internals",
      status: "in-progress",
    },
  ],

  // About Section
  about: {
    description: `
I build backend systems where mistakes are expensive: customer data, email delivery, query execution. Most of the work is finding the invariant the system has to hold and making the database or the design enforce it, instead of trusting review to catch violations.
Right now that means Tasvam and MailTitan at Tvaram, plus PRs into ParadeDB's Rust codebase. Before that, Rust security tooling at the Prime Minister's Office.`,
    image: "/nihal-real.jpg",
    skills: [
      "Go", "Python", "Rust", "TypeScript / Node.js",
      "PostgreSQL", "Redis", "Docker",
    ],
    systemsInterests:
      "PostgreSQL internals · Distributed systems · Email infrastructure · Rust",
  },
};
