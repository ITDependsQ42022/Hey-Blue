status: accepted  
date: 2022-11-04  
deciders: Kavya, Susmitha, Uma, Miguel, Shari

# Security as a Core Architectural Characteristic

Security is the degree to which a system restricts access to sensitive information or
functionality.

## Context and Problem Statement

To be successful Hey Blue! must be able to maintain trust with their Civilian and Officer community members. For Officers the drivers are privacy and safety (in particular as it relates to live location data). For Civilians the drivers are privacy, safety and data ownership.

## Decision Drivers

- Trust - While not called out explicitly in requirements, it is necessary to have ongoing engagement. The trust is built on keeping data secure (encryted) and controlling access both by members and within the system
- Regulatory - The system must conform to all required regulatory standards, such as GDPR.

The following decision drivers are directly derived from the requirements and kickoff artefacts from Hey Blue!

### Officers

- Safety - Officers need to be able to turn off location services
- Safety - Officers need to have their location services automatically turn off after 15 minutes of activity.
- Safety/Privacy - Must be able to have an interaction without being located.
- Privacy - Officers need to be able to hide their profiles

### Civilians

- Safety - Civilians may not be located by Officers
- Safety - We must take into consideration what data Civilians would expect to be transient
- Privacy - Civilians need to be able to hide their profiles
- Safety/Privacy - Must be able to have an interaction without being located.
- Data Ownership - App must consider what data is stored and is transient

## Decision Outcome

Because of the documented problem statement and drivers, security is a core characteristic of Hey Blue!

### Consequences

Hey Blue! the system must:

- Follow Zero Trust principles for all member actions
- Encrypt all data in transit and at rest
- Compartmentalize the CRUD of Personally Identifiable Information (PII)
- Analyze egress from PII compartmentalized container to avoid leaking PII across container boundaries
- Allow members to control visibility of and revoke their PII
- Conform to all required regulatory standards (such as GDPR).

## Fitness Functions

All mention of automated tests and static analysis mentioned below includes the assumption that they will be run as part of all CI/CD pipelines.

### Zero Trust

Automated tests will be written for positive and negative case verifying behavior on all authorized user actions.

### Encryption

Configuration as Code will be preferred to configuration via UI and Wizards. This will support using static analysis tools and/or writing automated tests that verify all connections are over secure transport and that all storage is encrypted.

### Direct access to PII

Configuration as Code will be used and run through static analysis to ensure only the appropriate containers can connect to stores with PII.

### Cross container communication of PII

Static analysis will be run against cross-container communication contracts to ensure PII fields are not included.
This includes Observability Signal egress, which can contain arbitrary data in attributes. In this case static analysis will be run against code to check for instrumentation that writes PII and additionally processors will be run in Telemetry to identify and redact potential PII prior to egress, and also alert on it.

Finally, automated end-to-end system tests will be written covering all core flows beginning with registration. Test PII data used in registration will be checke for after each scenario in logs, metrics, traces, events and other containers stores. Finding the test PII Data outside the compartmentalized store fails the fitness function.

### Visibility and Storage of Data

Automated tests will be written that verify the functionality of showing/hiding/deleting profiles.

### Regulatory Standards

Automated tests will be written that verify conformance to GDPR. If additional regulatory requirements are identified, automated tests will also be written to verify those.
