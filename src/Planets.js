let Planets = [];

// Create an array of urls to fetch.
for (var i = 1; i <= 61; i++) {
  if (i !== 17) {
    Planets.push(`https://swapi.co/api/planets/${i}/`);
  }
}

export default Planet;