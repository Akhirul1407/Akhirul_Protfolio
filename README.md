# MD. Akhirul Islam — Personal Portfolio Website

A multi-page, high-performance portfolio website for **MD. Akhirul Islam**, Project Manager at Innovate Solution (travel technology software company, based in Bangladesh).

Built with **Astro**, **TypeScript**, **Tailwind CSS**, and self-hosted variable typography.

---

## Tech Stack & Architecture

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design system tokens
- **Typography**: `@fontsource-variable/space-grotesk` (headings) and `@fontsource-variable/inter` (body)
- **Content Management**: Astro Content Collections (`projects`, `experience`, `testimonials`, `posts`)
- **Transitions**: Astro View Transitions (`<ClientRouter />`)
- **SEO & Quality**: Automated XML sitemap, custom `robots.txt`, dark/lime Open Graph cards, JSON-LD `Person` schema, and accessible semantics.

---

## Design System Tokens

All global color tokens and typography definitions are centralized in `src/styles/global.css`:

```css
--color-bg: #0A0A0F;              /* Dark background with 26px radial dot-grid */
--color-card: #13131A;            /* Card container background */
--color-card-inner: #1C1C26;      /* Nested element background */
--color-border: #26262F;          /* Subtle 1px structural border */
--color-border-strong: #3A3A46;   /* Prominent interactive border */
--color-text-main: #F4F4F5;       /* Primary text */
--color-text-muted: #A1A1AA;      /* Secondary/supporting copy */
--color-accent: #C6F432;          /* Electric Lime accent */
--color-accent-text: #0A0A0F;     /* High-contrast text on lime backgrounds */
--color-accent-violet: #8B7CF6;   /* Secondary accent in decorative illustrations */
```

---

## Project Structure

```
├── public/
│   ├── favicon.svg             # Custom lime 'AI' brand favicon
│   ├── og-image.png            # 1200x630 Open Graph social preview
│   ├── og-image.svg            # Source vector for OG preview
│   └── robots.txt              # Crawler permissions and sitemap pointer
├── src/
│   ├── components/             # Reusable Astro UI components
│   │   ├── Header.astro        # Sticky navigation & mobile menu
│   │   ├── Footer.astro        # Copyright, social, & back-to-top
│   │   └── home/               # Hero, BentoGrid, Marquee, Projects, CTA
│   ├── config/
│   │   └── site.ts             # Site-wide settings (URLs, socials, form endpoint)
│   ├── content/                # Content Collections (Markdown/MDX)
│   │   ├── projects/           # Case study files with outcome headlines
│   │   ├── experience/         # Career history milestones
│   │   ├── testimonials/       # Peer and client quotes
│   │   └── posts/              # Blog posts collection
│   ├── layouts/
│   │   └── BaseLayout.astro    # Common HTML skeleton, meta, and ViewTransitions
│   ├── pages/                  # Static routes (/, /about, /projects, /contact, /blog, /404)
│   └── styles/
│       └── global.css          # Design tokens, fonts, and animation utilities
├── PLACEHOLDERS.md             # Inventory of all [ADD: ...] markers to replace
└── astro.config.mjs            # Astro configuration with sitemap & Tailwind
```

---

## How to Edit Content

All text is separated from code and lives under `src/content/`:

### 1. Updating Your Profile & Links
Edit `src/config/site.ts`:
- Change your email: `email: "your-email@domain.com"`
- Change your LinkedIn URL: `linkedin: "https://www.linkedin.com/in/your-profile"`
- Configure your form endpoint: `formEndpoint: "https://formspree.io/f/your_form_id"`

### 2. Adding or Editing a Case Study
Create or edit a Markdown file in `src/content/projects/your-project.md`:
```yaml
---
number: "04"
outcomeHeadline: "Achieved [Outcome Headline] for [Generic Client]"
oneLiner: "One-sentence executive summary of the initiative."
category: "Delivery" # "Delivery" | "Client onboarding" | "Team leadership"
clientGeneric: "International airline in [region]"
role: "Project Manager"
team: "10 engineers, 2 QA"
tools: ["Jira", "Postman", "Slack"]
timeline: "4 months"
results:
  - metric: "35%"
    label: "Performance improvement"
  - metric: "0 Days"
    label: "Deployment delay"
featured: true
---

## Context & Background
Describe the initial business problem.

## What I Did
Detail your project management execution and alignment.

## Results & Impact
Quantify the positive outcome.

## Lessons Learned
Key takeaways from this release.
```

### 3. Adding a Blog Post
Add a Markdown file in `src/content/posts/my-new-post.md`:
```yaml
---
title: "How We Ship Calm Software Launches in Travel Tech"
description: "Key lessons learned from coordinating cross-timezone deployments."
pubDate: 2026-10-21
tags: ["Delivery", "Agile", "TravelTech"]
---

Your post content in standard Markdown...
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Check TypeScript & diagnostics
npx astro check

# 4. Build static production distribution
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Deployment to Cloudflare Pages (from GitHub)

1. Push your repository to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/):
   - Navigate to **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
   - Select your repository.
3. Configure build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment Variables**:
     - `NODE_VERSION`: `22` (or matching `22.22.0+`)
4. Click **Save and Deploy**. Cloudflare Pages will build and deploy the portfolio statically to their global edge network.
