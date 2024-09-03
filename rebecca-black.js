function isFriday(params) {
  return params.getDay() === 5;
}

function isWeekend(params) {
  return params.getDay() === 0 || params.getDay() === 6;
}

function isLeapYear(params) {
  return params.getFullYear() % 4 === 0;
}
function isLastDayOfMonth(params) {
  if (params.getMonth() === 1) {
    if (isLeapYear(params)) {
      if (params.getDate() === 29) {
        return true;
      }
      return false;
    }
    if (params.getDate() === 28) {
      return true;
    }
    return false;
  }

  if (
    params.getMonth() === 3 ||
    params.getMonth() === 5 ||
    params.getMonth() === 8 ||
    params.getMonth() === 10
  ) {
    return params.getDate() === 30;
  }
  return params.getDate() === 31;
}
