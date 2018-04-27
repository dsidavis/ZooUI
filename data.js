var docInfo = {
    title: "Detection of antibodies to Oropouche virus in non-human primates in Goiânia City, Goiás",
    abstract: "Arboviruses are associated with human disease, and non-human primates (NHPs) are important primary hosts. This study shows the detection of antibodies to Oropouche virus (OROV) in NHPs either living in urban parks or acclimatized at the Wild Animal Screening Center, Goiânia city. Methods: Fifty blood samples were analyzed by hemagglutination-inhibition and neutralization assays. Results: Two monkeys (Alouatta caraya) had antibodies to OROV by both techniques. Conclusions: This is the first report demonstrating the detection of OROV antibodies in Goiás State and may represent the introduction/circulation of OROV in the region and a potential risk to the human population",
    year: "2016",
    pdf: "../NewPDFs/Oropouche/Gibrail-2016.pdf"
//    pdf: "../NewPDFs/Getah Virus/Turrel-2003.pdf"
};

var ModelResults = {
    year: { values: ["2010", "1968", "1999", "2003", "2004", "1994"],
	    probs: [.98, .90, .82, .65, .5, .4] },
    country: {
	value: ["Ireland", "Britain", "UK"],
	probs: [.8, .76, .2]
    },
    virus: { values: ["encephalitis","getah"],
	     probs: [1, 1]
	   },
    diagTest: { values: ["molecular"],
		probs: [.99]
	      },
    species: {
	values: ["mosquito"]
    }
};
