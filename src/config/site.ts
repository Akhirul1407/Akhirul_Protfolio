export interface SiteConfig {
  name: string;
  shortName: string;
  initials: string;
  title: string;
  headline: string;
  introLine: string;
  company: string;
  companyIndustry: string;
  location: string;
  email: string;
  linkedin: string;
  formEndpoint: string;
  siteUrl: string;
  description: string;
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "MD. Akhirul Islam",
  shortName: "Akhirul Islam",
  initials: "AI",
  title: "Project Manager",
  headline: "I don't just manage projects. I ship them.",
  introLine:
    "I'm Akhirul. At Innovate Solution I keep clients, developers and deadlines pointed in the same direction, so software launches land on time and calm.",
  company: "Innovate Solution",
  companyIndustry: "travel technology software company",
  location: "Bangladesh",
  email: "contact@akhirulislam.com", // [ADD: real email if different]
  linkedin: "https://www.linkedin.com/in/akhirul-islam", // [ADD: real linkedin url]
  formEndpoint: "https://formspree.io/f/placeholder", // Configurable Formspree or Web3Forms endpoint
  siteUrl: "https://akhirulislam.com",
  description:
    "Portfolio of MD. Akhirul Islam, Project Manager at Innovate Solution. Specializing in travel tech delivery, calm launches, and high-velocity engineering alignment.",
  navLinks: [
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
