export interface SiteConfig {
  title: string;
  description: string;
  lang: string;
  author: string;
  navLinks: { text: string; href: string }[];
  socialLinks: { text: string; href: string }[];
  socialImage: string;
}

export interface SiteContent {
  hero: HeroProps;
  seeking: SeekingContent;
  highlights: MetricHighlight[];
  experience: ExperienceItem[];
  achievements: ExperienceItem[];
  projects: Project[];
  writing: WritingItem[];
  about: AboutProps;
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

export interface MetricHighlight {
  value: string;
  unit: string;
  label: string;
  sub: string;
}

export interface SeekingContent {
  status: string;
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  meta: { label: string; value: string; accent?: boolean }[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string[];
  url?: string;
}

// Single source of truth for project grouping — renaming a subsection
// in config without updating this union is a compile error.
export type ProjectSubsection =
  | "Current Work"
  | "Open Source"
  | "Systems & Performance"
  | "Earlier Work";

export interface Project {
  name: string;
  summary: string;
  image?: string;
  linkPreview?: string;
  linkSource?: string;
  metrics?: string[];
  technologies?: string[];
  badge?: string;
  flagship?: boolean;
  subsection?: ProjectSubsection;
}

export interface AboutProps {
  description: string;
  image: string;
  skills: string[];
  systemsInterests?: string;
}
