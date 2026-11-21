import type { SiteConfig, SiteContent } from "../types";

// SITE-WIDE CONFIGURATION
export const SITE_CONFIG: SiteConfig = {
  title: "Nihal Pandey | Backend & Database Systems Engineer",
  author: "Nihal Pandey",
  description:
    "Backend and database systems engineer focused on PostgreSQL internals and correctness. Author of poolproof, contributor to ParadeDB (YC S23). Senior founding engineer and tech lead at Tvaram, building Tasvam and MailTitan.",
  lang: "en",
  navLinks: [
    { text: "Open Source", href: "/#open-source" },
    { text: "Experience", href: "/#experience" },
    { text: "Projects", href: "/#projects" },
    { text: "Writing", href: "/#writing" },
    { text: "Contact", href: "/#contact" },
  ],
  socialLinks: [
    { text: "GitHub", href: "https://github.com/Nihal-Pandey-2302" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/nihal-pandey-8529b6257/" },
    { text: "X", href: "https://x.com/PandeyNihal23" },
  ],
  socialImage: "/nihal-og.png",
  location: { city: "Bengaluru", timeZone: "Asia/Kolkata" },
};

// PAGE-SPECIFIC CONTENT
// Strings accept `code`, **bold** and [text](url) where the type says "rich".
export const SITE_CONTENT: SiteContent = {
  // Hero Section
  hero: {
    name: "Nihal Pandey",
    role: "Senior Founding Engineer & Tech Lead @ Tvaram",
    headline: "I build backend and data systems where being nearly correct is not good enough.",
    flag: {
      phrase: "nearly correct",
      code: "error[E0308]",
      message: "mismatched types",
      detail: "expected `correct`, found `nearly correct`",
    },
    map: [
      {
        where: "In front of it",
        layer: "connection poolers",
        name: "poolproof",
        note: "Tests what a pooler changes: 50 scenarios, built from real bug reports.",
        href: "#open-source",
      },
      {
        where: "Inside it",
        layer: "executor internals",
        name: "ParadeDB (YC S23)",
        note: "3 PRs merged: wrong rows from JoinScan, a nested ExecutorRun panic, ctid lookups.",
        href: "#paradedb",
      },
      {
        where: "Behind it",
        layer: "ingestion pipelines",
        name: "Ethereum EVM Indexer",
        note: "10M+ transactions indexed with atomic SQL, zero integrity failures.",
        href: "#projects",
      },
    ],
    summary: [
      "Most of my time goes into PostgreSQL: its executor internals at ParadeDB, and the connection poolers in front of it with poolproof. At Tvaram I'm building Tasvam and MailTitan, both launching soon.",
      "Before that I wrote Rust security tooling at the Prime Minister's Office, and shipped production systems on Solana, EVM, Stellar and Kaspa, winning five hackathons along the way.",
    ],
    email: "pandeynihal232@gmail.com",
    image: "/avatar.jpg", // 112px square, cut from nihal-real.jpg
  },

  // Open Source Section
  openSource: {
    poolproof: {
      name: "poolproof",
      tagline: "Find out what breaks when you put a connection pooler in front of Postgres",
      stack: "Rust",
      summary:
        "Poolers like PgBouncer, PgDog and Supavisor are meant to be invisible. In transaction mode they mostly are, until a `SET` leaks to another client, a temp table appears in someone else's session, or half a query string silently never runs. poolproof replays small scenarios against plain Postgres and then through the pooler, and reports every step where the two differ. Postgres is the oracle, so no scenario hardcodes expected output.",
      points: [
        "**50 scenarios** across **PgBouncer, PgDog, Supavisor, PgCat and Odyssey**, multiple versions each, on Postgres 17 and 18, with a [results site](https://nihal-pandey-2302.github.io/poolproof/) showing every step's trace and the version where a behaviour broke or got fixed",
        "Scenarios built from **14 upstream issues** in PgBouncer, PgDog and Supavisor, with the versions where each reproduces or stays fixed, e.g. PgDog acknowledging only the `BEGIN` of `BEGIN; INSERT; COMMIT` and never committing the insert ([pgdog#1849](https://github.com/pgdogdev/pgdog/issues/1849)), and Supavisor hanging on 4 pipelined requests in 9 of 10 runs ([supavisor#1239](https://github.com/supabase/supavisor/issues/1239))",
        "`poolproof scan` reads `pg_stat_statements` exports, Postgres logs or `.sql` files, parses them with the real Postgres parser, and flags queries that break under transaction pooling, checked against what your pooler version actually did. SARIF output for code scanning",
        "Runs real drivers (psycopg, pgx, node-postgres, pgjdbc) through each pooler; classifies failures as silent, error or hang, and separates documented limitations from bugs",
        "Ships as signed binaries for Linux, macOS and Windows (SHA256SUMS + build attestation) and as a GitHub Action for CI",
      ],
      repo: "https://github.com/Nihal-Pandey-2302/poolproof",
      results: "https://nihal-pandey-2302.github.io/poolproof/",
      caseStudy: { status: "published", href: "/work/poolproof" },
    },
    contributions: [
      {
        project: "ParadeDB (YC S23)",
        anchor: "paradedb",
        url: "https://github.com/paradedb/paradedb",
        stack: "Rust · PostgreSQL · Tantivy",
        summary: "3 merged, 867 lines across 15 files",
        items: [
          {
            ref: "#4763",
            url: "https://github.com/paradedb/paradedb/pull/4763",
            status: "merged",
            text: "`JoinScan` returned wrong rows on self-joins with duplicate sort keys. Traced it to late materialization in the optimizer and rewrote physical projection to bind columns by index instead of by name; caught a misbinding in my own fix during review and rebuilt it",
            story: "/work/joinscan-wrong-rows",
          },
          {
            ref: "#4924",
            url: "https://github.com/paradedb/paradedb/pull/4924",
            status: "merged",
            text: "Nested `ExecutorRun` panicked in `fake_aminsertcleanup` on PG16. Review found a second bug in my first fix, on the recursive DML path, so I replaced the depth counter with an RAII `FrameGuard` that gives every nesting level its own frame",
            story: "/work/nested-executor-run",
          },
          {
            ref: "#4765",
            url: "https://github.com/paradedb/paradedb/pull/4765",
            status: "merged",
            text: "Removed `ctid` from `SearchIndexScore` in favour of batched lookups, folding 5 duplicated ctid-lookup blocks into a single helper across 6 execution paths",
          },
          {
            ref: "#5093",
            url: "https://github.com/paradedb/paradedb/issues/5093",
            status: "proposed",
            text: "Replace the `resolve_physical_index` heuristic with explicit column lineage tracking, the structural follow-up to #4763",
          },
        ],
      },
    ],
  },

  // Experience Section
  experience: [
    {
      company: "Tvaram",
      position: "Senior Founding Engineer & Tech Lead",
      location: "Bengaluru",
      startDate: "June 2026",
      endDate: "present",
      url: "https://tvaram.com",
      summary: [
        "Built the backend for both products solo, and own it end to end.",
        "Promoted from Founding Engineer to Senior Founding Engineer & Tech Lead within three months.",
        "Leading a team of engineers.",
      ],
      // Unreleased: keep to the product sites' own public wording
      products: [
        {
          name: "Tasvam",
          url: "https://tasvam.ai",
          summary: "The data intelligence layer of the Tvaram ecosystem.",
          status: "Launching soon",
        },
        {
          name: "MailTitan",
          url: "https://mailtitan.ai",
          summary: "Enterprise email sending infrastructure for high-volume, mission-critical delivery.",
          status: "Launching soon",
        },
      ],
    },
    {
      company: "Prime Minister's Office (PMO), Government of India",
      position: "Cybersecurity Research Intern",
      location: "New Delhi",
      startDate: "June",
      endDate: "Sept 2025",
      summary: [
        "Wrote Tokio-based Rust tooling that automated vulnerability scanning across critical government infrastructure, cutting manual assessment time by **over 60%** with no downtime during rollout",
        "Threat-modelling workflows I built were picked up by **2 internal teams**",
        "Details under NDA",
      ],
    },
  ],

  education: {
    degree: "B.Tech, Electronics Engineering",
    school: "Rajiv Gandhi Institute of Petroleum Technology",
    years: "2022 – 2026",
  },

  // Projects Section
  projects: [
    {
      name: "KaspaSwarm",
      summary:
        "Autonomous AI agents post, bid on, solve and settle tasks as real Kaspa transactions, with an LLM verifier checking results before payment. Auction, escrow, transport and LLM services behind a React dashboard; PyTest, CI and one-command Docker Compose.",
      stack: ["Python", "FastAPI", "React", "WebSockets", "Kaspa SDK"],
      source: "https://github.com/Nihal-Pandey-2302/kaspaswarm",
      live: "https://kaspaswarm.vercel.app/",
      image: "/kaspaswarm.png",
    },
    {
      name: "Kraken Market Data SDK",
      summary:
        "Async WebSocket ingestion benchmarked at **648,000 msgs/sec** via zero-copy deserialization and ring-buffer reuse; 100% message delivery across 50+ simulated network partitions.",
      stack: ["Rust", "Tokio", "Serde", "WebSockets"],
      source: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      image: "/kraken-poster.jpg",
      video: ["/kraken.webm", "/kraken.mp4"],
    },
    {
      name: "Ethereum EVM Indexer",
      summary:
        "Indexed **10M+ transactions** with atomic SQL transactions: zero data-integrity failures across crash and block-reorg tests, idempotent reorg detection and rollback, read API on Axum.",
      stack: ["Rust", "Tokio", "Axum", "SQLx", "PostgreSQL"],
      source: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      figure: { value: "10M+", label: "transactions indexed, zero integrity failures" },
    },
    {
      name: "Solana Stablecoin Standard",
      summary:
        "OpenZeppelin-style SDK for Solana stablecoins in three tiers: minimal, compliant (Transfer Hook blacklist, Permanent Delegate seizure) and private (ZK Confidential Transfers PoC). TypeScript SDK, 15-command CLI, Helius indexer, admin dashboard; **19/19 Anchor tests** on Devnet.",
      stack: ["Rust", "Anchor", "Token-2022", "TypeScript"],
      source: "https://github.com/Nihal-Pandey-2302/sss-solana-stablecoin-sdk",
      live: "https://sss-solana-stablecoin-sdk.vercel.app/",
      image: "/Solana Stablecoin Standard (SSS).png",
    },
    {
      name: "A.R.I.A.",
      summary:
        "RWA tokenization protocol: ERC-721 minting, on-chain marketplace and fractionalized ownership, with IPFS-anchored metadata and on-chain document hash verification.",
      stack: ["Solidity", "Hardhat", "IPFS", "React"],
      source: "https://github.com/Nihal-Pandey-2302/ARIA-QIE",
      figure: { value: "1st", label: "of 2,500+ teams, Andromeda aOS Buildathon" },
    },
  ],
  moreProjects:
    "More in [my repositories](https://github.com/Nihal-Pandey-2302?tab=repositories), including Solana Job Queue, Solana Webhook Processor, InjectiveQL, EVM Event Watchdog and VatanPay.",

  // Hackathons Section
  hackathons: [
    {
      year: "2026",
      title:
        "1st Prize, UK AI Agent Hackathon, Kaspa Track ([KaspaSwarm](https://github.com/Nihal-Pandey-2302/kaspaswarm))",
      prize: "USD 1,000",
    },
    {
      year: "2026",
      title:
        "3 prizes at Kaspathon (Top 5 Main Prize, Real-Time Data, Most Creative Use of Kaspa), 500+ global teams",
      prize: "USD 1,200",
    },
    {
      year: "2025",
      title:
        "1st place, Andromeda aOS Buildathon, 2,500+ global teams ([A.R.I.A.](https://github.com/Nihal-Pandey-2302/ARIA-QIE))",
      prize: "USD 2,500",
    },
    {
      year: "2025",
      title:
        "Global Top-Tier Finalist, Kraken Forge Hackathon, Performance Optimization ([kraken-rs](https://github.com/Nihal-Pandey-2302/kraken-rs))",
    },
    {
      year: "2024",
      title: "Winner, Smart India Hackathon, NTRO Govt. of India, 50,000+ participants",
      prize: "INR 100K",
    },
    {
      year: "2024",
      title: "Winner, Graph-e-thon 2.0, Graphic Era TBI",
      prize: "INR 175K",
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
      title: "Wrong Rows From a Self-Join",
      summary:
        "A self-join with duplicate sort keys was returning wrong rows. How I traced it through the optimizer, where my first fix went wrong, and how physical projection got rebuilt on column indices.",
      link: "/work/joinscan-wrong-rows",
      badge: "PostgreSQL Internals · Case study",
      status: "published",
    },
    {
      title: "A Panic on PG16, and the Fix That Needed Fixing",
      summary:
        "Why a depth counter can't model recursive DML in executor hooks, the test that proved nothing, and how an RAII FrameGuard fixes it.",
      link: "/work/nested-executor-run",
      badge: "PostgreSQL Internals · Case study",
      status: "published",
    },
  ],

  // Skills Section
  skills: [
    { label: "Languages", items: "Rust, Go, TypeScript, Python, SQL, Solidity" },
    {
      label: "Backend",
      items: "Tokio, Axum, SQLx, Express, Bull, FastAPI, GraphQL, WebSockets, zero-copy deserialization",
    },
    {
      label: "Data",
      items: "PostgreSQL (executor internals, extensions, wire protocol, connection poolers), Redis",
    },
    {
      label: "Chains",
      items: "Solana (Anchor, Token-2022), EVM (Solidity, Hardhat), Stellar (Soroban), Kaspa",
    },
    { label: "Infra", items: "Docker Compose, GitHub Actions, AWS (EC2, S3), Prometheus/Grafana" },
  ],
};
