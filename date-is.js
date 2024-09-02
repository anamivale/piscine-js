function isValid(params) {
  if (params.toDateString() == "Invalid Date") {
    return false;
  }
  return true;
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

console.log(isBefore(new Date("2006-01-01"), new Date("2026-01-01")));
