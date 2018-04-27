# TODO Zoonotics UI

1. Add error checking to ensure one item is selected in each variable
  + or shall we allow an empty value?
  
1. When change global slider, ensure all the relevant values get updated.
    + other sliders
	+ contents of select options

1. Text items to enter new values (that we missed)
  + completion to ensure easy and correct values
     + See completion.html.
     + jquery
	 + avoid putting text below button.
  
1. Show scrollbars on variables with more options than appear to inform viewer there are more.

1. Put tooltip on the variable name to indicate probability range and number of items

1. Show the ranges of the probabilities on the sliders.
    + let them display as 0 to 1 but put ticks showing actual range limits.

1. [done] Put the probability ranges and number of items in a box.
   + Put in the data.js

1. Show the value of the slider (perhaps in the variable name text above it)

# CGI/Submission

+ Link to next PDF

+ Preserve threshold settings across paper.

# R

+ Generate the data.js for each paper.

# Low

+ tooltips summarizing number of items and probability range

+ 


# Done

+ [done] Connect sliders to update display of items in select menus.
  + [done] set varThresholds for slider if user moves it directly.
  + [done] global slider updates others.


+ [done] Encoding on data.js
   + Use charset="UTF-8" in the <script>
   
+ [done] Display document info.   

+ [done] Handle links to PDFs with spaces in the file name.   
   + No problem. Had the wrong spelling of Turell-2003.pdf
   
+ [done] Add results to table.
   + And allow delete.

+. [done] When set initial threshold, update all sliders.

1. [done] Change slider value - change display of items.
