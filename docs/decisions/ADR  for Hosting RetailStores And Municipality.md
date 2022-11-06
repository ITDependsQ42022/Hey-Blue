---
# These are optional elements. Feel free to remove any of them.
status: {proposed | rejected | accepted | deprecated | … | superseded by [ADR-0005](0005-example.md)}
date: {YYYY-MM-DD when the decision was last updated}
deciders: {list everyone involved in the decision}
consulted: {list everyone whose opinions are sought (typically subject-matter experts); and with whom there is a two-way communication}
informed: {list everyone who is kept up-to-date on progress; and with whom there is a one-way communication}
---
# Launch Retail Stores And Municipality from Hey Blue App, as external Independent Sites

## Context and Problem Statement

HeyBlue App should host Retail Store & Municipality sites with their catalogs of merchandise, so that HeyBlue Members can select Merchandise and redeem points towards purchases. Members can also visit Municipality pages within HeyBlueApp and use their points towards their fines/Penalties. What is the best way for HeyBlue App to integrate with these external Entities?

<!-- This is an optional element. Feel free to remove. -->
## Decision Drivers

* Focus on HeyBlue's Value : Create Positive Interation within the Community
* Keep the HeyBlue App Simple to Integrate and extensible
* … <!-- numbers of drivers can vary -->

## Considered Options

* Should HeyBlue delegate & launch these external sites, allowing the sites to manage the shopping and fee/penalty payments thenselves
* Should HeyBlue App own creation of StoreFront & Municaipality Pages.


## Decision Outcome

Chosen option: "HeyBlue should delegate & launch these external sites and let the sites manage the shopping and fee/penalty payments thenselves", because HeyBlue does not need to understand the Storefront's Business Model, build/maintain their pages & functionalities.


<!-- This is an optional element. Feel free to remove. -->
### Consequences

* Good, because HeyBlue App maintains it's focus of "Promote Community engagment & postive Interaction" 
* Good, because StoreFront/Municipality Products & Functionalities does not have to be understaood by HeyBlue
* Good, because it gives idependence to Storefronts/Municipalities to showcase their own products & Functionalities
* Good, because HeyBlue does not bear the cost of hosting affiliate Functionalities
* Bad, because exteral site UI's are not consistent with HeyBlue Look & Feel 
* … <!-- numbers of consequences can vary -->

## Pros and Cons of the Options

### Option 1: HeyBlue should delegate & launch these external sites

<!-- This is an optional element. Feel free to remove. -->
{https://www.perksatwork.com/login}

* Good, because Integration is Simple with delegation Model
* Bad, because Storefronts/Municipalities that dont have existing e-commerce sites may hesitate to partner with HeyBlue 
* … <!-- numbers of pros and cons can vary -->

###  Option 2: HeyBlue App should own creation of StoreFront & Municaipality Pages

{example | description | pointer to more information | …}

* Good, because it promotes ease-of-onboarding for storefronts that dont have existing e-commerce sites
* Bad, becuase of the complexity it adds to the App
* Bad, because upload/maintenance/shipping of catalogued products would have to be understood/maintained. 
* Bad, because Cost of creating/maintaining this may outweigh the value of this approach ( Not verified yet )

<!-- This is an optional element. Feel free to remove. -->
## More Information

{You might want to provide additional evidence/confidence for the decision outcome here and/or
 document the team agreement on the decision and/or
 define when this decision when and how the decision should be realized and if/when it should be re-visited and/or
 how the decision is validated.
 Links to other decisions and resources might here appear as well.}
