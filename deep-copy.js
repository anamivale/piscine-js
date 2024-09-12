function deepCopy(params) {
  if (Array.isArray(params)) {
    let output = [];
    for (let i = 0; i < params.length; i++) {
      output[i] = deepCopy(params[i]);
    }
    return output;
  } else if (isAnObject(params)) {
    let output = {};
    for (const key in params) {
      output[key] = deepCopy(params[key]);
    }
    return output;
  }
  return params;
}

function isAnObject(input) {
  return (
    typeof input === "object" &&
    !(typeof input === "function") &&
    !Array.isArray(input) &&
    input !== null &&
    !(input instanceof RegExp)
  );
}
console.log(deepCopy(["user", "mika", "age", 37]));
