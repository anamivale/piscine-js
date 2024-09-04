function hasCity(country, cities) {
  return function fn(city) {
    if (cities.includes(city)) {
      return `${city} is a city from ${country}`;
    }
    return `${city} is not a city from ${country}`;
  };
}
