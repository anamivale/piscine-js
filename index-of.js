const indexOf = (arr, val, opt) => {
  if (opt != "") {
    for (let i = opt; i < arr.length; i++) {
      if (arr[i] == val) {
        return i;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
  return -1;
};

const lastIndexOf = (arr, val) => {
  for (let i = arr.length; i > 0; i--) {
    if (arr[i] == val) {
      return i;
    }
  }
  return -1;
};

const includes = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return true;
    }
  }
  return false;
};
console.log(indexOf(["t", 0, 0, "t"], "t", 1));
