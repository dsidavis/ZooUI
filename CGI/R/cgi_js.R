library(RJSONIO)
library(XML)

update =
function(dir)
{    
    cur = readJS(file.path(dir, 'currentResults.js'))[[1]]
    orig = readJS(file.path(dir, 'data.js'))

    xx = sprintf("<table>%s</table>", cur$html)
    doc = htmlParse(I(xx))
    tt = readHTMLTable(doc, "//table", which = 1, stringsAsFactors = FALSE)
    tt = tt[-length(tt)] # the garbage can column
    colnames(tt) =  c("country", "year", "virus", "species", "diagTest")

    orig$ModelResults = mapply( mergeNewTerms, orig$ModelResults, tt[names(orig$ModelResults)], SIMPLIFY = FALSE)
    writeJS(orig, file.path(dir, 'data.js'))
}


readJS =
function(f, txt = readLines(f))
{
    i = grepl("^var [a-zA-Z]+ =", txt)
    vars = split(txt, cumsum(i))
    structure(lapply(vars, readJSVar), names = unname(sapply(vars, getVarName)))
}

readJSVar =
function(txt)
{
    txt[1] = gsub("^var ([a-zA-Z]+) = ", "", txt[1])
    txt[ length(txt) ] = gsub(";$", "", txt[ length(txt) ])
    txt = txt[ txt != '']
    fromJSON(paste(txt, collapse = ""))
}

getVarName =
function(txt)
{
    varName = gsub("^var ([a-zA-Z]+) = \\{?", "\\1", txt[1])
}


mergeNewTerms =
function(to, from)
{
    from = from[ from != '(none)']
    w = !(from %in% to$values)
    if(any(w)) {
        to$values = c(from[w], to$values)
        to$sections = c(rep("", sum(w)), to$sections)
        to$probs = c(rep(1, sum(w)), to$probs)        
    }

    to
}


writeJS =
function(els, file = character())
{
    v = sprintf( "var %s = %s;", names(els), sapply(els, function(x) paste(toJSON(x, container = TRUE, asIs = TRUE), collapse = "\n")))
    if(length(file))
       cat(v, file = file, sep = "\n")
    v
}

