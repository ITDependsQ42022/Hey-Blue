status: accepted
date: 2022-11-04
deciders: Kavya, Susmitha, Uma, Miguel, Shari

# Open Source the Hey Blue! Project

## Context and Problem Statement

We must at all points consider ways to reduce cost and increase engagement.

## Decision Drivers

- Hey Blue! is a non-profit organization and does not have a large budget. As such it is imperative to keep costs down and propose a cost-effective architecture and solution. We codify this in the core architectural characteristic of [Affordability](../characteristics/0004-affordability.md).

- Furthermore, the success of Hey Blue! the platform is dependent on a vibrant and engaged community. This is called out directly in the requirements and also codified in the architectural characteristic of [Usability](../characteristics/0005-usability.md).

## Considered Options

- Open Source Hey Blue!
- Keep Hey Blue! closed source

## Decision Outcome

Given the above problem statement, the decision is to open source Hey Blue! itself. This will directly contribute to both Affordability and improved Usability/Engagement

### Consequences

- What parts of Hey Blue! to open source needs to be considered. If the areas to open source are to be constrained, then a superseding ADR will be opened to specify what will and will not be open sourced.
- An engagement model for outside contributors must be defined and enforced. This will take some time upfront and will require work to moderate on an ongoing basis. It is possible that this may require a dedicated Developer Advocate depending on what all is open-sourced and the degree of engagement.
- Documentation for onboarding developers must be of higher quality as there will be contributors that don't have the same 1:1 onboarding experience that internal developers do.

## Pros and Cons of the Options

### Open Source Hey Blue!

- Good, because Hey Blue! receives contributions from community members. This will decrease overall cost of delivery.
- Good, because more eyes on delivery produces a higher quality product
- Good, because community contributors will likely be more engaged with the system
- Good, because communiy contributors being more engaged with the system will likely result in a more usable system
- Neutral, because more work to support community contributors is offset by the units of work they produce
- Neutral, because as a non-profit Hey Blue! is not generally concerned with exposing competetive-advantage intellectual property
- Bad, because open-source software is more transparent regarding vulnerabilities. Consider automated tooling to assist with detection of vulnerable dependencies and coding patterns
- Bad, because community contributors are likely not as focused on secure coding as they are producing features. Mitigate through aforementioned tools and also diligent PR review by internal developers with an eye on security.

### Keep Hey Blue! Closed Source

- Good, because Hey Blue! maintains full controls over aspects such as security
- Neutral, because more time is required of internal developers to deliver features, whereas less time is spent on onboarding and supporting developers
- Neutral, because as a non-profit Hey Blue! is not generally concerned with exposing competetive-advantage intellectual property
- Bad, because less eyes means less diversity of opinion contributing to quality
