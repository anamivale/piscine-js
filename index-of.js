const indexOf = (arr, val) => {
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
