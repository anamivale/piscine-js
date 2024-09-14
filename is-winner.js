function isWinner(country) {
  let countryId;
  let continent;
  countries.find((result) => {
    if (result.name === country) {
      countryId = result.id;
      continent = result.continent;
    }
  });
  if (typeof continent === "undefined") {
    return `${country} never was a winner`;
  }
  if (continent !== "Europe") {
    return `${country} is not what we are looking for because of the continent`;
  }

  let wins = results.filter((res) => res.countryId === countryId);
  if (wins.length >= 3) {
    let year = "";
    let resl = "";
    wins.forEach((element) => {
      year += element.year + ", ";
      resl += element.score + ", ";
    });
    resl = resl.slice(0, resl.length - 2);
    return `${country} won the FIFA World Cup in <years>: "${year}" winning by <results>:"${resl}"`;
  } else {
    return `${country} is not what we are looking for because of the number of times it was champion`;
  }
}
