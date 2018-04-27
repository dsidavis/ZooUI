var VarNames = ['country', 'year', 'virus', 'species', 'diagTest'];

function updateGlobalThreshold(obj)
{
    var els = VarNames;
    var val = obj.value;
    for(var i = 0; i < els.length; i++) {
	if(varThresholds[els[i]] == false) {
	    var s = document.getElementById(els[i] + "_slider");
	    s.value = val;
	}
    }
}

/*
  We keep a record of the threshold values set explicitly and individually on each slider and not
  just via the global threshold slider.
  When  we change an individual slider directly, we change the corresponding varThreshold value to be different from -1
*/
var varThresholds = {year: false, country: false, virus: false, species: false, diagTest: false};

function updateThreshold(obj, id)
{
    var el = document.getElementById(id + "_options");
    if(obj) {
	// console.log("updateThreshold " + id);	
	varThresholds[id] = true;
    }
}
