status: accepted
date: 2022-11-04
deciders: Kavya, Susmitha, Uma, Miguel, Shari

# Affordability as a Core Architectural Characteristic

Affordability is the degree to which architectural decisions and their related design and implementation prioritize cost over other aspects (e.g. performance, time-to-market, etc.)

## Context and Problem Statement

Hey Blue! is a non-profit organization and does not have a large budget. As such it is imperative to keep costs low.

## Decision Drivers

- Hey Blue! is a non-profit
- Business model relies on a long tail of continued engagement by all members (Civilian, Officer, Business and Charity)

## Decision Outcome

Because of the documented problem statement and drivers, affordability is a core characteristic of Hey Blue!

### Consequences

Cost to build, operate and support the system must be considered carefully with analysis performed to validate.

#### Build

- Buy vs. Build
  -- Packaged software licensing costs
  -- Open-source people cost to build

#### Operate

- Infrastructure operational cost
- People cost to run operations

#### Support

- Cost of support contracts must be considered
- On the other hand cost of hiring SMEs must be considered

## Fitness Functions

Fitness functions for affordability depend on Architectural Style decisions. Therefore documenting anything specific is deferred to and will be included in that decision. At a high level though, Observability Metrics (at all levels from platform to quanta/container to component to Activity, which may span component/container) will be used to:

- Run synthetic performance tests to determine cost scalability
- Track true costs and identify over-allocation
- Track true costs and identify negative trends
- Track true costs between quanta to identify hotspots to focus on for optimization

## Pros and Cons

- Good, because Affordablity aligns well with a non-profit business
- Bad, because more time must be spent on trade-off analysis, monitoring and optimization
- Bad, because cost analysis _between_ different options is snapshot in time with regards to sructure and doesn't take into account Architectural Evolution
- Bad, because of training cost for candidates without prior experience.
