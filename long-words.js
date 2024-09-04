function longWords(params) {
  console.log("pa=>", params);
  let output = params.filter((el) => el.length >= 5);

  return params.length === output.length;
}

function oneLongWord(params) {
  console.log("ra=>", params);

  let output = params.filter((el) => el.length >= 10);

  return output.length >= 1;
}

function noLongWords(params) {
  console.log("ms=>", params);

  let output = params.filter((el) => el.length >= 7);

  return output.length < 1;
}
