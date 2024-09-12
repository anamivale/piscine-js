function deepCopy(params) {
  if (params.constructor === Array) {
    let output = [];
    for (let i = 0; i < params.length; i++) {
      output[i] = params[i];
    }
    return output;
  }
  if (params.constructor === Object) {
    let output = {};
    for (const [key, value] in Object.entries(params)) {
      output[key] = value;
    }
    return output;
  }
}
