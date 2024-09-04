function forEach(arr, fn) {
    let output = [];
  for (let index = 0; index < arr.length; index++) {
    fn(arr[index], i, arr);
  }
  return output;
}


