
function addTerm(varName)
{
    var el= document.getElementById(varName + 'Term');
    if(el.value == '')
	return(false);
    
    console.log('adding ' + el.value + ' for ' + varName);
    insertOption(varName, el.value);
}


function deleteTerm(varName)
{
    var el= document.getElementById(varName + 'Term');
    if(el.value == '')
	return(false);    
    deleteOption(varName, el.value);    
}