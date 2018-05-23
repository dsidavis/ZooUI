mkCurResults = 
function(dir = ".", stub = "empty_results.js")
{
  pdfs = list.files(dir, recursive = TRUE, full = TRUE, pattern = "pdf$")
  dirs = dirname(pdfs)
  file.copy(stub, file.path(dirs, "currentResults.js"))
}




mkUISpecific =
function(dir, ui = "ui.html", pdfs = list.files(dir, recursive = TRUE, full = TRUE, pattern = "pdf$"))
{

}
