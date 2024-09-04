function longWords(params) {
  return params.every((long) => long.length >= 5);
}

function oneLongWord(params) {
  return params.some((long) => long.length >= 10);
}

function noLongWords(params) {
  console.log(params);
  return !params.every((long) => long.length >= 7);
}
console.log(noLongWords(["val"]));
