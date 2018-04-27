
function addResult()
{
    var sels = {};

    var n = 0, i;
    for(i = 0; i < VarNames.length; i++) {
	var v = VarNames[i];
	var sel = document.getElementById(v + "_options");

	var tmp = getSelectedElements(sel);
	n = tmp.length > n ? tmp.length : n;
	console.log("max = " + n);
	sels[v] = tmp;
    }

    insertResult(sels, n);
}

function getSelectedElements(obj)
{
    var k = obj.childNodes; // children()
    var ans = [];
    for(var i = 0; i < k.length; i++) {
	if(k[i].selected)
	    ans.push(k[i].value);
    }
    return(ans);
}


var RowNum = 1;

function insertResult(vals, n)
{
    var table = document.getElementById("resultsTable");
    table = table.childNodes[1]; // tbody

    // assume the varnames are arranged in order of result table
    // Create a new tr
    //    Fill in each column.
    console.log("creating " + n + " <tr>s with " + VarNames.length );
    for(var j = 0; j < n ; j++) {
	var tr = document.createElement("tr");
	tr.id = "RowNum_" + RowNum;
	RowNum = RowNum + 1;

	var td = document.createElement("td");	
	td.innerHTML = '<img src=trashCan.jpg width=32 height=32 onclick=deleteRow("' +  tr.id + '")></img>';
	tr.appendChild(td);
	
	for(var i = 0; i < VarNames.length; i++) {
	    var v = VarNames[i];
	    var pos = min(j, vals[v].length - 1);
	    td = document.createElement("td");
	    td.innerHTML = vals[v][pos];
	    tr.appendChild(td);
	}
	table.appendChild(tr);
    }
}

function min(a, b)
{
    return(a < b ? a : b);
}


function deleteRow(id)
{
    var obj = document.getElementById(id);
    obj.parentNode.removeChild(obj);
}