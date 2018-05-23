var docInfo = {
    title: "Detection of antibodies to Oropouche virus in non-human primates in Goiânia City, Goiás",
    abstract: "Arboviruses are associated with human disease, and non-human primates (NHPs) are important primary hosts. This study shows the detection of antibodies to Oropouche virus (OROV) in NHPs either living in urban parks or acclimatized at the Wild Animal Screening Center, Goiânia city. Methods: Fifty blood samples were analyzed by hemagglutination-inhibition and neutralization assays. Results: Two monkeys (Alouatta caraya) had antibodies to OROV by both techniques. Conclusions: This is the first report demonstrating the detection of OROV antibodies in Goiás State and may represent the introduction/circulation of OROV in the region and a potential risk to the human population",
    year: "2016",
    pdf: "../NewPDFs/Oropouche/Gibrail-2016.pdf"
//    pdf: "../NewPDFs/Getah Virus/Turell-2003.pdf"
};

var ModelResults = {
    year: { values: ["2010", "1968", "1999", "2003", "2004", "1994", "2020"],
	    probs: [.98, .90, .82, .71, .71, .5, .1],
	    sections: ["title;abstract", "", "", "", "", "", ""]
	  },
    country: {
	values: ["Ireland", "Britain", "UK"],
	probs: [.82, .76, .2],
       sections: ["title;abstract", "methods", ""]	
    },
    virus: { values: ["encephalitis","getah"],
	     probs: [1, 1],
 	    sections: ["title;abstract", "methods"]		     
	   },
    diagTest: { values: ["molecular", "isolation"],
		probs: [.99, .7],
                sections: ["title;abstract", "methods"]	
	      },
    species: {
	values: ["mosquito"],
	probs: [.78],
        sections: ["title;abstract"]		
    }
};
