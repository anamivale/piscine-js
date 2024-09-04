function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) result.push(fn(arr[i], i, arr));
  return result;
}

function flatMap(arr, fn) {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    let values = fn(arr[index], index, arr);
    if (Array.isArray(values)) {
      output.push(...values);
    } else {
      output.push(fn(values));
    }
  }
  return output;
}
