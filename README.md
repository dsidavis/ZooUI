There are many moving parts to this, and many need to be installed in different locations.


## The Papers
+ The papers go in a directory say ZooUI_files/
+ Each paper has its own directory. Within this, we have
  + data.js
  + currentResults.js
  + PDF
  + ui.html (either a symlink or a copy of the original)

+ The subdirectories need to have permissions set so that the web server can write to them.

## CGI
+ The CGI/submit.cgi script here is installed in the relevant CGI directory of the Web server.
  + It doesn't matter where, but the JavaScript file JS/config.js needs to be informed of that
    location. Specifically the SubmitURL field.
	
  + The installed submit.cgi script needs to have the BASE_DIR value set to the top-level directory
    in which the papers are located (see above).
	
## JavaScript
+ The JavaScript code in JS/ here needs to be copied (or symlinked) to be a sudirectory of 
  the Papers directory
  
+ Update the config.js  to reflect the location of the CGI script/SubmitURL.

## CSS
+ The CSS directory is copied or symlinked to a subdirectory of the Papers directory.


## Icons
Put the Icons directory here under Papers.

So we should have

```
     Papers directory                                CGI       
   /   |    \       \          \
 JS   CSS   Icons   Paper1  Paper2 .... PaperN
..   ui.css                     ui.html
..                              currentResults.js
                                data.js
								PaperN.pdf
```


