d = readRDS("SpillOverResults.rds") # from collect.R
f = readRDS("zooMeta.rds") # from grabData.R

################################################################################

resultsDF = function(x)
{
    if(length(x$results$rows)){
        ans = as.data.frame(do.call(rbind, x$results$rows))
    } else
        ans = data.frame("country" = NA, "year" = NA, "virus" = NA,
                       "species" = NA, "diagTest" = NA, "City" = NA, 
                       "latitude" = NA, "longitude" = NA, "SpecificTest" = NA,
                       "Prevalence" = NA, "Deaths" = NA, "Morbidity" = NA, "Reservoir" = NA)
    ans$basicReproductiveNumber = x$results$basicReproductiveNumber
    ans$rejected = x$results$rejected
    ans$version = x$results$version
    ans$EpiNotes = paste(x$results$notes$EpiNotes, collapse = ";")
    ans
}

################################################################################

ll = match(names(d), names(f))
results = lapply(d, resultsDF)
results = lapply(seq_along(results), function(i) {
    x = results[[i]]
    x$pdf = basename(names(d)[i])
    x$title = f[[ll[i]]]$title
    x
})

results = do.call(rbind, results)

results = data.frame(lapply(results, function(x) gsub("\n", "", as.character(x))))


write.csv(results,
          file = paste0("SpillOverResults_",
                        as.Date(Sys.time()),
                        ".csv"),
          row.names = FALSE)
