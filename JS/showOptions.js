function showAllOptions(data, threshold)
{
    var varNames = Object.keys(data);
    if(threshold > 1)
	threshold = threshold/100;
    
    // console.log(varNames + " " + varNames.length);
    for(var i = 0; i < varNames.length; i++) {
	var v = varNames[i];
	// alert( data[v] );
	console.log("adding options for " + v + " " + data[v]);
	addOptions(v, data[v], threshold);
    }

}

function addOptions(to, options, threshold)
{
    var n = options['values'].length;
    var sel = document.getElementById(to + "_options");
    console.log("[addOptions] " + to + " "  + n + " " + options['values']);
    CurrentThresholds[to] = threshold;

    for(var i = 0; i < n; i++) {
	if(options['probs'][i] < threshold) {
//	    console.log("stopped after adding " + i + "items");	    
	    break;
	}

	var opt = new Option(); //document.createElement("option");
	opt.value = options['values'][i];
	opt.innerHTML = options['values'][i];
	opt.title = options['sections'][i];
//	console.log("adding " + opt.innerHTML);	
	sel.appendChild(opt);
    }
}


// consolidate the two functions below with the one above.

function addNewOptions(to, options, threshold)
{
    var n = options['values'].length;
    var probs = options['probs'];
    var values = options['values'];        
    var sel = document.getElementById(to + "_options");
    console.log("[addNewOptions] " + to + " "  + n + " " + options['values'] + " " + options['probs'] + " " + threshold);

    for(var i = 0; i < n; i++) {
	if(probs[i] >= threshold[0])  // already present.
	    continue;
	
	if(probs[i] < threshold[1]) {
//	    console.log("stopped after adding " + i + "items");	    
	    break;
	}

	var opt = new Option(); //document.createElement("option");
	opt.value = values[i];
	opt.innerHTML = values[i];
	console.log("adding " + values[i] + " " + probs[i] + " " + threshold[0]);	
	sel.appendChild(opt);
    }
}


// threshold is an array with 2 elements
//  and the first is < second
function hideOptions(to, options, threshold)
{
    var n = options['values'].length;
    var probs = options['probs'];
    var sel = document.getElementById(to + "_options");
    console.log("[hideOptions] " + to + " "  + n + " " + options['values'] + " " + options['probs'] + " " + threshold);

    var kids = sel.childNodes;
    console.log("kids: " + kids.length);
    
    // descending from higher probs to lower
    for(var i = n-1; i >= 0; i--) {
	if(probs[i] >= threshold[1]) 
	    break;


	if(probs[i] < threshold[0]) {
//	    console.log("stopped after adding " + i + "items");	    
	    continue;
	}
	console.log("removing option " + kids[i] + " @ " + i);	    	
	sel.removeChild(kids[i]);	

    }
}