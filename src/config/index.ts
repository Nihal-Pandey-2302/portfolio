import type { SiteConfig, SiteContent } from "../types";

// SITE-WIDE CONFIGURATION
export const SITE_CONFIG: SiteConfig = {
  title: "Nihal Pandey | Backend & Database Systems Engineer",
  author: "Nihal Pandey",
  description:
    "Backend and database systems engineer working on PostgreSQL internals and correctness. Author of poolproof, contributor to ParadeDB (YC S23), tech lead at Tvaram.",
  lang: "en",
  navLinks: [
    { text: "Open Source", href: "/#open-source" },
    { text: "Experience", href: "/#experience" },
    { text: "Projects", href: "/#projects" },
    { text: "Case Studies", href: "/#writing" },
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
    headline: "Backend and database engineer, working in and around Postgres.",
    map: [
      {
        where: "In front of it",
        layer: "connection poolers",
        name: "poolproof",
        note: "Runs 50 scenarios against Postgres and through five poolers, and reports every step where the answers differ.",
        href: "#open-source",
      },
      {
        where: "Inside it",
        layer: "executor internals",
        name: "ParadeDB (YC S23)",
        note: "3 PRs merged: a self-join returning wrong rows, a panic on nested executor runs, a ctid lookup cleanup.",
        href: "#paradedb",
      },
      {
        where: "Behind it",
        layer: "ingestion pipelines",
        name: "Ethereum EVM Indexer",
        note: "Each block, its transactions and logs, and the sync checkpoint commit in one Postgres transaction.",
        href: "#projects",
      },
    ],
    summary: [
      "Most of my open-source work is on PostgreSQL: executor fixes in ParadeDB, and poolproof, which tests the connection poolers in front of it. At Tvaram I built the backends for Tasvam and MailTitan, both launching soon.",
      "Before that I wrote Rust security tooling at the Prime Minister's Office and built on Solana, EVM, Stellar and Kaspa, winning five hackathons along the way.",
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
        "**50 scenarios** through **PgBouncer, PgDog, Supavisor, PgCat and Odyssey**, several versions of each, on Postgres 17 and 18. The [results site](https://nihal-pandey-2302.github.io/poolproof/) shows every step's trace and the version where a behaviour broke or was fixed.",
        "Scenarios built from **14 upstream issues** in PgBouncer, PgDog and Supavisor, each with the versions where it reproduces or stays fixed. PgDog answers only the `BEGIN` of `BEGIN; INSERT; COMMIT` and never commits the insert if the client disconnects ([pgdog#1849](https://github.com/pgdogdev/pgdog/issues/1849)). Supavisor hangs on 4 pipelined requests in 9 of 10 runs ([supavisor#1239](https://github.com/supabase/supavisor/issues/1239)).",
        "`poolproof scan` reads `pg_stat_statements` exports, Postgres logs or `.sql` files, parses them with the real Postgres parser, and flags the queries that break under transaction pooling, checked against what your pooler version actually did. SARIF output for code scanning.",
        "Runs real drivers (psycopg, pgx, node-postgres, pgjdbc) through each pooler. Failures are classed as silent, error or hang, and documented limitations are kept apart from bugs.",
        "Ships as signed binaries for Linux, macOS and Windows (SHA256SUMS and build attestation) and as a GitHub Action for CI.",
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
            text: "`JoinScan` returned wrong rows when a self-join sorted on a column name both sides share. Late materialization was deduplicating columns by name, so I rewrote physical projection to bind them by index. A second case run during review showed my fix misbinding, and I rebuilt it.",
            story: "/work/joinscan-wrong-rows",
          },
          {
            ref: "#4924",
            url: "https://github.com/paradedb/paradedb/pull/4924",
            status: "merged",
            text: "A nested `ExecutorRun` panicked in `fake_aminsertcleanup` on PG16. Review found a second bug in my first fix, on the recursive DML path, so I replaced its depth counter with an RAII `FrameGuard` that gives every nesting level its own frame.",
            story: "/work/nested-executor-run",
          },
          {
            ref: "#4765",
            url: "https://github.com/paradedb/paradedb/pull/4765",
            status: "merged",
            text: "Removed `ctid` from `SearchIndexScore` in favour of batched lookups, folding 5 duplicated ctid-lookup blocks into one helper used by 6 execution paths.",
          },
          {
            ref: "#5093",
            url: "https://github.com/paradedb/paradedb/issues/5093",
            status: "proposed",
            text: "Replace the `resolve_physical_index` heuristic with explicit column lineage tracking: the structural follow-up to #4763.",
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
        "Wrote Tokio-based Rust tooling that automated vulnerability scanning across critical government infrastructure, cutting manual assessment time by **over 60%** with no downtime during rollout.",
        "Threat-modelling workflows I built were picked up by **2 internal teams**.",
        "Details under NDA.",
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
      name: "Ethereum EVM Indexer",
      summary:
        "Ingests Ethereum blocks, transactions and logs into Postgres. Each block and the sync checkpoint commit in **one transaction**. Reorgs roll back to the fork point, up to 64 blocks, in one transaction; writes are idempotent, logs included. 11 integration tests against a real Postgres. Read API on Axum with cursor pagination.",
      stack: ["Rust", "Tokio", "Axum", "SQLx", "PostgreSQL"],
      source: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      story: "/work/evm-indexer",
      figure: { value: "1", label: "Postgres transaction per block, checkpoint included" },
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
    "More in [my repositories](https://github.com/Nihal-Pandey-2302?tab=repositories), including the Kraken Market Data SDK, Solana Job Queue, Solana Webhook Processor, InjectiveQL, EVM Event Watchdog and VatanPay.",

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

  // Case studies. The section keeps the id #writing: it is a link target
  writing: [
    {
      title: "What a connection pooler changes",
      summary:
        "How poolproof compares Postgres with the pooler in front of it, and the work it took before a pass meant anything: proving two clients shared a backend, probing the pool's real shape, and results that flip between runs.",
      link: "/work/poolproof",
      badge: "poolproof · Connection poolers",
      status: "published",
    },
    {
      title: "Wrong rows from a self-join",
      summary:
        "A self-join that sorted on a shared column name returned the wrong rows. The cause was one line comparing columns by name, my first fix made the same kind of mistake, and the merged one resolves each sort column against the child schema.",
      link: "/work/joinscan-wrong-rows",
      badge: "ParadeDB #4763 · PostgreSQL internals",
      status: "published",
    },
    {
      title: "A panic on PG16, and the fix that needed fixing",
      summary:
        "Why a depth counter can't model recursive DML in executor hooks, the test that proved nothing, and the RAII FrameGuard that replaced it.",
      link: "/work/nested-executor-run",
      badge: "ParadeDB #4924 · PostgreSQL internals",
      status: "published",
    },
    {
      title: "Re-reading a crash-safe indexer",
      summary:
        "One Postgres transaction per block, checkpoint included, held up. A re-read eighteen months later found three ways the rest could still lose or duplicate data, and the tests written to fix them found two more.",
      link: "/work/evm-indexer",
      badge: "Ethereum EVM Indexer · Data integrity",
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
