status: proposed
date: 2022-11-04
deciders: Kavya, Susmitha, Uma, Miguel, Shari

# Architectural Style of Hey Blue!

## Context and Problem Statement

We must ensure that any Architectural Style selected for the system as a whole, or for constituent parts, has good domain-to-architecture isomorphism and it performs well against the core architectural characteristics against which it will be measured.

## Decision Drivers

- Domain to Architecture Isomorphism
- [Security](../characteristics/0003-security.md) - non-structural
- [Affordability](../characteristics/0004-affordability.md)
- [Usability](../characteristics/0005-usability.md) - non-structural
- [Elasticity](../characteristics/0006-elasticity.md)
- [Evolvability](../characteristics/0007-evolvability.md)
- [Observability](../characteristics/0008-observability.md) - non-structural
- [Availability](../characteristics/0009-availability.md)

## Considered Options

- Microservices
- Serverless
- Event-Driven
- Event-Driven Serverless

## Decision Outcome

Chosen option: "Event-Driven Serverless", because after analysis across domain-to-architecture isomorphism and performance against (particularly structural) architectural characteristics it came out on top. Furthermore, when looking at trade-offs (captured in pros/cons) there were no critical cons to discunt it.

### Consequences

- We are well aligned with domain-to-architecture isomorphism and all core architectural characteristics
- Bad, because {negative consequence, e.g., compromising one or more desired qualities, …}
- … <!-- numbers of consequences can vary -->

<!-- This is an optional element. Feel free to remove. -->

## Validation

{describe how the implementation of/compliance with the ADR is validated. E.g., by a review or an ArchUnit test}

<!-- This is an optional element. Feel free to remove. -->

## Pros and Cons of the Options

### {title of option 1}

<!-- This is an optional element. Feel free to remove. -->

{example | description | pointer to more information | …}

- Good, because {argument a}
- Good, because {argument b}
<!-- use "neutral" if the given argument weights neither for good nor bad -->
- Neutral, because {argument c}
- Bad, because {argument d}
- … <!-- numbers of pros and cons can vary -->

### {title of other option}

{example | description | pointer to more information | …}

- Good, because {argument a}
- Good, because {argument b}
- Neutral, because {argument c}
- Bad, because {argument d}
- …

<!-- This is an optional element. Feel free to remove. -->

## More Information

{You might want to provide additional evidence/confidence for the decision outcome here and/or
document the team agreement on the decision and/or
define when this decision when and how the decision should be realized and if/when it should be re-visited and/or
how the decision is validated.
Links to other decisions and resources might here appear as well.}
