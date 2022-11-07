# Hey-Blue

This repository will contain the artefacts produced by the "It Depends" team for the Autumn 2022 session of O'Reilly Architecture Katas. The project this sesion is to create a proposed architecture for "Hey Blue!", a system to facilitate moments of meaningful connection between police officers and members of their community.

| Architectural Characteristics | System Context |
| ----------------------------- | -------------- |

<details>
  <summary>
    Security
  </summary>
To be successful Hey Blue! must be able to maintain trust with their Civilian and Officer community members.  In this regard we must ensure the system follows Zero Trust principles, encrypts all data in motion and at rest, applies appropriate rules to the storage, access and flow of Personally Identifiable Information (PII), allows members to control visibility of and revoke their PII, and conforms to all required regulatory standards (such as GDPR).
</details>
<details>
  <summary>
    Affordability
  </summary>
Hey Blue! is a non-profit organization and does not have a large budget.  As such it is imperative to keep costs down.
</details>
<details>
  <summary>
    Usability
  </summary>
As called out in the requirements, the Civilian and Officer experience is paramount for Hey Blue!  We need to ensure we convey the value of engaging with Hey Blue!, including turning on Location Services.
</details>
<details>
  <summary>
    Elasticity
  </summary>
This characteristic is related to that of affordability, but it also stands on it's own.  Usage of Hey Blue! will be occasional per individual with some event based bursts.  Furthermore, until it grows usage geographically, there will be large periods of time where the Interactions aspects of the system will not be in use at all.  Given this, the system should be able to scale to zero in times of non-use and scale up to occasional and burst usage without issue.
</details>
<details>
  <summary>
    Evolvability
  </summary>
There are some core use cases documented in the Requirements that the system must support.  However there are also discussions of potential for the future.  This includes things like:
*  Concection to Municipalities to support redemption of points for things like fine reduction
*  Connection to 3rd party social media systems, which may evolve to different systems in the future
*  Connection to 3rd party systems for Business Catalogs, which may evolve over time
*  Support to use the operational data to feed Machine Learning and AI model, who's insights may drive further evolution of the system

The above documents some need for external interoperability alongside extensibility (and there are more examples of interoperability with things like geolocation/mapping, identity/access etc). Both of these needs are also present internally with what is expected to be a heterogenous internal architecture.

</details>
<details>
  <summary>
    Observability
  </summary>
Hey Blue! Requirements and discussion with the founder made it evident that usage of the system and also interaction related data must be available for analysis and reporting.  This includes data services that may feed into AI/ML.  For this reason, Hey Blue! must have good Observability with correlation across the typical three pillars (Logging, Metrics and Tracing) as well as the often overlooked Events.
</details>
<details>
  <summary>
    Availability
  </summary>
As noted much of Hey Blue! usage will be occasional.  If the system is not available when the community tries to interact, then we will lose users.  For this reason, availability is a core characteristic.
</details>
