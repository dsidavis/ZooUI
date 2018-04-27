function getResults()
{
    var t = document.getElementById('resultsTable');
    var body = t.childNodes[1];
    console.log(body + " " + body.length)
    var rows = body.childNodes;
    var n = rows.length;

    var ans = [];
    for(var i = 2; i < n; i++) // skip first two elements which are the header row and then empty text.
	ans[i-2] = getResultsRow(rows[i]);

    return(ans);
}

function getResultsRow(row)
{
    var n = row.childNodes.length;
    var ans = {};
    for(var i = 0; i < VarNames.length; i++) { 
	ans[VarNames[i]] = row.childNodes[i+1].innerHTML; // skip the garbage can/delete column, hence the i + 1
    }
    return(ans);
}