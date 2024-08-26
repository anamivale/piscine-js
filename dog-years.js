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
  const year = 31557600;

  const earth = seconds / year;
  let years;
  console.log(earth);

  switch (planet) {
    case "mercury":
      years = earth * planets["mercury"];
      return years;

    case "venus":
      years = earth * planets["venus"];
      return years;

    case "mars":
      years = earth * planets["mars"];
      return years;

    case "jupiter":
      years = earth * planets["jupiter"];
      return years;

    case "saturn":
      years = earth * planets["saturn"];
      return years;

    case "uranus":
      years = earth * planets["uranus"];
      return years;

    case "neptune":
      years = earth * planets["neptune"];
      return years;

    case "earth":
      years = earth * planets["earth"];
      return years;
    default:
      years = 0;
  }
  return years;
}
console.log(dogYears("eath", 1000000000));
