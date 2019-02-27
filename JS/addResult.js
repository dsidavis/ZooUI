var NeedToSubmit = false;


function addResult()
{
    var sels = {};

    var n = 0, i;
    // following 3 vars are for giving a warning if multiple variables have multiple items selected.
    var msg = "";
    var numMultiSelect = 0;
    var idx = -1;
    for(i = 0; i < VarNames.length; i++) {
	var v = VarNames[i];
	var sel;

	sel = document.getElementById(v);
	if(sel != null) {
	    sels[v] = [sel.value];
	    console.log("variable " + v + " " + sels[v]);	    
	    continue;	    
	} else 
   	    sel = document.getElementById(v + "_options");

	if(sel == null) {

	    sel_n = document.getElementById(v + "_numerator");
	    var val = sel_n.value;
	    if(! val.includes('/') ) {
		sel_d = document.getElementById(v + "_denominator");
		val = sel_n.value + "/" + sel_d.value;
	    }
	    sels[v] = val;
	    console.log("variable " + v + " " + sels[v]);	    
	    continue;
	}
	

	var tmp = getSelectedElements(sel);
	
	if(tmp.length >= n && tmp.length > 1) {
	    numMultiSelect++;
	    msg += " " + VarNames[i];
	}
	if(tmp.length > n)
	    idx = i;
	n = tmp.length > n ? tmp.length : n;

	console.log("max = " + n);
	sels[v] = tmp;
    }

    if(n <=0 ) {
	alert("You have no selections in any of the variables. Cannot add a row.");
	return(false);
    }

    if(numMultiSelect > 1) {
	alert(numMultiSelect + " variables had multiple selected items ("+ msg + "). Only using the multiple values from " + VarNames[idx] + " and the first selected value from the others.");
    }
    
    console.log("primary variable: " + idx + " " + VarNames[idx]);
    insertResult(sels, n, false, idx);
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

function getRowIds() {
    return(RowIds);
}

function setRowIds(ids) {
    RowIds = ids;
}

function insertResult(vals, n, manual, primaryIndex = 0)
{
    var table = document.getElementById("resultsTable");
// now uising an explicit tbody and that is what resultsTable gives us.
//    table = table.childNodes[1]; // tbody

//    console.log("insertResult: " + vals + " " + Object.keys(vals) + " " + VarNames);
    // assume the varnames are arranged in order of result table
    // Create a new tr
    //    Fill in each column.
//  console.log("creating " + n + " <tr>s with " + VarNames.length + " columns");
    for(var j = 0; j < n ; j++) {
	var tr = document.createElement("tr"), td;
	if(manual)
           tr.className = "manual";

	var uid = "";
	for(var i = 0; i < VarNames.length; i++) {
	    var v = VarNames[i];
//   console.log(v + " -> " + vals[v] + " " + vals[v].length);
	    var pos;
	    if(i == primaryIndex)
		pos = min(j, vals[v].length - 1);
	    else 
		pos = vals[v].length > 0 ? 0 : -1;
	    
	    var val = pos > -1 ? vals[v][pos] : "(none)";
	    if (typeof vals[v]  == "string") {  // typeof(s) === 'string' || s instanceof String;
		// console.log("For " + v + " we have a string " + vals[v]);
		val = vals[v];
            }
	    
	    td = document.createElement("td");

	    uid = uid + "!!!" + val;
	    td.innerHTML = val;
//   console.log(v +  " => " + pos + " " + vals[v][pos] + " : " + vals[v] + "   val = " + val + "> " + td.innerHTML);
	    tr.appendChild(td);
	}



	
//	uid = uid.replace(' ', '_');
//	uid = uid.replace('and', '\&');
//	uid = uid.replace('or', '');
//	console.log("adding row " + uid + " to existing " +  RowIds)	;
	if(!(RowIds[uid])) {

	    td = document.createElement("td");	
//	    td.innerHTML = '<img src="../Icons/trashCan.jpg" width=32 height=32 onclick=deleteRow("' +  uid + '")></img>'; 
	    td.innerHTML = '<img src="../Icons/trashCan.jpg" width=32 height=32 onclick="deleteRowx(this)"></img>';
	    tr.appendChild(td);
	    
	    tr.id = uid;
	    table.appendChild(tr);
	    RowIds[uid] = true;
	} else {
	    window.status = "This row is already in the table";
	}
    }

    setNeedToSubmit(true);
}


function setNeedToSubmit(val)
{
    NeedToSubmit = val;

    var btn = document.getElementById('Submit');
    btn.style.backgroundColor = val ? 'red' : grey;
}


function checkSubmit()
{
   console.log("In checkSubmit " + NeedToSubmit);
   if(NeedToSubmit) {
      return("Changes not submitted.  Click on Finish & Submit Results or Okay to discard and leave this page.");
   } else
    return("");
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


// don't need this one anymore.
function deleteRow(id)
{
    var obj = document.getElementById(id);
    obj.parentNode.removeChild(obj);
    RowIds[id] = false;
}

function deleteRowx(obj)
{
    obj = obj.parentNode.parentNode; // img->td->tr
    obj.parentNode.removeChild(obj);
    RowIds[obj.id] = false;
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


function clearNewEntries()
{
    var i;
    for(i = 0; i < VarNames.length; i++) {
	var el = document.getElementById("new_" + VarNames[i]);
	el.value = "";
    }
}
