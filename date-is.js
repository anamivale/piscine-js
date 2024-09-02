function isValid(date) {
  // if (date instanceof Date) {
  //   console.log("g");
  //   if (date.toDateString() !== "Invalid Date") {
  //     return true;
  //   } else{
  //     return false
  //   }
  // }
  // let d1 = /[a-zA-Z0-9:+()]/
  // if (d1.test(date)){
  //   return true
  // }
  // if (date instanceof Date) {
  //   console.log("g");
  //   if (date.toDateString() !== "Invalid Date") {
  //     return true;
  //   }
  // }
  // return false;
  return date instanceof Date && !isNaN(date.getTime());
}
function isAfter(date1, date2) {
  return date1 > date2;
}

function isBefore(date1, date2) {
  return date2 > date1;
}

function isFuture(date1) {
  let date2 = new Date();
  if (isValid(date1)) {
    return date1 > date2;
  }
  return false;
}
function isPast(date1) {
  if (isValid(date1)) {
    let date2 = new Date();

    return date2 > date1;
  }
  return false;
}
// console.log(typeof Date(), ("2006-10-12"));

// console.log(isValid(new Date()));
// console.log(typeof Date(), new Date(""));
