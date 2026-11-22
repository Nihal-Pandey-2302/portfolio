export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  author: string;
  navLinks: { text: string; href: string }[];
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  // Where I am; the footer shows the current time there
  location: { city: string; timeZone: string };
}

// Strings marked "rich" accept the inline formatting in src/utils/rich.ts:
// `code`, **bold** and [text](url).
export interface SiteContent {
  hero: HeroContent;
  openSource: OpenSourceContent;
  experience: ExperienceItem[];
  education: EducationItem;
  projects: Project[];
  moreProjects: string; // rich
  hackathons: Hackathon[];
  writing: WritingItem[];
  skills: SkillGroup[];
}

export interface HeroContent {
  name: string;
  role: string;
  headline: string;
  summary: string[]; // paragraphs, rich
  // The hero figure: places around Postgres and the work done at each.
  // Map.astro draws exactly three, in this order: pooler, Postgres, pipeline.
  map: MapStop[];
  email: string;
  image: string;
}

export interface MapStop {
  where: string;
  layer: string;
  name: string;
  note: string;
  href: string;
}

export interface OpenSourceContent {
  poolproof: OwnProject;
  contributions: ContributionGroup[];
}

// A project of my own, featured at length
export interface OwnProject {
  name: string;
  tagline: string;
  stack: string;
  summary: string; // rich
  points: string[]; // rich
  repo: string;
  results: string;
  caseStudy?: CaseStudyLink;
}

// Same rule as WritingItem: a published case study must carry its page,
// one still being written cannot.
export type CaseStudyLink =
  | { status: "published"; href: string }
  | { status: "in-progress"; href?: undefined };

// Changes sent to someone else's project
export interface ContributionGroup {
  project: string;
  anchor: string; // id on the page, for links to this group
  url: string;
  stack: string;
  summary: string;
  items: Contribution[];
}

export interface Contribution {
  ref: string;
  url: string;
  status: "merged" | "proposed";
  text: string; // rich
  story?: string; // path of its case-study page under /work
}

export interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string[]; // rich
  url?: string;
  products?: Product[];
}

// A product built in a role. For unreleased products, summary and status
// carry only what the company itself has made public.
export interface Product {
  name: string;
  url: string;
  summary: string;
  status: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  years: string;
}

export interface Project {
  name: string;
  summary: string; // rich
  stack: string[];
  source: string;
  live?: string;
  // The project's picture: a screenshot when there is one, else its headline figure.
  // With a video, image is its poster (the first frame).
  image?: string;
  video?: string[]; // sources, most efficient format first
  story?: string; // path of its case-study page under /work
  figure?: { value: string; label: string };
}

export interface Hackathon {
  year: string;
  title: string; // rich
  prize?: string;
}

interface WritingBase {
  title: string;
  summary: string;
  badge?: string;
}

// Discriminated union: a published article must carry a link,
// an in-progress one cannot — mismatches are compile errors.
export type WritingItem =
  | (WritingBase & { status: "published"; link: string })
  | (WritingBase & { status: "in-progress"; link?: undefined });

export interface SkillGroup {
  label: string;
  items: string;
}
