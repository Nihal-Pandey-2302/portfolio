import type { SiteConfig, SiteContent } from "../types";

// SITE-WIDE CONFIGURATION
export const SITE_CONFIG: SiteConfig = {
  title: "Nihal Pandey | Blockchain Protocol Engineer",
  author: "Nihal Pandey",
  description:
    "Highly motivated engineering student specializing in Blockchain Protocol Engineering. Passionate about developing robust Web3 solutions with hands-on experience in Rust, EVM data indexing, and DApp development.",
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
    specialty: "Rust Backend Engineer | High-Performance Systems",
    summary:
      "Building production-grade blockchain infrastructure that processes 648,000 msgs/sec. Specializing in real-time WebSocket protocols, atomic transaction processing, and multi-chain indexing at scale.",
    email: "pandeynihal232@gmail.com",
  },
  // Experience Section (Hackathons, Awards)
  experience: [
    {
      company: "Cybersecurity Research Intern - PMO, Govt. of India",
      position: "Security Researcher",
      startDate: "June 2025",
      endDate: "Sept 2025",
      summary: [
        "Conducted threat intelligence analysis and adversarial simulations (red team exercises) to secure critical digital infrastructure.",
        "Developed custom Rust-based security tooling for internal vulnerability assessment and penetration testing (Project details confidential under NDA).",
        "Collaborated with national cybersecurity teams on incident response scenarios and threat modeling.",
        "Impact: Contributed to securing government systems against advanced persistent threats."
      ],
    },
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
      name: "Kraken Market Data SDK ⚡",
      summary: "Production-grade async WebSocket client achieving 648,000 messages/sec with complete type safety. Features auto-reconnection, CRC32 validation, HMAC-SHA512 authentication, and live trading TUI dashboard.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      linkSource: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      image: "/kraken-sdk.png",
      badge: "Global Finalist - Kraken Forge 2025",
      metrics: [
        "648k msgs/sec throughput",
        "Sub-5ms reconnection recovery",
        "100% schema compliance"
      ],
      technologies: ["Rust", "Tokio", "WebSocket", "Serde"]
    },
    {
      name: "EVM Event Watchdog 🔐",
      summary: "Real-time exploit detection system monitoring Ethereum, Polygon, and Arbitrum with sub-second alert latency. Terminal UI dashboard with atomic state management and zero-latency updates.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/evm_event_watchdog",
      linkSource: "https://github.com/Nihal-Pandey-2302/evm_event_watchdog",
      image: "https://raw.githubusercontent.com/Nihal-Pandey-2302/evm_event_watchdog/refs/heads/main/tui.gif",
      badge: "Security Infrastructure",
      metrics: [
        "<1s detection latency",
        "3-chain monitoring",
        "Zero false positives"
      ],
      technologies: ["Rust", "Tokio", "WebSocket", "Discord API"]
    },
    {
      name: "Ethereum Data Indexer",
      summary: "Production-grade EVM ingestion pipeline with RESTful query API. Handles 100+ concurrent requests with sub-millisecond response times. Atomic SQL transactions ensure data consistency during crashes.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      linkSource: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      image: "/evm-indexer.png",
      badge: "Infrastructure",
      metrics: [
        "<1ms average response time",
        "100+ concurrent requests",
        "99.9% uptime"
      ],
      technologies: ["Rust", "Axum", "SQLx", "PostgreSQL", "Docker"]
    },
    {
      name: "InjectiveQL",
      summary: "Developer-focused GraphQL API with pre-computed analytics (volatility, liquidity scoring, arbitrage detection). Multi-tier caching strategy achieving 15ms average response times.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/injectiveql",
      linkSource: "https://github.com/Nihal-Pandey-2302/injectiveql",
      image: "https://raw.githubusercontent.com/Nihal-Pandey-2302/injectiveql/main/docs/screenshots/market-intelligence.png",
      badge: "Backend Architecture",
      metrics: [
        "<15ms average latency",
        "80%+ cache hit rate",
        "NFT-based rate limiting"
      ],
      technologies: ["TypeScript", "Apollo GraphQL", "Redis", "PostgreSQL"]
    },
    {
      name: "LazorKit Identity Wallet",
      summary: "Next-generation wallet interface using WebAuthn biometrics, eliminating seed phrases. Features gasless onboarding via Paymaster for zero-balance users.",
      linkPreview: "https://lazorkit-solana-starter-rho.vercel.app/",
      linkSource: "https://github.com/Nihal-Pandey-2302/lazorkit-solana-starter",
      image: "/lazorkit-solana-starter.png",
      badge: "Web3 Innovation",
      metrics: [
        "90% faster onboarding",
        "Zero seed phrase friction",
        "Cross-platform biometric"
      ],
      technologies: ["Next.js 15", "Solana SDK", "WebAuthn"]
    },
    {
      name: "A.R.I.A. Protocol",
      summary: "AI-powered real-world asset verification and tokenization platform on Cosmos. Features automated revenue distribution and multi-ADO composition.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/ARIA-QIE", 
      linkSource: "https://github.com/Nihal-Pandey-2302/ARIA-QIE",
      image: "/aria-qie.png",
      badge: "🥇 1st Place - Andromeda Hackathon",
      technologies: ["Rust", "CosmWasm", "AI Integration", "IPFS"]
    },
  ],
  // About Section
  about: {
    description: `
      I'm a backend engineer who specializes in building the low-level systems that keep blockchains running smoothly. Most of my work involves Rust and the EVM—building indexers, real-time monitoring tools, and high-throughput data pipelines that can handle hundreds of thousands of events per second.

      What drives me is solving hard infrastructure problems under constraints. During my internship at India's Prime Minister's Office, I built custom security tooling to assess critical government infrastructure. At hackathons like Andromeda (1st/2500+) and Smart India, I learned that I perform best under pressure—tight deadlines force you to think clearly about architecture and cut straight to what matters.

      I'm drawn to protocol engineering and security because those are the domains where performance, correctness, and resilience aren't optional—they're the entire point. That's why I focus on Rust: when you're building infrastructure that handles financial transactions or security events, you need memory safety and predictable concurrency, not just fast code.

      Currently looking for teams building L1/L2 infrastructure, high-frequency trading systems, or security-critical applications where every millisecond and every byte matters.
    `,
    image: "/nihal-real.jpg",
    skills: [
      "Rust",
      "Solidity",
      "EVM / Ethereum",
      "Tokio / Axum",
      "PostgreSQL",
      "Python",
      "Docker",
      "TypeScript",
    ],
    interests: [
      "Cryptography Enthusiast",
      "Reading",
      "Cycling",
      "Gardening"
    ],
  },
};