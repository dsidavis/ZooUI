FILES=JS CGI CSS Icons help.html mkCurResults mkCurResults.R Files/ui.html Files/data.js Files/currentResults.js mkLink install  empty_results.js CGI/R/cgi_js.R


ship.tar.gz: $(FILES)
	tar zcf ship.tar.gz $(FILES)


# Note dsi and dsilib are configured in my (duncan's) ~/.ssh/config
# to point to dsi.ucdavis.edu and dsi.library.ucdavis.edu
# dsilib is the Web server; dsi is the compute server.

#.PHONY:	ZooUI_files.tar.gz

ZooUI_files.tar.gz:
	ssh dsi 'tar zcf ZooUI_files.tar.gz -C /data_small/Zoonotics ZooUI_files'
	scp dsi:ZooUI_files.tar.gz .

sendShip: ship.tar.gz
	rsync $^ dsilib:

send: ZooUI_files.tar.gz ship.tar.gz
	rsync $^ dsilib:

.PHONY:	 Install

Install: sendShip
	scp install dsilib:
	ssh dsilib 'sh -x -e ./install'

# Rules for collecting and exporting the results
# 

results/SpilloverResults.rds: scripts/collect.R R/collect_funs.R
	Rscript $<

results/zooMeta.rds results/zooData.rds: scripts/grabData.R
	Rscript $<

