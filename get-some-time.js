function firstDayWeek(week, year) {}

let date = new Date("2000");
let x = 14;
date.setDate(date.getDate() + (x - 1));
let y = date.getDay();
// console.log(y);
let z = date.getDate()

switch (y) {
  case 0:
    z = z;
    break;
  case 1:
    z = z-1;
    break;
  case 2:
    z = z- 2;
    break;
  case 3:
    z = z- 3;
    break;
  case 4:
    z = z- 4;
    break;
  case 5:
    z = z- 5;
    break;
  case 6:
    z = z- 6;
    break;
}
console.log(date);
date.setDate(9)
console.log(date);
console.log(date.getDay());
console.log(z);
