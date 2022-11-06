# Proposed Architectural Solution

_fill in high level narrative_

## Architectural Structure

We are using C4 Architectural Diagrams with some adjustment to convey the structur of Hey Blue!, it's Systems, and drilling down from there. Traditionally the first diagram in a C4 set is _the_ System Context diagram. However, after analysis of the requirements and supplemented by the information in the kickoff we have determined that there are actually multiple systems at play here. Therefore, while traditional C4 starts at Level 1 with System Context, we start at Level 0 with Hey Blue! organizational context.

We will cover only Level 0 and Level 1 (System Contexts) in this document. Follow the relevant links to drill down further for each system.

### Level 0 - Hey Blue Organizational Context

The following Hey Blue! Context diagram depicts all users (members, organizations and Hey Blue! staff) and all systems that interact.

> Note: For simplicity in this diagram the arrows from all Systems to "Analytics and Reporting" are not shown. However, when it is analytical events in addition to operational logs/metrics/traces they are detailed in drill-downs. **All Containers in all Systems report Observability telemetry signal (Logs, Metrics, Traces) to "Analytics and Reporting"**.

![Hey Blue! Organizational Context Diagram](./Hey%20Blue!%20Context.png)

### Level 1 - [Interaction Manager](./Interaction%20Manager/README.md)

> Community, Connect, Change

This system handles the heart of the Hey Blue! experience.  
_add more to the narrative_

[![Interaction Manager System Context Diagram](./Interaction%20Manager/Interaction%20Manager%20Context.png)](./Interaction%20Manager/README.md#System-Containers)

### Level 1 - [Donation and Redemption](./Donation%20and%20Redemption/README.md)

> Incentivizing Engagement

This system handles everything related to points accounting, donation, redemption, organizational representation (e.g. storefront) and finally cash accounting for the Hey Blue affiliate business model.

[![Donation and Redemption System Context Diagram](./Donation%20and%20Redemption/Donation%20and%20Redemption%20Context.png)](./Donation%20and%20Redemption/README.md#System-Containers)

### Level 1 - [Media Management](./Social%20and%20Other%20Media/README.md)

> Use Publicity to Drive Engagement

This system handles integration with publicity channels, which includes social media and other media platforms.

[![Media Management System Context Diagram](./Social%20and%20Other%20Media/Media%20Context.png)](./Social%20and%20Other%20Media/README.md#System-Containers)

### Level 1 - [Analytics and Reporting](./Analytics%20and%20Reporting/README.md)

> Leverage your Data

This system encompasses all elements of storage, query, analysis, reporting and data services (including ML/AI) for all Hey Blue! Systems. It collects both operational data as well as analytical. It will support all of the following and more:

- Analysing and driving individual engagement
- Geographic accounting analysis to feed back to community growth
- Machine Learning and Artificial Intelligence
- Hey Blue! internal accounting per business model
- DevOps/SRE monitoring, alerting, analysis and automation
- System operational analysis to drive cost reduction

[![Analytics and Reporting](./Analytics%20and%20Reporting/Analytics%20Reporting%20Context.png)](./Analytics%20and%20Reporting/README.md#System-Containers)

## Architectural Characteristics

_move high level from main readme to here and link to ADRs_

## Design Principles

_derive from the principles ADRs and link to them_

## Architectural Styles

_call out for each system and link to individual ADRs if we have time to write them all, will at least finish the one for Interactions Manager_
