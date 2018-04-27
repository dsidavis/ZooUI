# TODO Zoonotics UI

1. Collect results and output as JSON.

1. Add error checking to ensure one item is selected in each variable
  + or shall we allow an empty value?

1. toggle the multiple=1 on the other selects when 2 or more items actually selected to avoid erroneously generating  too many.

1. autocompletion to ensure easy and correct values on new values text items.
     + See completion.html.
     + jquery
	 + avoid putting text below button.

1. Undo operations.

# Appearance

1. Show scrollbars on variable item select menu with more options than appear to inform viewer there are more.

1. Put tooltip on the variable name to indicate probability range and number of items
	 
1. Show the ranges of the probabilities on the sliders.
    + let them display as 0 to 1 but put ticks showing actual range limits.

1. Show the value of the slider (perhaps in the variable name text above it)

1.  Make sliders vertical?

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

1. [done] Global slider that controls all sliders initially, but after any has been set separately
     don't update that one

1. [done] When change global slider, ensure all the relevant values get updated.
    + other sliders
	+ contents of select options

1. [done] Put the probability ranges and number of items in a box.
   + Put in the data.js

1. [done] Text items to enter new values (that we missed)
