library(RJSONIO)
source("R/collect_funs.R")

results = readRDS("SpillOverResults.rds")
d = file.path(names(results), "data.js")
all(file.exists(d))

docs = lapply(d, readLines)

zooData = lapply(docs, readDataJS)

names(zooData) = dirname(d)

saveRDS(zooData, file = "zooData.rds")
