function firstDayWeek(week, year) {
  console.log(week, year);
  let date = new Date(year);

  date.setDate(date.getDate() + week * 1);
  let y = date.getDay();
  // console.log(y);
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

  return (
    String(date.getDate()) +
    "-" +
    String(date.getMonth() + 1) +
    "-" +
    String(date.getFullYear())
  );
}
console.log(firstDayWeek(1, "2000"));
