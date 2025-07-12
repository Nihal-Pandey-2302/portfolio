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
    specialty: "Blockchain Protocol Engineer",
    summary:
      "Passionate about building performant and secure Web3 systems. Specializing in Rust, EVM infrastructure, and autonomous on-chain protocols.",
    email: "pandeynihal232@gmail.com",
  },
  // Experience Section (Hackathons, Awards)
  experience: [
    {
      company: "Winner - Smart India Hackathon 2024",
      position: "Tech Lead & Backend Developer",
      startDate: "Sept 2024",
      endDate: "Dec 2024",
      summary: [ // The template expects an array of strings
        "Developed an agentless scanner for Windows vulnerabilities using Python for the backend and PowerShell for system interaction.",
        "Automated security analysis and report generation, demonstrating skills in system scripting and security assessment, reducing manual work by 80%."
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
    {
      company: "3rd Place - IEEE Sustainability Hackathon",
      position: "Blockchain Track",
      startDate: "IEEE India",
      endDate: "& Hong Kong",
      summary: [
          "Secured a top position by designing and presenting a blockchain solution focused on sustainability challenges."
      ],
    },
  ],
  // Projects Section
  projects: [
    {
      name: "EVM Indexer in Rust",
      summary: "A high-performance data ingester and query API for EVM chains, built from scratch to efficiently store and retrieve blocks, transactions, and logs.",
      linkPreview: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer", // Use your GitHub link for both for now
      linkSource: "https://github.com/Nihal-Pandey-2302/rust-evm-indexer",
      image: "/evm-indexer.png", // Add this image to the /public folder
    },
    {
      name: "Aegis Protocol V3",
      summary: "An autonomous, on-chain insurance protocol that uses Chainlink Automation and Functions to proactively monitor assets and detect loss events without user intervention.",
      linkPreview: "https://aegis-frontend-tau.vercel.app/", // Change this link
      linkSource: "https://github.com/Nihal-Pandey-2302/Aegis-Protocol", // Change this link
      image: "/aegis-protocol.png", // Add this image to the /public folder
    },
    
  ],
  // About Section
  about: {
    description: `
      I'm a highly motivated engineering student specializing in Blockchain Protocol Engineering. My passion lies in diving deep into the tech stack to build robust, performant, and secure Web3 solutions. I have hands-on experience developing core infrastructure like a high-performance EVM data indexer in Rust, which taught me the importance of efficiency and data integrity.

      I thrive on complex challenges and am always eager to learn new technologies. From architecting DApps on Polygon to winning hackathons with innovative security tools, my goal is to contribute to building the foundational protocols that will power the future of the decentralized web.
    `,
    image: "/nihal-big.jpg", // We will add this image in the next step
  },
};