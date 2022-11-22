status: accepted  
date: 2022-11-04  
deciders: Kavya, Susmitha, Uma, Miguel, Shari

# Usability as a Core Architectural Characteristic

Usability in our case is not only about user experience, such as simplicity of use. It is also about creating a desire within the members to want to use the system to it's full extent.

## Context and Problem Statement

As called out in the requirements, the Civilian and Officer experience is paramount for Hey Blue! We need to ensure we convey the value of engaging with Hey Blue!, including turning on Location Services. Hey Blue! is nothing without engagement, and Usability feeds into improving engagement. Members must engage fully through repeated redemption repeatedly for Hey Blue!'s initial business model to show value.

## Decision Drivers

- Repeat engagement from interaction through redemption is required by business model
- Usability directly feeds engagement

The following decision drivers are directly derived from the requirements and kickoff artefacts from Hey Blue!

- Incentivization of interaction
- Ease of use is a hard requirement
- Tracking engagement is a hard requirement
- The app should encourage members to redeem or donate points
- An intrinsic reward system is a hard requirement
- The system should offer members maximum value of logging in and turning on location services

## Decision Outcome

Because of the documented problem statement and drivers, usability is a core characteristic of Hey Blue!

### Consequences

- The user interface must have good basic responsiveness.
- User appreciation of intrinsic rewards should be observable
- User engagement must be observable at all levels and throughout the member journey. Some of the types of metrics that must be collected include but are not limite to:
  -- Membership Growth/Reduction
  -- Frequency and Length of Location Enablement
  -- Activities per Session (can be search, browse shop/charity, interaction, social media, etc.)
  -- Top Activity Exits - i.e. completion and if not what screens do members leave an activity on
  -- Time Spent per Activity
  -- Conversion/Abandonment - here this includes both follow through on Interactions and also Redemption/Donation after browsing.
- Engagement must be analysed and campaigns built off analysis to improve engagement where it doesn't meet evolving goals

## Fitness Functions

- Use Observability Data and automated tests to check general UX responsiveness thresholds. e.g. users are known to drop off if page loads reach 2-3 seconds.
- Member Engagement monitoring will be built on top of system Observability signals. Fitness functions will be built based on both trends and thresholds. However the specific metrics who's trends will be followed and specific thresholds set must be configurable and dynamic based on current campaigns to increase engagement.
- Optional in-app surveys and other forms of gathering direct feedback can be used in addition to observability signals to help guide campaigns
