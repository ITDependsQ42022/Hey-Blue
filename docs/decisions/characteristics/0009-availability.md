status: accepted  
date: 2022-11-04  
deciders: Kavya, Susmitha, Uma, Miguel, Shari

# Availability as a Core Architectural Characteristic

Availability is a measure of the amount of uptime of a system; This is usually measured in 9's (e.g., 99.9%)

## Context and Problem Statement

Much of Hey Blue! usage will be occasional. If the system is not available when the community tries to interact, then we will lose users. For this reason, availability is a core characteristic.

## Decision Drivers

- {decision driver 1, e.g., a force, facing concern, …}
- {decision driver 2, e.g., a force, facing concern, …}
- … <!-- numbers of drivers can vary -->

## Considered Options

- Repeat engagement from interaction through redemption is required by business model
- Occassional, non-continuous use by members
- System non-availability for occasional use by member translates to high degree of unavailability perception, leading to dropped engagement

## Decision Outcome

Because of the documented problem statement and drivers, Availability is a core characteristic of Hey Blue!

### Consequences

- Decision of Architectural Style must take into account Availability
- Other structural and deployment decisions must take into account Availability

## Validation

Chaos engineering/fault injection experiments will be run regularly to verify availability in core scenarios

## Pros and Cons of the Options

- Good, because an available system will feed into the core characteristic of usability.
- Potentially bad, because (depending on oher decision) availability may be complex and costly to achieve, which is in opposition to the core characteristic of Affordability
