function makeURL()
{
//    var paperDir = basename(dirname(window.location.href));
//    console.log("location - " + paperDir);
//    return("http://localhost/~duncan/cgi/submit.cgi");
    return(UIConfig.SubmitURL);

}

function getHTMLResults()
{
    return( document.getElementById('resultsTable').innerHTML );
}

function SubmitResults(data, html, rowIds, URL)
{
    if(!checkResults(data))
	return(false);
    
    console.log("results: " + JSON.stringify(data));
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", URL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onerror = function() {
	alert("Failed submitting the results. Contact Duncan");
    }
    var getSubmitResult = function getSubmitResult() {
	if(xhr.readyState == 4 && xhr.status == 200)
	    alert("finished the submit request " + xhr.responseText);
    }

    xhr.onreadystatechange = getSubmitResult;
    xhr.send(JSON.stringify({
	results: data,
	html: html,
	rowIds: rowIds
    }));
}

function checkResults(obj)
{
    if(obj.length == 0) {
	alert("no rows to submit");
	return(false);
    }
    var ids = Object.keys(obj);
    var n = -1;
    for(var i = 0; i < ids.length; i++) {
	n = max(n, obj[ids[i]].length);
    }
    if(n == -1) {
	alert("no rows to submit");
	return(false);
    }

    return(true);
}

function basename(str)
{
    var sep = "/";
    return str.substr(str.lastIndexOf(sep) + 1);
}

function dirname(str)
{
    var sep = "/";
    var ans = str.substr(0, str.lastIndexOf(sep));
    return(basename(ans));
}