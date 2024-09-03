// Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.

function dayOfTheYear(params) {
  let current = params.getTime();
  let x = new Date(String(params.getFullYear()));
  let first = x.getTime();
  console.log(x);
  return parseInt((current - first) / 86400000);
}
console.log(dayOfTheYear(new Date("2020-05-30 18:09:00")));
