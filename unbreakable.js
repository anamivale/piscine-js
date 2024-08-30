function split(a, b) {
  if (typeof b === "undefined") {
    return [a];
  }
  if (b === "") {
    let newS = [];
    for (let i = 0; i < a.length; i++) {
      newS.push(a[i]);
    }
    return newS;
  }

  let newS = [];
  let temp = "";
  let len = b.length; // Length of the delimiter
  for (let i = 0; i < a.length; i++) {
    // Check if the substring from the current index matches the delimiter
    if (a.slice(i, i + len) === b) {
      newS.push(temp);
      temp = "";
      i += len - 1; // Skip over the delimiter
    } else {
      temp += a[i];
    }
  }
  // Push the last segment or an empty string if the string ends with the delimiter
  newS.push(temp);
  return newS;
}

function join(a, b) {
  if (typeof b === "undefined") {
    b = ",";
  }
  let nString = "";

  for (let i = 0; i < a.length; i++) {
    if (i === 0) {
      nString += a[i];
    } else {
      nString += b + a[i];
    }
  }
  return nString;
}
