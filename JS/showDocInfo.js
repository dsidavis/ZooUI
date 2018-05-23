function showDocInfo(info)
{
    var els = ['title', 'abstract', 'pdf', 'year'];
    for(var i = 0 ; i < els.length; i++) {
	var v = els[i];
	var obj = document.getElementById(v);
	obj.innerHTML = info[v];
	if(v == 'pdf') {
	    // console.log("setting pdf href to " + info[v]);
	    obj.href = info[v];
	}
    }
}