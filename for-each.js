function forEach(arr, fn) {
  for (let index = 0; index < arr.length; index++) {
    fn(arr[index], index, arr);
  }
}


