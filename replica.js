function replica(...params) {
  if (params.length === 1) {
    return params;
  }
  let output = {};
  for (let i = 0; i < params.length; i++) {
    for (const key in params[i]) {
      output[key] = params[i][key];
    }
  }
  return output;
}
