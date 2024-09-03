function matchCron(cron, date) {
  let sCron = cron.split(" ");
  let minute = sCron[0];
  let Hour = sCron[1];
  let DayOfMonth = sCron[2];
  let month = sCron[3];
  let weekDay = sCron[4];

  let dateminute = date.getMinutes();
  let dateHour = date.getHours();
  let dateDayOfMonth = date.getDate();
  let datemonth = date.getMonth() + 1;
  let dateweekDay = date.getDay();
  if (DayOfMonth !== "*") {
    if (DayOfMonth != dateDayOfMonth) {
      return false;
    }
  }

  if (minute !== "*") {
    if (dateminute != minute) {
      return false;
    }
  }

  if (Hour !== "*") {
    if (Hour != dateHour) {
      return false;
    }
  }
  if (month !== "*") {
    if (month != datemonth) {
      return false;
    }
  }

  if (weekDay !== "*") {
    if (weekDay != dateweekDay) {
      return false;
    }
  }

  return true;
}

