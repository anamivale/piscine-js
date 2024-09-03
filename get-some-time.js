function firstDayWeek(week, year) {
  console.log(week, year);
  let date = new Date(year);
  let x = (week - 1) * 7;
  console.log(x);
  date.setDate(date.getDate() + x);
  console.log(date);

  let y = date.getDay();
  console.log(y);
  let z = date.getDate();

  switch (y) {
    case 0:
      z = z;
      break;
    case 1:
      z = z - 1;
      break;
    case 2:
      z = z - 2;
      break;
    case 3:
      z = z - 3;
      break;
    case 4:
      z = z - 4;
      break;
    case 5:
      z = z - 5;
      break;
    case 6:
      z = z - 6;
      break;
  }
  date.setDate(z + 1);
  if (year > date.getFullYear()) {
    return "01-01-" + String(year);
  }
  let dateO = String(date.getDate()).padStart(2, "0");
  let monthO = String(date.getMonth() + 1).padStart(2, "0");
  let yearO = String(date.getFullYear()).padStart(4, "0");

  return dateO +"-"+ monthO +"-"+ yearO;
}
console.log(firstDayWeek(52, "011")); //- '22-12-1000'
console.log(new Date("1000-12-30").getDay());
