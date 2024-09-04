function map(arr, fn) {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    output.push(fn(arr[index]), i, arr);
  }
  return output;
}

function flatMap(arr, fn) {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    
    if (Array.isArray(arr[i])) {
      output.push(...arr[i]);
    } else {
      output.push(fn(arr[i]));
    }
  }
  return output;
}
