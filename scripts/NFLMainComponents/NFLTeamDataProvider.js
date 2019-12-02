const NFLTeamCollection = [
  {
    name: "Ravens",
    image: "assets/NFLPictures/ravens.jpg",
    headCoach: "John Harbaugh",
    quarterback: "Lamar Jackson",
    division: "AFC North",
    stadium: "M&T Bank Stadium",
    location: "Baltimore, MD",
    championships: ["2013", "2001"]
  },
  {
    name: "Patriots",
    image: "assets/NFLPictures/patriots.jpg",
    headCoach: "Bill Belichick",
    quarterback: "Tom Brady",
    division: "AFC East",
    stadium: "Gillette Stadium",
    location: "Foxborough, MA",
    championships: ["2019", "2017", "2015", "2005", "2004", "2002"]
  },
  {
    name: "Saints",
    image: "assets/NFLPictures/saints.jpg",
    headCoach: "Sean Payton",
    quarterback: "Drew Brees",
    division: "NFC South",
    stadium: "Mercedes-Benz Superdome",
    location: "New Orleans, LA",
    championships: ["2010"]
  },
  {
    name: "Seahawks",
    image: "assets/NFLPictures/seahawks.jpg",
    headCoach: "Pete Carroll",
    quarterback: "Russell Wilson",
    division: "NFC West",
    stadium: "CenturyLink Field",
    location: "Seattle, WA",
    championships: ["2014"]
  },
  {
    name: "49ers",
    image: "assets/NFLPictures/49ers.jpg",
    headCoach: "Kyle Shanahan",
    quarterback: "Jimmy Garoppolo",
    division: "NFC West",
    stadium: "Levi's Stadium",
    location: "San Francisco, CA",
    championships: ["1995", "1990", "1989", "1985", "1982"]
  },
  {
    name: "Packers",
    image: "assets/NFLPictures/packers.jpg",
    headCoach: "Matt LaFleur",
    quarterback: "Aaron Rodgers",
    division: "NFC West",
    stadium: "Lambeau Field",
    location: "Green Bay, WI",
    championships: ["2011", "1997"]
  }
];

//This function exports the raw data
export const UseTeams = () => NFLTeamCollection;
