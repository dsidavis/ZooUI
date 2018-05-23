function makeURL(paper)
{
    return("http://localhost/cgi-bin/paperResults");

}

function SubmitResults(data, URL) {

    var xhr = new XMLHttpRequest();
    xhr.open("POST", URL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
	value: value
    }));
}