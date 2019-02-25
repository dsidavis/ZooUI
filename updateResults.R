library(RJSONIO)
library(XML)

if(FALSE) {
rs = list.files(recursive = TRUE, pattern = "currentResults.js$")
i = file.info(rs)
up = rs[i[, "size"] != 59]

file.copy(up, gsub("\\.js$", "_v1.js", up))


us = lapply(up, updateResults)
mapply(updateFile, us, up)
}

updateResults =
function(file, val = readJS(file))
{
 r = val$results
 r = lapply(r, function(x) { x[c("Prevalence", "Deaths", "Morbidity", "Reservoir")] = c(rep("/", 3), ""); x})
 val$results = list(rows = r, notes = list(EpiNotes = character(), DSINotes = character()), basicReproductiveNumber = "", version = 2)

 val$html = gsub("<td><img src=", "<td>/</td><td>/</td><td>/</td><td></td><td><img src=", val$html)

 val$html = unname(sapply(val$html, updateXMLId))

 val$sliderThresholds = structure(list(), names = character())
 val$version = 2
 val
}

updateXMLId =
function(txt, html = htmlParse(txt))
{
  
  id = paste(c("", xpathSApply(html, "//tr/td", xmlValue)), collapse = "!!!")
  tr = getNodeSet(html, "//tr")[[1]]
  xmlAttrs(tr) = c("id" = id)
  paste0("\n", saveXML(tr))
}

readJS =
function(f)
{
    fromJSON(gsub(";$", "", readLines(up[1])[-1]))
}

updateFile =
function(val, f) 
{
   cat("var currentResults = \n", toJSON(val), ";", file = f)
}