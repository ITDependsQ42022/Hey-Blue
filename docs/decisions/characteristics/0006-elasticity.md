status: accepted  
date: 2022-11-04  
deciders: Kavya, Susmitha, Uma, Miguel, Shari

# Elasticity as a Core Architectural Characteristic

Elasticity is the degree to which a system is able to expand/retract and respond quickly to different expected and unexpected load. This includes not-expending resources when at rest, i.e. scale to 0.

## Context and Problem Statement

This characteristic is related to that of affordability, but it also stands on it's own. Usage of Hey Blue! will be occasional per individual with some event based bursts. Furthermore, until it grows usage geographically, there will be large periods of time where the Interactions aspects of the system will not be in use at all. Given this, the system should be able to scale to zero in times of non-use and scale up to occasional and burst usage without issue.

## Decision Drivers

- Affordability
- Occassional, non-continuous use by members
- Events organized by Officers may cause bursts
- One estimate given in requirements suggests 1.2 billion interactions per year, which is not large-scale
- Scheduled compute, such as reports and accounting, will also be occasional and non-long running

## Decision Outcome

Because of the documented problem statement and drivers, elasticity is a core characteristic of Hey Blue!

### Consequences

- Architetural style must take into account Elasticity
- Architectural Style decision will require different skill sets to support Elasticity

## Fitness Functions

- Load tests that mimick various expected usage scenarios will be run to ensure the sysstem can cope.
- Stress tests that mimick theoretical outlier usage events will be run
- Observability Metrics will be used to verify zero compute at rest.

## Pros and Cons

- Good, because Elasticity supports the related characteristic of Affordability
- Good, because Elasticity is an emerging area and will draw interest of DevOps candidates
- Bad, because there may be less candidates with previous experience to draw from
- Bad, because of training cost for candidates without prior experience.
