function dogYears(planet, seconds) {
  const planets = {
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
    earth: 1,
  };

  const earth = seconds / 31557600;
  let years = 0;

  if (planet == "mercury") {
    years = earth * planets["mercury"];
  }
  if (planet == "venus") {
    years = earth * planets["venus"];
  }
  if (planet == "mars") {
    years = earth * planets["mars"];
  }
  if (planet == "jupiter") {
    years = earth * planets["jupiter"];
  }
  if (planet == "saturn") {
    years = earth * planets["saturn"];
  }
  if (planet == "uranus") {
    years = earth * planets["uranus"];
  }
  if (planet == "neptune") {
    years += earth * planets["neptune"];
  }
  if (planet == "earth") {
    years = earth * planets["earth"];
  }

  return Math.round(years * 7 * 100) / 100;
}
console.log(dogYears("mars", 2134835688));
