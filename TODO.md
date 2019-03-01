# TODO Zoonotics UI


#
1. [done] When add/delete a row to the table or change reproductive or rejected, then 
  change color 
  
1. [done] When they leave a page and there are changes that haven't been submitted, bring up a dialog.

# New columns

1. Collect the settings on the sliders - if manually changed?
   + [done] Put into  the results as sliderThresholds, but only the elements that were changed.
      + If not changed manually, then undefined in CurrentThresholds and JSON.stringify() drops
        these.
		
   + And restore them.  Not done yet. When we do, use the names in sliderThresholds in results
     and only identify those sliders.  Not all sliders will necessarily have an entry in this dictionary.

1. Align the add and del links in each column given the extra columns.

1. ?For manually entered results, add the numerator/denominator as separate fields or just leave as a
   text field?

1. [low] For numerator and denominator, if user enters / in the value, take this and separate
   it and put into the numerator and denominator.
   
1. [low] Check numerator smaller than denominator.   

1. [done] With new structure for results (including the notes and reproductive number presence)
     we have to restore appropriately. See ui.html and references to the variable currentResults.
   
1. [done] Restore results correctly
   + restoreNotes()
   + restoreBasicReproductiveNumber()
   + restoreAllNotes()
   + then the original rows data

1. [done] Submit any feedback notes
   1. getNotes()
   1. Restore them also. - see restoreNotes()

1. [done] Collect and submit the information from the new columns to the True Results table
   + [done] For  the primary table and 
   + [done] the Manually entered results.

1. [done] When we add a row, do we reset the prevalence, deaths, morbidity, and reservoir?
    + [done] No - should use Clear Selections to clear these and add the new columns to the things to clear.

1. [done] add the per-paper notes and option (for Basic Reproductive Number).
   1. For  notes, allow for separate notes via a + "button"
  
1. [done] add a Clear button for manually entered results


# Bugs and misc - 5 June

1. "Values not in results" forces manual entry for entire row.
   If possible, it would be nicer to be able to enter just a single data item,
   and use selections above for remainder of data.
   
   Even better would be to add an option to the list of potential matches.
   
   @mespe:  This seems like luxury/not needed immediately item. Agree?
   
1. [FIXED] @MATT Some PDFs have no data
   1. Hutchinson-2000
   1. Plyusnina-2012 
   1. Liu-2013 
   
1. Have duplicate PDF files in index, e.g., 
   1. Blitvich-2012
   1. Chinikar-2010 
   1. Champour-2016 
   1. Mostafavi-2013 
   1. Serra-Cobo-2002 
   
   @mespe: Is this for you to fix?
   
# Deployment on dsi.library.ucdavis.edu

1. Symbolic link for ui.html.

1. submit.cgi

1. CAS

1. To deploy
   1. On dsi, tar zcf ZooUI_files.tar.gz -C /data_small/Zoonotics/ZooUI_files
   1. scp this to dsi.library.ucdavis.edu
   1. On laptop/local machine, in UI/, run make to create ship.tar.gz
   1. scp ship.tar.gz to dsi.library.ucdavis.edu.

#
	
1. Add a way for user to indicate this item is wrong and why.
   + Maybe just a free form text field with a different submission script.
   
1. ? Do we need to add an alert() when adding an existing row.

1. toggle the multiple=1 on the other selects when 2 or more items actually selected to avoid
   erroneously generating too many.
   
1. [low] autocompletion to ensure easy and correct values on new values text items.
     + See completion.html.
     + jquery
	 + avoid putting text below button.

1. [low] Undo operations.
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

1. [done] Sort out the row numbers on the table when we restore the results and then add new ones.
    Need to make them unique. Otherwise can delete the wrong one.
	+ Should be okay now that we are using unique identifiers.

1. [done] Check restore RowIds from currentResults so we can't add identical rows again to ones from
    previous session.

1. [done] Use current results to build table on load.
   + Now in the html field of the currentResults.

1. [check] Send the contents of the tbody and make the thead for the results table separate.

1. [check] Add RowIds to the results we submit.
    + Not working!

1. [done] No rows to submit. See why?
    + Problem with changing to tbody in getResults() code that needed to be updated.
	
1. [done] Change "undefined" to none again.

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
