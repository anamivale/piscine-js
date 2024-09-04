function adder(params, initial) {
  if (typeof initial === "undefined") {
    let output = params.reduce((acc, curr) => acc + curr);
    return output;
  }
  let output = params.reduce((acc, curr) => acc + curr, initial);
  return output;
}

function sumOrMul(params, initial) {
  if (typeof initial === "undefined") {
    let output = params.reduce((acc, curr, idx) =>
      curr % 2 === 0 ? acc * curr : acc + curr
    );
    return output;
  }
  let output = params.reduce(
    (acc, curr, idx) => (curr % 2 === 0 ? acc * curr : acc + curr),
    initial
  );
  return output;
}
function funcExec(params) {
   let x =  params.reduce(el => el)
   return x
    
}
console.log(funcExec([1, 2, 3, 5, 8]));
