status: accepted  
date: 2022-11-04  
deciders: Kavya, Susmitha, Uma, Miguel, Shari

# Observability as a Core Architectural Characteristic

Observability is the degree to which you can measure a system's internal state based on it's operational outputs.

Generally Observability is seen as havig three pillars of signal, Logs, Metrics and Traces, as well as having Context to correlate between them. In Hey Blue! we will also include persisted Events under the umbrella of Observability

## Context and Problem Statement

Hey Blue! Requirements and discussion with the founder made it evident that usage of the system and also interaction related data must be available for analysis and reporting. This includes data services that may feed into AI/ML. For this reason, Hey Blue! must have good Observability with correlation across the typical three pillars (Logging, Metrics and Tracing) as well as the often overlooked Events.

## Decision Drivers

From requirements and kickoff:

- Back-end processing, reporting and analytics that tracks site activity and interactions
- Analytics that aggregates Hey Blue! operational data with other public data to build resports to illustrate impact of Hey Blue! in the community
- Tracking engagement - **hard requirement**.
- A way to track how points are used for each member (Civilian, Officer, Business, Municipality)
- Civilians members must be able to see how many connections each Officer has made - **hard requirement**
- Track all participation by Zip Code - **hard requirement**
- Data must be available to drive ML/AI

Related to other Architectural Characteristis:

- Fitness functions of Security requires good Observability
- Fitness functions of Affordability requirees good Observability
- Fitness functions of Usability requires good Observability
- Fitness functions of Elasticity requires good Observability
- Fitness functions of Evolvability requires good Observability (determining afferent and efferent coupling is both static and dymanic, i.e. fed by operational data, this can be derived from Tracing)

Related to Architectural Style:

- Architectural styles with the following characteristics become more difficult to understand (regarding flow), to analyse, to debug and support. If a style is selected that falls into one of these categories, then good observability with cohesive single-pane-of-glass dashboards and good downstream automation helps to alleviate this.
  -- Highly distributed systems
  -- High degree of Architectural Quanta
  -- High level of Abstractness

## Decision Outcome

Because of the documented problem statement and drivers, Observability is a core characteristic of Hey Blue!

### Consequences

- Platform, tool and technology selection must take ease of implementation for Observability into account (including taking into account existing probes, auto-instrumentation and the need for manual instrumentation)
- Truly cross-functional teams must be formed so that analytics dashboards built can satisfy the needs of development, operations, support, product and management.
- To satisfy all the needs of Observability in Hey Blue!, delivery teams must have a broad skillset including usability/user experience, performance and health testing/monitoring, product management, systems level thinking, data analytics and visualization.

## Fitness Functions

- For requirements driven drivers, automated functional tests that verify logs/merics/traces are captures as expected for given use cases
- For associated architectural characteristics drivers, capability to write and automate the required fitness functions serves as verification
- Related to the elements noted under architectural styles, the trend of SRE/Incident metrics such as the following can serve as a proxy
  -- Mean time to Detect
  -- Mean time to Acknowledge
  -- Mean time to Analysis (includes Triage/Isolate/Diagnose)

## Pros and Cons of the Options

- Good, because good Observability enables so many other business and technical scenarios.
- Good, because it reduces risk in Architectural Styles with particular types of weakness.
- Good, because Observability and it's application is a hot topic and can help attract talent.
- Bad, because requires broad levels of understanding that may be difficul to find
- Bad, because areas that don't already offer probes or auto-instrumentation will require more development effort to enable.
