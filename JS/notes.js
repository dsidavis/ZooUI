function addFeedbackNote(to, val = "")
{
    var el = document.getElementById(to);

    var txt = document.createElement("textarea");
    txt.className = "Note";
    el.appendChild(txt);
    txt.value = val;
    
    return(txt);
}


function getNotes(from)
{
    var el = document.getElementById(from);
    var k = el.children;
    var ans = [];
    for( var i = 0; i < k.length; i++) {
	val = k[i].value
	if(val != "")
	   ans = ans.concat(val)
    }

    return(ans);
}

function restoreNotes(notes, to)
{
    for(var i = 0; i < notes.length; i++) {
	if(notes[i] != "")
   	   addFeedbackNote(to, notes[i]);
    }
}

function restoreAllNotes(data)
{
    var NoteNames = ['EpiNotes', 'DSINotes'];
    for(var i = 0; i < NoteNames.length; i++) {
	restoreNotes(data[NoteNames[i]], NoteNames[i]);
    }
}