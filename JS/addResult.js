
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

    insertResult(sels, n, false);
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

var RowIds = {};

function insertResult(vals, n, manual)
{
    var table = document.getElementById("resultsTable");
    table = table.childNodes[1]; // tbody

//    console.log("insertResult: " + vals + " " + Object.keys(vals) + " " + VarNames);
    // assume the varnames are arranged in order of result table
    // Create a new tr
    //    Fill in each column.
//  console.log("creating " + n + " <tr>s with " + VarNames.length + " columns");
    for(var j = 0; j < n ; j++) {
	var tr = document.createElement("tr");
	tr.id = "RowNum_" + RowNum;
	RowNum = RowNum + 1;
	if(manual)
           tr.className = "manual";

	var uid = "";
	for(var i = 0; i < VarNames.length; i++) {
	    var v = VarNames[i];
//   console.log(v + " -> " + vals[v] + " " + vals[v].length);
	    var pos = min(j, vals[v].length - 1);
	    td = document.createElement("td");
	    var val = pos > -1 ? vals[v][pos] : "(none)"
	    uid = uid + "!!!" + val;
	    td.innerHTML = val;
//   console.log(v +  " => " + pos + " " + vals[v][pos] + " : " + vals[v]);
	    tr.appendChild(td);
	}

	uid = uid.replace(' ', '_');
//	console.log("adding row " + uid + " to existing " +  RowIds)	;
	if(!(RowIds[uid])) {

	    var td = document.createElement("td");	
	    td.innerHTML = '<img src="../Icons/trashCan.jpg" width=32 height=32 onclick=deleteRow("' +  uid + '")></img>';
	    tr.appendChild(td);
	    
	    tr.id = uid;
	    table.appendChild(tr);
	    RowIds[uid] = true;
	}
    }
}

function rowExists(id, ids)
{
    for(var i = 0; i < ids.length; i++) {
	if(id == ids[i])
	    return(true);
    }
    return(false);
}

function min(a, b)
{
    return(a < b ? a : b);
}

function max(a, b)
{
    return(a > b ? a : b);
}


function deleteRow(id)
{
    var obj = document.getElementById(id);
    obj.parentNode.removeChild(obj);
    RowIds[id] = false;
}



function addNewResult()
{
    var n = 0, i;
    var ans = {};
    for(i = 0; i < VarNames.length; i++){
	var v = VarNames[i];
	var obj = document.getElementById("new_" + v);
	ans[v] =  [obj.value];
    }
    insertResult(ans, 1, true);
}



function showCurResults(vals)
{
    console.log('showCurResults: ' + vals);
    if(vals['html'] && vals['html'] != '') {
	var k = document.getElementById('resultsTable');
	k.innerHTML = vals['html'];
    }
}