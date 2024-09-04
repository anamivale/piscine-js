function filter(arr, fn) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let x = fn(arr[i], i, arr);
    output.push(x);
  }
  return output;
}

function reject(arr, fn) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let x = !fn(arr[i], i, arr);
    output.push(x);
  }
  return output;
}

function partition(arr, fn) {
  let output = [];
  let neg = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(fn(arr[i], i, arr));
    neg.push(!fn(arr[i], i, arr));
  }
  return [output, neg];
}
