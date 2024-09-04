function adder(params, initial) {
  if (typeof initial === "undefined") {
    if (params.length === 0 || typeof params === "undefined") {
      return 0;
    }
    let output = params.reduce((acc, curr) => acc + curr);
    return output;
  }
  if (params.length === 0 || typeof params === "undefined") {
    return initial;
  }
  let output = params.reduce((acc, curr) => acc + curr, initial);
  return output;
}

function sumOrMul(params, initial) {
  if (typeof initial === "undefined") {
    if (params.length === 0 || typeof params === "undefined") {
      return 0;
    }
    let output = params.reduce((acc, curr, idx) =>
      curr % 2 === 0 ? acc * curr : acc + curr
    );
    return output;
  }
  if (params.length === 0 || typeof params === "undefined") {
    return initial;
  }
  let output = params.reduce(
    (acc, curr, idx) => (curr % 2 === 0 ? acc * curr : acc + curr),
    initial
  );
  return output;
}
function funcExec(params) {
  let x = params.reduce((el) => el);
  return x;
}
console.log(adder([]));
