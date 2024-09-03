function sunnySunday(params) {
  const secondWeek = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
  };
  let zTime = params.getTime() + 62135596800000;
  return secondWeek[(zTime / 86400000) % 6];
}
