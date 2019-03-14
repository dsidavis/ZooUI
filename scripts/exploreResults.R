
results = readRDS("SpillOverResults.rds") #from collect.R
zooData = readRDS("zooData.rds") # from grabData.R

all(names(results) == names(zooData))

missingCountry = sapply(results, function(x){
    any(sapply(x$results$row, function(r) {
        # browser()
        names(r)[1] != "country" & length(r) > 0
    }))
})

#Check the no data rows
noRows = sapply(results, function(x) length(x$results$rows) == 0)

Rejected = sapply(results, function(x) x$results$rejected %in% c("YES", "RETRACTED"))

table(noRows, Rejected)


comps = mapply(compareResults, result = results[!noRows], data = zooData[!noRows], varReturn = "pos")

compareResults = function(result, data,
                          vars = c("country", "year", "virus", "species", "diagTest"),
                          varReturn = c("pos", "prob", "term", "termNotIn"))
{
    ans = lapply(result$results$row, function(x){
        if(length(x) == 0)
            return(0)
        
        sapply(vars, function(v) {
            if(is.na(x[v])){
                # browser()
                return(0)
            }
            
            i = match(x[v], data[[v]]$values)
            switch(varReturn,
                   pos = i,
                   prob = data[[v]]$probs[i],
                   term = x[v],
                   termNotIn = ifelse(is.na(i), x[v], NA))
        })
    })
    # browser()
    return(do.call(rbind, ans))
}

tmp = do.call(rbind, comps)

b = apply(tmp, 2, function(x) round(table(x, useNA = "ifany") / length(x), 2))
table(sapply(comps, nrow))
table(sapply(comps, nrow) > 3)


NotIn = mapply(compareResults, result = results[!noRows], data = zooData[!noRows], varReturn = "termNotIn")
NotIn = do.call(rbind, NotIn)
apply(NotIn,2, table)
