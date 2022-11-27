status: accepted
date: 2022-11-08  
deciders: Shari, Miguel, Uma

# ADR-IM-013 Provide radar for local area

## Context and Problem Statement
The interaction management system requires a member of the community and an officer to interact.

As such the profile manager will need to identify the users as a member or an officer.  However the privacy and identification of individuals must be protected.

## Decision Drivers
There are a number of options for the map display as described below:

 * Show either citizens or officers 
 * Show either a map or a proximity radar


![](./radar1.png) ![](./radar2.png) ![](./radar3.png) ![](./radar4.png)                                                                                                                                                 

## Decision
The recommendation is to locate the citizens for the reason that any tracking of police officers is inadvisable.
The decision is to use a radar image over a precise map:

![](./radar2.png)

## Consequences
A consequence of the decision is a change to requirements to track citizens over police officers.

Should the officer tracking be required the recommendation is to isolate the role of a community officer additionally to or over enforcement.

