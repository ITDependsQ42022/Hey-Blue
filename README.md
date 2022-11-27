# Hey-Blue

This repository will contain the artefacts produced by the "It Depends" team for the Autumn 2022 session of O'Reilly Architecture Katas. The project this season is to create a proposed architecture for "Hey Blue!", a system to facilitate moments of meaningful connection between police officers and members of their community.

## Table of Contents
  * [About ItDepends](#about-itdepends)
  * [Goal](#goal)
  * [Requirements](#requirements)
     * [Architectural Vision](#vision)
     * [Domain Analysis Map](#domain-analysis-map)
* [Architecture Decisions](#solution)
     1. [Architectural Characteristics](#a-characteristics)
	 2. [Architectural Styles](#a-styles)
	 3. [Functional ADRs](#adrs)
* [Solution](#solution)
     1. [Interaction Manager](#interaction-manager)
     2. [Donation and Redemption](#donation-redemption)
     3. [Analytics and Reporting](#analytics-reporting)
     4. [Media Manager](#media-manager)
* [References](#references)

<a name="about-itdepends"></a>
## About ItDepends

We are minds of software engineers and architects who have come together across three continents to work collaberatively and produce this proposed architecture.

- Shari Lines
- Miguel Gasca
- Kavya Shivakumar
- Prashant Jasani
- Susmita Kunishetty
- Uma Kapoor

<a name="goal"></a>
## Goal
To design a feasible mobile/web solution which helps community by enabling citizens and police officers to connect and earn points which can be redeemed in charities or retail store. 

<a name="requirements"></a>
## [Requirements](Requirements)

The directory linked to contains all artefacts related to functional and non-functional requiremens, as well as user story diagrams derived from the 4 processes documented in the original requirements.

- [Requirements and Goals](Requirements/Requirements_And_Goals.md)
- [Non Functional Requirements](Requirements/Non_Functional_Requirements.md)
- [User Stories](Requirements/UserStories)

<a name="vision"></a>
### [Architectural Vision](Vision%20and%20Context)

- [Vision](Vision%20and%20Context/context%20and%20vision.jpg) is an abstract diagram illustrating the overall vision of Hey Blue!.
- [Evolutionary Considerations](Vision%20and%20Context/Evolutionary%20Considerations.md) takes note of potential directions of evoluion of Hey Blue! regarding Usability and scope of positive interactions.
- [Volummetric Analysis](Vision%20and%20Context/Volumetric.md) has some napkin calculations feeding into throughput and scale requirements of Hey Blue!

<a name="domain-analysis-map"></a>
### Domain Analysis Map
This is a domain model that fed further into our analysis. We hae used different colors to denote areas of closer conceptual relation. 
Note: The shapes don't necessarily imply services/actions and the lines don't necessarily imply dependencies/calls/messages/events. This ismeant to be a starting point for decomposition.
   - Interactions is larger, red and in the middle because it is the core of the system. 
   - All Civilian/Officer core domain areas are orange. 
   - All retail business areas are green. 
   - All charity areas are blue. 
   - All data/reporting/analytics is purple.
   - Monetary domain concepts in yellow.(i.e. how does HeyBlue make money and how do they apportion part of this to go back to community building).
   - Grey is 3rd party and white is cross-cutting.

 ![Domain Analysis Map](https://user-images.githubusercontent.com/12292677/199355846-b5cb2522-c911-4d1f-b6f4-a14d25d30ac5.jpg)

<a name="adrs"></a>
### We have categorised our decision records in to Functional and Non Functional
 - [Non Functional Decisions Records](Non%20Functional%20Decision%20Records/README.md)
      This contains all recorded decisions made during our process. Starting with the [first one](./docs/decisions/0000-use-markdown-any-decision-records.md) to adopt MADR format and guidelines.

     - [Design principles](Non%20Functional%20Decision%20Records/principles/)
     - [Architectural Characteristics](Non%20Functional%20Decision%20Records/characteristics/)
     - [Structural Decisions](Non%20Functional%20Decision%20Records/structure/) including Architectural Style ADR

 - Functional Decisions Records
    - [Security Compliance](Functional%20Decision%20Records/ADR-IM/ADR-011%20We%20will%20store%20minimal%20PII.md)
    - [UI Design Model](Functional%20Decision%20Records/ADR-IM/ADR-012%20Adopt%20UI%20design%20pattern%20MVVM.md)
    - [Provide radar for local area](Functional%20Decision%20Records/ADR-IM/ADR-013%20Provide%20radar%20for%20local%20area.md)
    - [protect officer location](Functional%20Decision%20Records/ADR-IM/ADR-014%20Provide%20design%20option%20to%20protect%20officer%20location.md)
    - [Retail store and Municipality](Functional%20Decision%20Records/ADR-015-hosting-retail-stores-and-municipality.md)

<a name="a-characteristics"></a>
## Architectural Characteristics

We have identified core architectural characteristics into this worksheet based on [Architecture Characteristics Worksheet](https://www.developertoarchitect.com/downloads/architecture-characteristics-worksheet.pdf) 

![ArchitecturalCharacteristics](Non%20Functional%20Decision%20Records/characteristics/ArchitecturalCharecteristics.PNG)

<a name="a-styles"></a>
## Architectural Styles

We built a worksheet based off of the one found at Developer to Architect Styles Worksheet. We considered all styles listed there except for Layered (it was least well suited from the list and has poor domain to architecture isomorphism). We added to the list Serverless and also a hybrid Event-Based-Serverless. The results of our analysis with a table constrained to our core characteristics is as follows:  
(Detailed explaination in [0011 Architectural Styles](Non%20Functional%20Decision%20Records/structure/0011-architectural-style.md))

![StyleToCharacteristicAnalysis](Non%20Functional%20Decision%20Records/structure/ArchitecturalStyleCharacteristicComparisons.png)

<a name="solution"></a>
## [Proposed Architecture](Solution/README.md)

We have logically seperated our perspective of the architecture into 4 categories. 
  <a name="interaction-manager"></a>
   * [Interaction Manager](Solution/Interaction%20Manager/README.md) : 
     Responsible to manage Civilian and Citizen registration and their potential interactions with each other by faciliting proximity detection, interfacing with social media and analytics.
  <a name="donation-redemption"></a>
  * [Donation and Redemption](Solution/Donation%20and%20Redemption/README.md) : Responsible to manage and administer Business and charities' relations along with point system and redemptions.
   <a name="analytics-reporting"></a>
   * [Analytics and Reporting](Solution/Analytics%20and%20Reporting/README.md) : Responsible for analytics and reporting and operational data management
  <a name="media-manager"></a>
  * [Media Manager](Solution/Media%20Manager/README.md) : Responsible for Social media management

Each of these categories contain the following
   * Context Diagram
   * Container Diagram
   * Sequence Diagram/Data Model

This is how we envisage connecting the dots top down/bottom up architecture

![connecting-the-dots](https://user-images.githubusercontent.com/17231761/204140110-c1eee62d-703a-4d57-8cbf-324a6dc39cfd.png)



<a name="references"></a>
## [References](Templates)
We have maintained templates for 
  * C4, 
  * Draw.io Stencils 
  * MADR3.0 template
