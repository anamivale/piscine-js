function adder(params, initial = 0) {
  let output = params.reduce((acc, curr) => acc + curr, initial);
  return output;
}

function sumOrMul(params, initial = 0) {
  let output = params.reduce(
    (acc, curr, idx) => (curr % 2 === 0 ? acc * curr : acc + curr),
    initial
  );
  return output;
}
function funcExec(params, initial) {
  let x = params.reduce((acc, fn) => fn(acc), initial);
  return x;
}
console.log(adder([]));
