# UI

Deliver a UI for them to validate the results we get for a paper.

Give them all five variables

Color code  some of  the variables (e.g. year) to indicate how we got the result,
e.g., in Received, in abstract, in title.


The UI has all of the results.
They specify the threshold to display

Add a query for a value for a variable.
Then show it if in our results but not displayed because threshold to high.
This may show them others. 
It would be nice for us to be able to recalibrate our threshold or model if they
identify a value below our threshold either by changing the threshold to reveal more
or by entering the value directly.



## Implemementation Plaftorm.

We could do this using
+ Shiny, 
+ HTML + JavaScript + Shiny as a backend
+ HTML + JavaScript + CGI script


+ We can have the PDFs on their machine or on a server.
(We make this CAS password protected so that we don't distribute PDFs)

+ We can upload the results for each paper 
+ to our Web server
+ via an embedded GoogleDoc.
+ save to local file via shiny running locally and then have them send us these files.





