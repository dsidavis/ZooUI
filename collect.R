library(RJSONIO)
js = list.files(pattern = "currentResults.js", recursive = TRUE, full = TRUE)

results = lapply(js, fromJSON)
names(results) = dirname(js)

saveRDS(results, "SpillOverResults.rds")

