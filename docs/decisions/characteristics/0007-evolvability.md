status: accepted
date: 2022-11-04
deciders: Kavya, Susmitha, Uma, Miguel, Shari

# Evolvability as a Core Architectural Characteristic

Evolvability is the degree to which a system is able to accommodate future changes in a controllable way, without damaging the integrity of the system.

## Context and Problem Statement

There are some core use cases documented in the Requirements that the system must support. However there are also discussions of potential for the future. This includes things like:

- Connection to Municipalities to support redemption of points for things like fine reduction (this is noted as a "now" thing, but municipalities are never mentioned as member or in use cases, so we consider this a vNext feature)
- Connection to 3rd party social media systems, which may evolve to different systems in the future
- Connection to 3rd party systems for Business Catalogs, which may evolve over time
- Support to use the operational data to feed Machine Learning and AI model, who's insights may drive further evolution of the system

The above documents some need for external interoperability alongside extensibility (and there are more examples of interoperability with things like geolocation/mapping, identity/access etc). Both of these needs are also present internally with what is expected to be a heterogenous internal architecture.

Finally, the requirement and the kickoff discussed using ad-hoc analytics and operational data feeding ML/AI to guide evolution of Hey Blue!

## Decision Drivers

- Desire to deliver in frequent, isolated quanta to support early and often feedback, also guiding the characteristic of [Usability](./0005-usability.md)
- Using analytics, ML/AI and community feedback to evolve Hey Blue!

## Decision Outcome

Because of the documented problem statement and drivers, evolvability is a core characteristic of Hey Blue!

### Consequences

Measuring and testing Evolvability is hard.

Evolvability can be seen as a meta-characteristic. It has sub-characteristics that include at least Integrity, Changeability, Stability, Extensibility, Interoperability and Testability. While it's not clear how to meaure Evolvability directly, it may be achievable through it's sub-characteristics.

_Integrity_ can be measured via fitness functions of the other core characteristics as change is made.

At the unit/component and perhaps up to the container/quanta level there are Metrics that can be used. The history here stretches back to Constantine's introduction of Coupling and Cohesion in Structured Programming. It then evolved through the Fenton and Melton method to add Afferent vs Efferent Coupling and derived metrics such as Abstractness and In*stability*. Related to these last two there is a notion of distance from ideal line and to one extreme of it (0,0) is what is colloquially called the "Zone of Pain", which is a metric to identify elements that are difficult to change. This, along with Abstractness may be used as proxy measures for **Changeability**.

While using these as proxy metrics for evolvability may be accepted at the unit, component, and maybe event container/quanta level, it's not clear if they are just as applicable at the container/quanta boundaries. Assuming so introduces some level of risk about being wrong.

_Extensibility_ and _Interoperability_ can be measured by the ratio of change required in the Container boundaries/contracts to enable extension or interop.

Measuring and validating _Testability_ is deferred.

## Fitness Functions

- The fitness of the system relative to evolvability will be measure by it's sub-characteristics.
- Integrity will be measured and validated by successfully passing all other fitness functions
- We assume that the classical software measurements applied in Structural Programming, OOP and DDD apply as well in distributed systems where we are using Containers as units and analysing at boundaries
- System Abstractness (based on decision of Architectural Style), and cross-Container dependencies will be used to calculate proxies for Stability and Changeability.
- Degree of change at Container boundaries, such as contracts, required to introduce change will be used as proxies for Extensibility and Interoperability.

## Pros and Cons of the Options

- Good, because the desire for Hey Blue! to be able to evolve is met
- Good, because it aligns with affordability by allowing usable quanta to be delivered over time without requiring the full system to be available at once.
- Bad, because it introduces more complexity
- Bad, because measuring and testing for evolvability at the system level is difficult and costly (see Consequences and Fitness Functions)
