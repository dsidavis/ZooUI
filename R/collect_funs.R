readDataJS = function(doc)
{
    i = grep("^var ModelResults", doc)
    fromJSON(paste(gsub("^var .* = |;$", "", doc[i:length(doc)]), collapse = " "))
}

readMetaJS = function(doc)
{
    i = grep("^var docInfo", doc)
    j = grep("^var ModelResults", doc)
    fromJSON(paste(gsub("^var .* = |;$", "", doc[i:(j-1)]), collapse = " "))
}
