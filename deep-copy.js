function deepCopy(params) {
  if (params.constructor === Array) {
    let output = [];
    for (let i = 0; i < params.length; i++) {
      output[i] = deepCopy(input[i]);
    }
    return output;
  }
  if (params.constructor === Object) {
    let output = {};
    for (const key in params) {
      output[key] = deepCopy(input[key]);
    }
    return output;
  }
}
