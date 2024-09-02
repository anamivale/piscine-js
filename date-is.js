function isValid(date) {
  if (date instanceof Date) {
    if (date.toDateString() !== "Invalid Date") {
      return true;
    }
  }
  return false;
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

console.log(isValid("valid"));
