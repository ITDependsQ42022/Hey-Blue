status: draft  
date: 2022-11-08
deciders: Shari

## Context and Problem Statement
The interaction management system requires a member of the community and an officer to interact.

As such the profile manager will need to identify the users as a member or an officer.  However the privacy and identification of individuals must be protected.

## Decision Drivers
Personally identifying information is sensitive and must be treated carefully for the following reasons
 * Location of police officers needs to be protected for the sake of the officer
 * Lack of police officers may encourage criminal activity and needs to be protected
 * Identify theft could be encouraged if either the community member or officer can be identified
 
As a consequence of zero trust, the information persisted and not persisted is as follows

### Persisted
 * Interactions
 * Points
 * Redemption history
 * Member profile, basics only
 * Officer profile, basics only
 
### Not persisted
 * Officer PII
 * Officer location
 * Member PII

## Decision
The decision is to not perist member or officer PII, or information required to locate police officers

## Consequences
A critical consequence is a change in requirements.  Officer locations are a requirement, however, pushing back on the requirements is advisable for the protection of the officers and discouraging criminal activities.

