# TODO Zoonotics UI

1. [check] Sort out the row numbers on the table when we restore the results and then add new ones.
    Need to make them unique. Otherwise can delete the wrong one.
	+ Should be okay now that we are using unique identifiers.

1. [check] Send the contents of the tbody and make the thead for the results table separate.

1. [check] Add RowIds to the results we submit.

1. Add a way for user to indicate this item is wrong and why.
   + Maybe just a free form text field with a different submission script.
   
1. [check] Use current results to build table on load.
   + Now in the html field of the currentResults.
  
1. toggle the multiple=1 on the other selects when 2 or more items actually selected to avoid
   erroneously generating too many.
   
1. autocompletion to ensure easy and correct values on new values text items.
     + See completion.html.
     + jquery
	 + avoid putting text below button.

1. Undo operations.
     + Can delete rows.

# Appearance

1. Show scrollbars on variable item select menu with more options than appear to inform viewer there are more.

1. [low] Show the value of the slider (perhaps in the variable name text above it)

1. Make sliders vertical?

# CGI/Submission

+ Link to next PDF

+ Setup apache server with CGI permissions.

+ Use CAS login

+ Create the dummy currentResults.js for each directory.
  + Code is on dsi machine as an R script.
  
+ [ok] Put the name of the directory/paper into the html/js file so can use for submission.
   + Isn't it in the docInfo? Maybe not the directory.
   + not needed as we get this in the CGI script via the HTTP_REFERER variable.
  

# R

+ Figure out which year to use - epitator or our own.

+ [fix but mostly done] Generate the data.js for each paper.
   + Matt's done this.

# Low

+ Preserve threshold settings across paper.

+ tooltips summarizing number of items and probability range
   + Already in the number of items/probability info.


# Done

1. [fixed] Some rows give uids that give a syntax error when we try to delete by clicking on the garbage
   can.
	 + It is the 11-19 and 11-21 in Lee. It is the word 'and'
     + Can't have space in the id.
	 + Used a different approach to avoid the id and use this and get the parent nodes.

1. [done] When multiple values selected in two or more variables, get cross over.

1. [done] Give warning if more than one variable has multiple selections. Currently only using the one
   with the maximum.

1. [done] How to unselect all items in a menu item - in case one is selected but none apply to current row
   being created.
   
1. [done] Fix up deleteRow() to use this and find the parent tr.

1. [check] Avoid adding a row that is already there.
   + Seems to work

1. [done] restore the results for the two tables back into the relevant tables.
   + Already only in one table.

1. [done] Mark the elements in results as to which mechanism they were created with - menu item selection
   or manually entered in table below.
    + Class on the tr

1. [done] include results from manually generated table.
   + Already there?

1. [done] Put garbage can image in place.

1. [fixed] Select 2 years, only one shows up but two rows in the resulting table.

1. [done] Add error checking to ensure one item is selected in each variable
  + [Yes] or shall we allow an empty value?


1. [not needed] Put tooltip on the variable name to indicate probability range and number of items
   + now the range is on each end of the slider.
	 
1. [done] Show the ranges of the probabilities on the sliders.
    + let them display as 0 to 1 but put ticks showing actual range limits.

1. [fixed] Change the slider for Virus. Since all 1's problem. Items disappear.

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

1. [done] Collect results and output as JSON.

1. tooltips on the choice items to indicate which sections they came from.
