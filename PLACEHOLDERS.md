# Content Placeholders Tracker

This file documents all temporary placeholders (`[ADD: ...]`) used across the portfolio. In accordance with the project's strict content policy, **no facts, metrics, client names, certifications, or testimonials were invented**.

When you are ready to update any of these with verified figures or credentials, edit the corresponding file listed below.

---

## 1. Global & Profile Configuration

| Location | Placeholder | Description | How to Update |
| :--- | :--- | :--- | :--- |
| `src/config/site.ts:30` | `contact@akhirulislam.com` | Primary contact email | Replace with your preferred contact email |
| `src/config/site.ts:31` | `https://www.linkedin.com/in/akhirul-islam` | LinkedIn profile URL | Replace with your verified LinkedIn profile |
| `src/config/site.ts:32` | `https://formspree.io/f/placeholder` | Formspree / Web3Forms endpoint | Replace with your personal Formspree form ID |

---

## 2. Home Page Metrics

| Location | Placeholder | Description |
| :--- | :--- | :--- |
| `src/components/home/BentoGrid.astro:76` | `[ADD: 98%]` | On-time milestone completion rate |
| `src/components/home/BentoGrid.astro:79` | `[ADD: On-time milestone completion rate across client releases]` | Supporting description for metric card 1 |
| `src/components/home/BentoGrid.astro:99` | `[ADD: 0]` | Scope leak or launch delay metric |
| `src/components/home/BentoGrid.astro:102` | `[ADD: Critical unmitigated scope leaks on scheduled go-lives]` | Supporting description for metric card 2 |
| `src/components/home/FeaturedProjects.astro:56, 68` | `[ADD: 42%]` | Flight latency reduction percentage |
| `src/components/home/FeaturedProjects.astro:160, 163` | `[ADD: 99.9%]`, `[ADD: 200+]` | Hotel inventory sync accuracy & endpoint volume |
| `src/components/home/FeaturedProjects.astro:218` | `[ADD: 0 Days]` | Zero-downtime cutover metric |

---

## 3. Projects & Case Studies (`src/content/projects/`)

### Case Study 01: `src/content/projects/flight-booking-engine-latency.md`
- **Headline**: `outcomeHeadline: "Reduced flight booking latency by [ADD: 42%] across multi-airline search queries"`
- **Timeline**: `timeline: "[ADD: 4 months (Q3-Q4)]"`
- **Metrics**:
  - `[ADD: 42%]` Reduction in end-to-end flight search latency
  - `[ADD: 14 Days]` Ahead of contractual delivery deadline
  - `[ADD: 99.9%]` Sprint milestone completion accuracy
- **Body Context**: `[ADD: 1.8 seconds]` shaved off median flight comparison search queries; `[ADD: 14 days]` early deployment.

### Case Study 02: `src/content/projects/hotel-inventory-distribution-sync.md`
- **Timeline**: `timeline: "[ADD: 3 months]"`
- **Metrics**:
  - `[ADD: 99.9%]` Inventory accuracy across hotel channel partners
  - `[ADD: 0]` Overbooking collisions recorded post-launch
  - `[ADD: 300+]` Property endpoints onboarded smoothly
- **Body Context**: `[ADD: 300+]` regional accommodation suppliers; `[ADD: 65%]` developer support overhead reduction.

### Case Study 03: `src/content/projects/travel-erp-migration-delivery.md`
- **Timeline**: `timeline: "[ADD: 6 months]"`
- **Metrics**:
  - `[ADD: 0 Mins]` Unplanned downtime during database cutover
  - `[ADD: 100%]` Historical reservation data migrated with integrity
  - `[ADD: 2.4x]` Finance reporting speed improvement
- **Body Context**: `[ADD: 500,000+]` past reservation records migrated with financial audit integrity.

---

## 4. Experience & Career History (`src/content/experience/`)

### Current Role: `src/content/experience/innovate-solution.md`
- `[ADD: 98%]` On-time milestone delivery rate.
- `[ADD: 40%]` Reduction in post-deployment hotfixes.

### Prior Role: `src/content/experience/associate-pm.md` (Updated ✅)
- `period: "March 2025 — December 2025"`
- `role: "Project Coordinator"`
- `company: "Innovate Solution"`
- Coordinated cross-functional software development squads.

---

## 5. About Page: Certifications & Testimonials

### Certifications & Degree (`src/pages/about.astro:46-48`)
- `B.Sc. in Computer Science & Engineering (CSE)` (Already configured!)
- `[ADD: Certified ScrumMaster (CSM) or Professional Scrum Master (PSM)]`
- `[ADD: PMP or Technical Cloud Certification, e.g. AWS/Azure]`

### Testimonials (`src/content/testimonials/`)
- `engineering-lead.md`:
  - `quote: "[ADD: Real testimonial quote from an engineering lead...]"`
  - `authorGeneric: "[ADD: Engineering Lead / Principal Software Engineer]"`
  - `region: "[ADD: Bangladesh]"`
- `client-sponsor.md`:
  - `quote: "[ADD: Real testimonial quote from a client sponsor or director...]"`
  - `authorGeneric: "[ADD: Director of Digital Products, Regional OTA]"`
  - `region: "[ADD: Middle East / Southeast Asia]"`
