function letterSpaceNumber(params) {
  let output = [];
  let regx = /[a-zA-Z] [0-9](?![a-zA-Z0-9])/g;
  let x = params.match(regx);
  if (x) {
    output = x;
  }
  return output;
}
