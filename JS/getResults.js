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


function getAllResults()
{
    var rows = getResults();

//   rows['EpiNotes'] = getNotes('EpiNotes');
//   rows['DSINotes'] = getNotes('DSINotes');    
//   rows['basicReproductiveNumber'] = getBasicReproductiveNumber();
//   rows['version'] = 2;
//    return(rows);

    var notes = {EpiNotes: getNotes('EpiNotes'), DSINotes: getNotes('DSINotes')};
    var brn = getBasicReproductiveNumber();
 console.log("In getAllResults()");
    return( {rows: rows, notes: notes, basicReproductiveNumber: brn, rejected: getRejected(), version: 2} );
}


function getBasicReproductiveNumber()
{
    var t = document.getElementById('ReproductiveNumber');
    return(t.value);
}


function restoreBasicReproductiveNumber(value)
{
    var t = document.getElementById('ReproductiveNumber');
    t.value = value;
}

function restoreResults(results)
{
    if(results['version'] && results['version'] > 1) {
	console.log('restoring from version 2');
	restoreAllNotes(results['results']['notes']);
	restoreBasicReproductiveNumber(results['results']['basicReproductiveNumber']);
	restoreRejected(results['results']['rejected']);
    }
}


function getRejected()
{
    var t = document.getElementById('Rejected');
    return(t.value);
}

function restoreRejected(val)
{
    var t = document.getElementById('Rejected');
    t.value = val;
    return(t.value);
}
