function forEach(arr, fn) {
    console.log(arr);
    console.log(fn);
    let output = []
  for (let index = 0; index < arr.length; index++) {
    output.push(fn(arr[index]))
  }
  return output
}

function add(params) {
  let vall = 0;
  return vall + params;
}

console.log(forEach([1, 2, 3, 4], add));
