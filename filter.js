function filter(arr, fn) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      output.push(arr[i]);
    }
  }
  return output;
}

function reject(arr, fn) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) {
      output.push(arr[i]);
    }
  }
  return output;
}

function partition(arr, fn) {
  let output = [];
  let neg = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      output.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }
  return [output, neg];
}
