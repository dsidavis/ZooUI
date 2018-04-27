function updateGlobalThreshold(obj)
{
    var els = ['country', 'year', 'virus', 'species', 'diagTest'];
    var val = obj.value;
    for(var i = 0; i < els.length; i++) {
	var s = document.getElementById(els[i] + "_slider");
	s.value = val;
    }
}


function updateThreshold(obj, id)
{
    var el = document.getElementById(id + "_options");
}