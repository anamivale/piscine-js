function deepCopy(params) {
  if (params.constructor === Array) {
    let output = [];
    for (let i = 0; i < params.length; i++) {
      output[i] = deepCopy(params[i]);
    }
    return output;
  } else if (params.constructor === Object) {
    let output = {};
    for (const key in params) {
      output[key] = deepCopy(params[key]);
    }
    return output;
  }
  return params;
}
console.log(deepCopy(["user", "mika", "age", 37]));
