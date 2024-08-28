const indexOf = (arr, val, opt) => {
  if (typeof opt !== "undefined") {
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

const lastIndexOf = (arr, val, opt) => {
    
  if ( opt = "" ) {
    let i = opt
    for (i; i >= 0; i--) {

      if (arr[i] == val) {

        return i;
      }
    }
  }
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
console.log(lastIndexOf(["t", 0, 0, "t"], "t", 2));

// if (typeof a !== "undefined") {
//   console.log(a);
// } else {
//   console.log("!a");
// }
