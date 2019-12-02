const NBATeamCollection = [
  {
    name: "Lakers",
    image: "assets/NBAPictures/lakers.jpg",
    headCoach: "Frank Vogel",
    starPlayers: ["Lebron James", "Anthony Davis"],
    conference: "Western Conference",
    arena: "Staples Center",
    location: "Los Angeles, CA",
    championships: [
      1949,
      1950,
      1952,
      1953,
      1954,
      1972,
      1980,
      1982,
      1985,
      1987,
      1988,
      2000,
      2001,
      2002,
      2009,
      2010
    ]
  },
  {
    name: "Bucks",
    image: "assets/NBAPictures/bucks.jpg",
    headCoach: "Mike Budenholzer",
    starPlayers: ["Giannis Antetokounmpo", "Brook Lopez"],
    conference: "Eastern Conference",
    arena: "Fiserv Forum",
    location: "Milwaukee, WI",
    championships: [1971]
  },
  {
    name: "Nuggets",
    image: "assets/NBAPictures/denver.jpg",
    headCoach: "Michael Malone",
    starPlayers: ["Nikola Jokić", "Bol Bol", "Jamal Murray"],
    conference: "Western Conference",
    arena: "Pepsi Center",
    location: "Denver, CO",
    championships: [0]
  },
  {
    name: "Clippers",
    image: "assets/NBAPictures/clippers.jpg",
    headCoach: "Doc Rivers",
    starPlayers: ["Kawhi Leonard", "Paul George"],
    conference: "Western Conference",
    arena: "Staples Center",
    location: "Los Angeles",
    championships: [0]
  },
  {
    name: "Mavericks",
    image: "assets/NBAPictures/mavericks.jpg",
    headCoach: "Rick Carlisle",
    starPlayers: ["Luka Dončić", "Kristaps Porziņģis"],
    conference: "Western Conference",
    arena: "American Airlines Center",
    location: "Dallas, TX",
    championships: [2011]
  },
  {
    name: "Celtics",
    image: "assets/NBAPictures/celtics.jpg",
    headCoach: "Brad Stevens",
    starPlayers: ["Kemba Walker", "Jayson Tatum"],
    conference: "Eastern Conference",
    arena: "TD Garden",
    location: "Boston, MA",
    championships: [
      1957,
      1959,
      1960,
      1961,
      1962,
      1963,
      1964,
      1965,
      1966,
      1968,
      1969,
      1974,
      1976,
      1981,
      1984,
      1986,
      2008
    ]
  }
];

// This function exports the raw data
export const UseNBATeams = () => NBATeamCollection;
