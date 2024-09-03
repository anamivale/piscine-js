// function firstDayWeek(week, year) {
//   console.log(week, year);
//   let date = new Date(year);
//   let x = (week - 1) * 7;
//   console.log(x);
//   date.setDate(date.getDate() + x);
//   console.log(date);

//   let y = date.getDay();
//   console.log(y);
//   let z = date.getDate();

//   switch (y) {
//     case 0:
//       z = z;
//       break;
//     case 1:
//       z = z - 1;
//       break;
//     case 2:
//       z = z - 2;
//       break;
//     case 3:
//       z = z - 3;
//       break;
//     case 4:
//       z = z - 4;
//       break;
//     case 5:
//       z = z - 5;
//       break;
//     case 6:
//       z = z - 6;
//       break;
//   }
//   date.setDate(z + 1);
//   if (year > date.getFullYear()) {
//     return "01-01-" + String(year);
//   }
//   let dateO = String(date.getDate()).padStart(2, "0");
//   let monthO = String(date.getMonth() + 1).padStart(2, "0");
//   let yearO = String(date.getFullYear()).padStart(4, "0");

//   return dateO + "-" + monthO + "-" + yearO;
// }
// console.log(firstDayWeek(2, "2017")); // + '09-01-2017'  - '02-01-2017'

function firstDayWeek(week, year) {
  // Convert the year to an integer
  year = parseInt(year, 10);

  // Start with the 1st January of the given year
  let date = new Date(year, 0, 1);

  // Find the nearest Monday to 1st January
  let day = date.getDay();
  let dayDiff = (day <= 1 ? 1 : 8) - day;

  // Set the date to the first Monday of the year
  date.setDate(date.getDate() + dayDiff);

  // Now, add (week - 1) * 7 days to get to the start of the given week
  date.setDate(date.getDate() + (week - 1) * 7);

//   if (year > (date.getFullYear()-1970)) {
//     console.log("x");
//     return "01-01-" + String(year).padStart(4,0);
//   }
  // Format the date as DD-MM-YYYY
  let dateO = String(date.getDate()).padStart(2, "0");
  let monthO = String(date.getMonth() + 1).padStart(2, "0");
  let yearO = String(date.getFullYear()).padStart(4, "0");

  return dateO + "-" + monthO + "-" + yearO;
}

console.log(firstDayWeek(2, "0001")); // Expected output: '09-01-2017'
