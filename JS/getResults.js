function getResults()
{
    var t = document.getElementById('resultsTable');
    //    var body = t.childNodes[1];
    var body = t;
    console.log(body + " " + body.length)
    var rows = body.childNodes;
    var n = rows.length;

    var ans = [];
    for(var i = 1; i < n; i++) // skip first two elements which are the header row and then empty text.
	ans[i-1] = getResultsRow(rows[i]);

    return(ans);
}

function getResultsRow(row)
{
    var n = row.childNodes.length;
    var ans = {};
    for(var i = 0; i < VarNames.length; i++) { 
	ans[VarNames[i]] = row.childNodes[i].innerHTML;  
    }
    return(ans);
}