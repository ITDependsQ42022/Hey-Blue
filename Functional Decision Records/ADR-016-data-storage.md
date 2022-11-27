status: accepted  
date: 2022-11-26  
deciders: Uma, Miguel, Shari

# Data storage

## Context and Problem Statement

We must ensure a well scalable/elastic highly availabledata storage system is used with the architectural style chosen as "Event driven Serverless" For Hey Blue!. 

## Considered Options

* RDBMS
* NOSQL

## Decision Outcome
NoSQL is chosen over RDBMS as elasticity, High availability is desired.

### Consequences

* Good, because it can be used for highly available scalable internet applications. (like MongoDB)
* Bad, because Bad, because it may be difficult to find staff with the experience to build


## Validation

The data storage choices were extensively reviewed in It Depends team. With variety of exerience in the team, we decided to go for a storage which facilitates partitioning (in future if needed for across regions), 
document storage capability.

