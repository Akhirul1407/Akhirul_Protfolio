---
number: "04"
outcomeHeadline: "Architected & Delivered Multi-Service B2B Travel Reservation Portal (Flight, Hotel, Visa, Tour & eSIM)"
oneLiner: "Led technical product execution and sprint orchestration for an enterprise B2B travel portal, consolidating multi-supplier flight GDS, real-time hotel inventories, visa processing, custom holiday packages, and digital eSIM provisioning into a high-velocity agent reservation system."
category: "Delivery"
clientGeneric: "Enterprise B2B Travel Reservation Solution"
role: "Technical Project Manager"
team: "10 Full-Stack Engineers, 2 QA Engineers, 1 Product Designer, 2 Solution Architects"
tools:
  - "Jira"
  - "Postman"
  - "Swagger / OpenAPI"
  - "Figma"
  - "ClickUp"
  - "Slack"
timeline: "6 Months"
results:
  - metric: "5-in-1"
    label: "Consolidated travel modules: Flight, Hotel, Visa, Tour & eSIM"
  - metric: "< 1.4s"
    label: "Optimized flight & hotel multi-supplier search latency"
  - metric: "100%"
    label: "Agent wallet ledger reconciliation accuracy with zero booking collisions"
featured: true
---

## Context & Background

Modern travel agencies and B2B aggregators struggle with fragmented operational workflows. Booking an international trip often requires bouncing across four or five disjointed portals: one for airline Global Distribution Systems (GDS/LCC), another for hotel bed banks, separate visa agency channels, offline tour operator spreadsheets, and separate roaming SIM providers.

**Inno Travel Tech** set out to build an all-in-one unified, next-generation B2B travel reservation platform engineered specifically for travel professionals. The vision was to provide travel agents with a single-pane-of-glass workspace featuring instantaneous multi-product search, instant wallet debit/credit transactions, automated markup management, and centralized voucher and invoice generation.

As Technical Project Manager, I took end-to-end ownership of delivery—translating commercial travel workflows into technical API contracts, orchestrating sprint cycles across frontend and backend squads, and ensuring seamless integration with third-party travel APIs and payment channels.

---

## Core Modules & Architecture Delivered

### 1. Flight Search & Automated Ticketing Engine
- Integrated multi-source flight GDS (Sabre, Amadeus) and low-cost carrier (LCC) APIs.
- Built smart caching and asynchronous query fan-out to compare real-time seat availability, flight segments, baggage allowances, and dynamic markup rules within milliseconds.
- Orchestrated instant PNR generation, hold-ticket lifecycles, and automated void/reissue/refund workflows.

### 2. Real-Time Hotel Inventory & Booking Engine
- Unified multiple global bed-bank suppliers into a deduplicated hotel catalog with synchronized room availability, bed types, and meal plan options.
- Solved dynamic rate updates and strict cancellation policy validations to eliminate room overbooking and rate discrepancies.
- Automated hotel booking confirmation and instant branded voucher PDF generation for travel agents.

### 3. End-to-End Visa Application & Processing Module
- Designed a structured country-wise visa requirement engine with dynamic document checklists.
- Implemented an agent applicant tracking system (ATS) enabling document upload, prerequisite validation, and automated status notifications as applications progress from submission to embassy approval.

### 4. Custom Tour & Holiday Packages
- Engineered a flexible package builder supporting pre-packaged holiday itineraries and customized bespoke group packages.
- Integrated itinerary timelines, sightseeing inclusions, transfer options, and seasonal pricing tiers with direct booking workflows.

### 5. International eSIM Roaming Connectivity
- Integrated global eSIM telecommunication APIs allowing agents to bundle digital roaming data packages directly with flight and hotel bookings.
- Automated instant QR code generation and email/SMS delivery for immediate traveler activation upon destination arrival.

### 6. B2B Agent Wallet, Ledger & Sub-Agent Management
- Developed a financial core supporting pre-funded agent wallets, bank deposit slip verification, credit limits, and real-time ledger accounting.
- Provided agent administrators with hierarchical staff access controls, customized client markups, and instant GST/tax compliant invoicing.

---

## What I Did

- **API Contract Architecture & Pre-Sprint Alignment**: Authored standardized OpenAPI/Swagger specifications between the core microservices and external travel suppliers (flight GDS, hotel APIs, and eSIM telcos), preventing data shape mismatches before development began.
- **Cross-Functional Sprint Execution**: Led 2-week Agile sprint rhythms across 10 developers, managing backlog grooming, technical spike investigations, and daily blocker removal across API and UI streams.
- **Edge-Case Matrix & Failure Recovery**: Mapped critical failure paths (e.g., flight seat sellout mid-payment, hotel rate fluctuations, payment gateway timeouts) with automated rollback and reversal logic to guarantee ledger integrity.
- **QA Automation & UAT Staging**: Directed end-to-end regression suites and sandbox integration testing with partner agencies, validating live booking journeys across all 5 modules before production rollout.
- **Stakeholder Transparency**: Provided executive burndown visibility, risk heatmaps, and milestone demos to leadership and commercial partners.

---

## Results & Impact

- **Production Deployment**: Successfully launched into enterprise production with zero critical severity (Sev-1) incidents during rollout.
- **Sub-1.5s Response Time**: Streamlined heavy multi-supplier search calls, delivering aggregate flight and hotel results in under 1.4 seconds.
- **Zero Ledger Discrepancies**: 100% financial transaction accuracy achieved across tens of thousands of test and live agent wallet transactions.
- **Cross-Sell Velocity**: Enabled B2B agents to cross-sell hotels, visas, and eSIM packages on top of air ticketing in a single unified invoice, significantly boosting average booking transaction values.
