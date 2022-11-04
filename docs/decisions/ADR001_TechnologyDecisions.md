
status: proposed 
date: 2022-11-01
deciders: Kavya, Susmitha, Uma, Miguel

# Technology Selection decision for HeyBlue App

## Context and Problem Statement

This ADR defines the Technology choices made to develop the HeyBlue Application.
The goal of this application is to provide a cost effective platform that helps the civilians to connect with police officers for a positive interaction experience at a scale and in a secure way. 

## Decision Drivers

* Affordability is a fundamental architectural characteristic as HeyBlue is a non-profit application and does not have a large budget.
* Ease of extensibility and integration is a core architectural characteristic as highlighted by comments in the kickoff presentation about enabling AI/ML in the future and also in the requirements about supporting redemption through municipalities for things such as fine reduction.

## Considered Options

* Opt for Open Source Technologies
* Opt for packaged software.

## Decision Outcome

Chosen option: "Opt for Open Source Technologies, because we are developing a Charity Application where the costs should be kept as low as possible. Saving cost is our critical criteria.

## Consequences
As open source quality, evolution and support relies on the level of engagement and vibrancy of the community that surrounds them, we must ensure to take this into account with every choice we make.

## Pros and Cons of the Options

### Opt for Open Source Technologies

* Good, because opting for Open Source software enables flexibility to integrate with other technologies
* Good, because it is cost effective, stable and performant with large development community support.
* Good, because No Vendor locking
* Good, because it offers cost savings
* Bad, because of the security treats.

### Opt for packaged software.

* Good, because it offers higher service level for support with paid contracts when issues arise.
* Bad, because of higher cost.
* Bad, because higher cost due to licensing and support.



