function map(arr, fn) {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    output.push(fn(arr[index]), index, arr);
  }
  return output;
}

function flatMap(arr, fn) {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    let values = fn(arr[index], index, arr);
    if (Array.isArray(values[i])) {
      output.push(...values[i]);
    } else {
      output.push(fn(values[i]));
    }
  }
  return output;
}
