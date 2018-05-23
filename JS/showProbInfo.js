function showProbInfo(data)
{
    var d = document.getElementById("ProbInfo");
    d.innerHTML = makeProfInfoTable(data);
}

function makeProfInfoTable(data)
{
    var tt = "<table><tr><th>Variable</th><th># items</th><th>Range of probabilities</th></tr>";
    var ids = Object.keys(data);
    var n = ids.length;
    
    for(var i = 0; i < n; i++) {
	var probs = data[ids[i]]['probs'];
	tt += "<tr><td>" + ids[i] + "</td><td>" + probs.length + "</td><td>" + getRange(probs) + "</td></tr>";
    }
    tt += "</table>";
    
    return(tt);
}


function getRange(x)
{
    var r = [100, 0];
    for(var i = 0; i < x.length ; i++) {
	r[0] = min(r[0], x[i]);
	r[1] = max(r[1], x[i]);	
    }
    return(r);
}


function addVarTooltips(data)
{
    var ids = Object.keys(data);
    var n = ids.length;
    for(var i = 0; i < n; i++) {
	var probs = data[ids[i]]['probs'];
	
	var el = document.getElementById(ids[i] + "_slider_max");
	el.innerHTML = probs[0];
	el = document.getElementById(ids[i] + "_slider_min");
	el.innerHTML = probs[probs.length - 1];

	el = document.getElementById(ids[i] + "_slider");
	el.max = min(100, probs[0]*100 + 1);		
	el.min = max(0, probs[probs.length - 1]*100 - 1);
    }
}