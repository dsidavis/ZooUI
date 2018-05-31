FILES=JS CGI CSS Icons help.html mkCurResults mkCurResults.R Files/ui.html Files/data.js Files/currentResults.js mkLink install  empty_results.js


ship.tar.gz: $(FILES)
	tar zcf ship.tar.gz $(FILES)


# Note dsi and dsilib are configured in my (duncan's) ~/.ssh/config
# to point to dsi.ucdavis.edu and dsi.library.ucdavis.edu
# dsilib is the Web server; dsi is the compute server.

ZooUI_files.tar.gz:
	ssh dsi 'tar zcf ZooUI_files.tar.gz -C /data_small/Zoonotics ZooUI_files'
	scp dsi:ZooUI_files.tar.gz .

send: ZooUI_files.tar.gz ship.tar.gz
	rsync $^ dsilib:

.PHONY:	 Install

Install: 
	scp install dsilib:
	ssh dsilib 'sh -x -e ./install'

