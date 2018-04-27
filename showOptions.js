function showAllOptions(data, threshold)
{

//    var varNames = Object.keys(data);
//    for(var i 

}
function addOptions(to, options, threshold)
{
    var n = options['values'].length;
    var sel = document.getElementById(to + "_options");
//    alert(sel + " " + sel.id);
    for(var i = 0; i < n; i++) {
	if(options['probs'][i] < threshold) {
	    console.log("stopped after adding " + i + "items");	    
	    break;
	}

	var opt = new Option(); //document.createElement("option");
	opt.value = options['values'][i];
	opt.innerHTML = options['values'][i];
	console.log("adding " + opt.innerHTML);	
	sel.appendChild(opt);
    }
}