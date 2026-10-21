---
number: "03"
outcomeHeadline: "Cutover of mission-critical travel ERP completed with zero transaction interruption"
oneLiner: "Led release planning, mock rehearsals, and midnight deployment cutover for an enterprise travel operator in [region]."
category: "Team leadership"
clientGeneric: "Enterprise travel operator in [region]"
role: "Project Manager & Release Coordinator"
team: "15 engineers, 3 DevOps specialists, 4 Business Analysts"
tools:
  - "Jira"
  - "Linear"
  - "GitHub"
  - "Miro"
  - "Slack"
timeline: "[ADD: 6 months]"
results:
  - metric: "[ADD: 0 Mins]"
    label: "Unplanned downtime during database cutover"
  - metric: "[ADD: 100%]"
    label: "Historical reservation data migrated with integrity"
  - metric: "[ADD: 2.4x]"
    label: "Finance reporting speed improvement"
featured: true
---

## Context & Background

An enterprise travel operator with extensive regional booking volume was running on a legacy ERP that suffered from severe database locks during month-end invoicing. To support modern B2B travel sub-agents, the executive board mandated migrating all accounts, active bookings, and voucher generation to a modern cloud-native travel operations platform.

The primary risk: any migration failure or data corruption would immediately strand real passengers at airport check-ins and hotel desks.

## What I Did

- **Cutover Command Center & Runbook**: Authored a minute-by-minute 72-hour cutover runbook covering 140 sequential operational tasks with explicit rollback checkpoints.
- **Two Full Mock Dry Runs**: Directed two end-to-end rehearsal weekends in staging with anonymized production data, discovering and fixing 18 edge-case failure modes in advance.
- **Inter-Departmental Communication Matrix**: Bridged the gap between finance, customer operations, DevOps, and executive leadership, publishing hourly status digests throughout cutover night.
- **Go / No-Go Decision Governance**: Instituted strict objective criteria for production sign-off, ensuring no step progressed without verified data validation hashes.

## Results & Impact

- **Zero Transaction Interruption**: Shipped the new platform on schedule at 04:00 AM Sunday, with business operations resuming fully normal on Monday morning.
- **Data Integrity Preserved**: [ADD: 500,000+] past reservation records migrated with 100% financial audit accuracy.
- **High Stakeholder Confidence**: Acclaimed by client C-level sponsors as the calmest enterprise software transition in the organization's history.

## Lessons Learned

1. **Rehearsals Expose What Spreadsheets Hide**: Nothing substitutes for dry-running the exact cutover script in a realistic staging environment.
2. **Psychological Safety Prevents Bad Launches**: When team members feel safe to call out a warning or suggest pausing a step, catastrophe is avoided.
