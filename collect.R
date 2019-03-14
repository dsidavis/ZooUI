library(RJSONIO)

readJS = function(f)
{
    fromJSON(gsub(";$", "", readLines(f[1])[-1]))
}

js = list.files(path = "/var/www/html/ZooUI_files", 
pattern = "currentResults.js$", recursive = TRUE, full = TRUE)
i = file.info(js)
up = js[i[, "size"] != 59]

results = lapply(up, function(x) try(readJS(x)))
err = sapply(results, is, "try-error")
table(err)

names(results) = dirname(up)
results = results[!err]

saveRDS(results, "SpillOverResults.rds")

