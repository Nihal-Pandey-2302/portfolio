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
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
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

  // Achievements Section - REMOVED as per request to focus on "clean infra engineer vibe"
  achievements: [],

  // Projects Section
  projects: [
    {
      name: "Low-Latency Market Data Ingestion System",
      summary: "High-throughput async WebSocket ingestion system designed for real-time financial market data processing.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      linkSource: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      image: "/kraken-sdk.png",
      badge: "Rust Infrastructure",
      metrics: [
        "Persistent WebSocket client",
        "Backpressure-aware pipeline",
        "Deterministic ordering"
      ],
      technologies: ["Rust", "Tokio", "WebSockets", "Serde", "Async Systems"]
    },
    {
      name: "High-Performance EVM Blockchain Indexer",
      summary: "Production-style blockchain ingestion and query system for indexing on-chain data.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      linkSource: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      image: "/evm-indexer.png",
      badge: "Backend Systems",
      metrics: [
        "Crash-safe atomic transactions",
        "Idempotent ingestion",
        "Optimized PostgreSQL schema"
      ],
      technologies: ["Rust", "Axum", "SQLx", "PostgreSQL", "Docker", "Async"]
    },
    {
      name: "Real-Time Multi-Chain Event Monitoring System",
      summary: "Monitoring and alerting system for on-chain events across multiple networks.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/evm_event_watchdog",
      linkSource: "https://github.com/Nihal-Pandey-2302/evm_event_watchdog",
      image: "https://raw.githubusercontent.com/Nihal-Pandey-2302/evm_event_watchdog/refs/heads/main/tui.gif",
      badge: "Distributed Systems",
      metrics: [
        "Real-time event listeners",
        "Concurrent stream processing",
        "Fault-tolerant state tracking"
      ],
      technologies: ["Rust", "WebSockets", "Tokio", "Ethereum RPC", "Async"]
    },
  ],

  // About Section
  about: {
    description: `
      I’m a backend engineer focused on building reliable systems that process real-time data and power backend infrastructure. Most of my work is in Rust, where I build concurrent services, ingestion pipelines, and APIs designed for performance and fault tolerance.

      I enjoy working on systems where correctness and reliability matter — real-time data processing, distributed services, and infrastructure-heavy backend applications. During my internship with the Government of India’s cybersecurity team, I developed internal Rust-based tooling for vulnerability analysis and infrastructure security in a restricted environment.

      I’m currently seeking remote backend engineering roles and am open to contract or trial opportunities that can transition into full-time positions.
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
  },
};