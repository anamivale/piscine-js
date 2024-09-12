var is = {};
is.arr = (n) => Array.isArray(n);
is.obj = (n) =>
  typeof n === "object" &&
  !is.fun(n) &&
  !is.arr(n) &&
  n !== null &&
  !(n instanceof RegExp);
is.fun = (n) => typeof n === "function";
function replica(output, ...inputs) {
  inputs.forEach((source) => {
    Object.keys(source).forEach((key) => {
      if (is.obj(source[key])) {
        if (!output.hasOwnProperty(key) || !is.obj(output[key])) {
          output[key] = {};
        }
        replica(output[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  });
  return output;
}

console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));
