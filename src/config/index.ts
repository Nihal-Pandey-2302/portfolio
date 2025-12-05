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
    specialty: "Blockchain Backend & Protocol Engineer",
    summary:
      "Developing robust enterprise blockchain solutions and cutting-edge infrastructure. Specializing in Rust, EVM data indexing, and cybersecurity research.",
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
        "Conducted threat intelligence analysis and adversarial simulations (red team exercises) to identify vulnerabilities in critical digital infrastructure.",
        "Performed security assessments on sensitive government systems (Details confidential under NDA)."
      ],
    },
    {
      company: "Winner - aOS Andromeda Hackathon 2025",
      position: "Team Lead",
      startDate: "Prize",
      endDate: "$2,500",
      summary: [
        "Secured 1st place out of 2500+ teams by building a high-impact blockchain solution.",
        "Demonstrated expertise in protocol design and rapid prototyping under pressure."
      ],
    },
    {
      company: "Winner - Smart India Hackathon 2024",
      position: "Tech Lead & Backend Developer",
      startDate: "Prize",
      endDate: "INR 100K",
      summary: [
        "Developed an agentless scanner for Windows vulnerabilities using Python and PowerShell.",
        "Automated security analysis and report generation, reducing manual assessment work by 80%."
      ],
    },
    {
      company: "Winner - Graph-e-thon 2.0",
      position: "Blockchain Developer",
      startDate: "Prize",
      endDate: "INR 175K",
      summary: [
        "Contributed to the winning project at the Technology Business Incubator event, focusing on blockchain-based solutions."
      ],
    },
  ],
  // Projects Section
  projects: [
    /*
    {
      name: "Kraken SDK (Rust)",
      summary: "High-performance, async Rust SDK for Kraken WebSocket API. Features typed data models, auto-reconnection, and a TUI for live trading. Benchmarked at ~648k msgs/sec.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      linkSource: "https://github.com/Nihal-Pandey-2302/kraken-rs",
      image: "/kraken-sdk.png",
    },
    */
    {
      name: "A.R.I.A. - Automated RWA Intelligence",
      summary: "The world's first AI-powered multi-document RWA verification platform on QIE Blockchain. Features instant NFT minting, fractionalization, and AI-driven document analysis for 8+ types (Deeds, Invoices, etc.). Built with Python (Flask), Gemini AI, and Solidity.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/ARIA-QIE", 
      linkSource: "https://github.com/Nihal-Pandey-2302/ARIA-QIE",
      image: "/aria-qie.png",
    },
    {
      name: "EVM Indexer in Rust",
      summary: "A high-performance data ingester and query API for EVM chains, built from scratch in Rust. Efficiently stores and retrieves blocks, transactions, and logs with a focus on data integrity and speed.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      linkSource: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      image: "/evm-indexer.png",
    },
    {
      name: "Aegis Protocol V3",
      summary: "An autonomous, on-chain insurance protocol using Chainlink Automation and Functions. Proactively monitors assets and detects loss events without user intervention, ensuring decentralized protection.",
      linkPreview: "https://aegis-frontend-tau.vercel.app/",
      linkSource: "https://github.com/Nihal-Pandey-2302/Aegis-Protocol",
      image: "/aegis-protocol.png",
    },
  ],
  // About Section
  about: {
    description: `
      I'm a backend engineer who enjoys diving deep into how blockchain protocols work under the hood. Most of my work revolves around building secure, high-performance infrastructure using Rust and the EVM—the low-level systems that keep decentralized networks running.

      Hackathons were where everything clicked for me. Hackathons like the aOS Andromeda winner (1st/2500+) and Smart India showed me that I enjoy building complex systems under tight deadlines far more than slow, abstract work. That’s why I’m drawn to protocol engineering and security—it's the kind of challenge that keeps me engaged.
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