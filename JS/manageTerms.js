
function addTerm(varName)
{
    var el= document.getElementById(varName + 'Term');
    console.log('adding ' + el.value + ' for ' + varName);
    insertOption(varName, el.value);
}


function deleteTerm(varName)
{
    var el= document.getElementById(varName + 'Term');
    deleteOption(varName, el.value);    
}