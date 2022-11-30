status: accepted  
date: 2022-11-28  
deciders: Uma, Miguel, Shari, Prashant, Susmitha

# Data storage

## Context and Problem Statement

We must ensure a well scalable/elastic highly available data storage system is used with the architectural style chosen as "Event driven Serverless" For Hey Blue!. 
To be able to read and write the data effeciently for analytics and reporting
to support referential integrity for profile managements

## Decision Drivers

* ability to aggregate analytical data to automatically update local media. 
* ability to create aggregated comprehensive reports to show the impact on community
* have consistent and accurate profile management for different actors in the software system.
* store data like social media details within Hey Blue! app

## Decision Outcome
There are multiple options based on different context of software systems we have. 
For analytics and reporting, columnar based database is recommended as it can support effecient read/write of the data for reporting honouring availability and partition tolerance of CAP Theorem.
For media manager, NoSQL is recommended as the is transient honorouring consistency and partition tolerance of CAP Theorem. 
For Profile management/Interaction manager, Donation and Redemption referential storage database is recommended giving primary importance to referential integrity, accurancy and consistency of data. Honouring Consistency and availability of CAP Theorem. 

### Consequences

* Good, because the importance is given to the kind of data, speed and effeciency by enabling multiple data store systems.
* Bad, because it may not be cost effective.
* Good, because seperation of concerns are very clear and well scoped.
* Bad, because it requires a good understanding of variety of databases.


## Validation

The data storage choices were extensively reviewed in It Depends team. With variety of exerience in the team, we decided to go for a storage which facilitates partitioning, consistency and effeciency. 

