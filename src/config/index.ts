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
    specialty: "Backend Engineer — Rust | Distributed Systems | Real-Time Infrastructure",
    summary:
      "I build backend systems focused on real-time data pipelines, concurrent services, and reliable infrastructure using Rust, PostgreSQL, and async architectures. Currently available for remote backend roles and open to contract → full-time opportunities.",
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
    {
      name: "Low-Latency Market Data Ingestion System",
      summary: "High-throughput async WebSocket ingestion system designed for real-time financial market data processing.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      linkSource: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      image: "/kraken.gif",
      badge: "Rust Infrastructure",
      flagship: true,
      metrics: [
        "648,000 msgs/sec throughput",
        "Backpressure-aware pipeline",
        "Deterministic ordering"
      ],
      technologies: ["Rust", "Tokio", "WebSockets", "Serde", "Async Systems"]
    },
    {
      name: "High-Performance EVM Blockchain Indexer",
      summary: "Production-style blockchain ingestion and query system for indexing on-chain data with crash-safe, idempotent guarantees.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      linkSource: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      image: "/evm-indexer.png",
      badge: "Backend Systems",
      metrics: [
        "Crash-safe atomic transactions",
        "Idempotent ingestion",
        "Sub-ms PostgreSQL queries"
      ],
      technologies: ["Rust", "Axum", "SQLx", "PostgreSQL", "Docker", "Async"]
    },
    {
      name: "RWA Verification & Tokenization Protocol",
      summary: "Protocol for verifying real-world documents and minting ERC-721 NFTs with IPFS metadata and on-chain authenticity verification.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/ARIA-QIE",
      linkSource: "https://github.com/Nihal-Pandey-2302/ARIA-QIE",
      image: "/aria-qie.png",
      badge: "Blockchain Protocols",
      metrics: [
        "ERC-721 smart contracts",
        "IPFS metadata storage",
        "Oracle-based pricing"
      ],
      technologies: ["Solidity", "Hardhat", "IPFS", "React", "Python"]
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
I'm a backend engineer focused on building reliable systems in Rust.

My work centers around concurrent services, real-time data pipelines, and backend infrastructure where correctness and stability matter.

Previously I built internal Rust tooling for vulnerability analysis during my cybersecurity internship with the Government of India.
    `,
    image: "/nihal-real.jpg",
    skills: [
      "Rust",
      "PostgreSQL",
      "Async Systems",
      "Docker",
      "Backend Infrastructure",
      "Distributed Systems",
      "Real-Time Data"
    ],
    interests: [
      "Backend Infrastructure",
      "Distributed Systems",
      "Real-Time Data"
    ],
    systemsInterests: "Market data systems • Blockchain infrastructure • Event streaming • Distributed systems",
  },
};