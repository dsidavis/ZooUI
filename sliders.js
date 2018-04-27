var VarNames = ['country', 'year', 'virus', 'species', 'diagTest'];

function updateGlobalThreshold(val, update)
{
    var els = VarNames;
    //    var val = obj.value;
    if(!update)
	document.getElementById("globalThreshold_slider").value = val;
    
    for(var i = 0; i < els.length; i++) {
	if(varThresholds[els[i]] == false) {
	    var s = document.getElementById(els[i] + "_slider");
	    s.value = val;
	    if(update)
		updateThreshold(false, els[i], val);
	}
    }
}

/*
  We keep a record of the threshold values set explicitly and individually on each slider and not
  just via the global threshold slider.
  When  we change an individual slider directly, we change the corresponding varThreshold value to be different from -1
*/
var varThresholds = {year: false, country: false, virus: false, species: false, diagTest: false};
var CurrentThresholds = {year: -1, country: -1, virus: -1, species: -1, diagTest: -1};

function updateThreshold(obj, id, val)
{
    var el = document.getElementById(id + "_options");
    if(obj) {
	console.log("updateThreshold " + id + " " + obj + " " + obj.value);	
	varThresholds[id] = true;
    }

    if(!val)
	val = obj.value;

    console.log("updateThreshold " + id + " " + val + " from " + CurrentThresholds[id]);
    if(CurrentThresholds[id] > val) {
	// show more items
	addNewOptions(id, ModelResults[id], [CurrentThresholds[id],  val]);
    } else {
	// hide items
	hideOptions(id, ModelResults[id], [CurrentThresholds[id],  val]);	
    }
    CurrentThresholds[id] = val;
}
