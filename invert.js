function invert(params) {
  let keys = Object.keys(params);
  let values = Object.values(params);
  let obj = {};

  for (let i = 0; i < keys.length; i++) {
    let x = values[i];
    let y = keys[i];
    obj[x] = y;
  }
  return obj;
}
