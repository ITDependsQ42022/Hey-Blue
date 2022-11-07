## Assumptions :

 - **Geography:** HeyBlue app is USA Only, mainland America, excl. Hawai, etc.
 - **Number of officers :** in the USA, accounting for growth in 5 years : 700,000
 - **Number of civilians :** (highest target upto 5 % of Adult population, incl. 5 year growth) : ~10 million
 - **Days in the Year :** Actual availability (in days) of officers, for connections (excl. vacations, peak workload, etc.) : 300 days
 - **Hours in the day :** Mostly 12 hours of day. Translates to 16 real hours of activity stretching 4 time zones. : 16 hours
 - **Peak Load :** The activity can peak towards the middle of the day. If we double the capacity of the average, it will suffice for max
   throughput load projection : Double the average load.



**Connection Manager Volume**

 - 1.2 billion connections expected per year 
 - Divided by 300 days, 16 hours, 3600 seconds. 
 - Average Connections per second : 70 tps Max
 - Connections per second : 140 tps



**Notification Manager Volume**
 - Assumption : 1 out of 20 notifications of an officer availability translates to a connection.  
 - Total Notifications : 1.2 billion connections x 20 notifications 
 - Divided by 300 days, 16 hours, 3600 seconds. 
 - Average Notifications : 1400 notifications per second 
 - Max connection per second : 2800 notifications per second


**Geographic Info System Volume**

 - Each enrolled Civilian opts to be on app for 4 hours a day. 
 - Each   officer chooses to be visible 4 hours a day.  
 - The location refresh is every 5 minutes. (configurable centrally). Users can also trigger the refresh. 
 - Total population of users whose location need to be tracked every 5 minutes : 10 million civilians + 700,000 officers
 - Total Frequency of Location checks : 4 hrs divided by 5 min. : 48 times
 - Total hits for geo-location : 48 x 10,700,000 : 513.6 million times.
 - Divided by 300 days, 16 hours, 3600 seconds. 
 - Average geo-location refreshes : 30 tps 
 - Peak geo-location refreshes : 60 tps
