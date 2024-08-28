const slice = (a, b, c) => {
  if (b < 0) {
    b = a.length + b;
  }

  if (Array.isArray(a)) {
    if (typeof c !== "undefined") {
      if (c < 0) {
        c = a.length + c;
      }
      if (b > c) {
        return [];
      }
      const output = [];
      for (let i = b; i < c; i++) {
        output.push(a[i]);
      }
      return output;
    }

    const output = [];
    for (let i = b; i < a.length; i++) {
      output.push(a[i]);
    }
    return output;
  }
  if (typeof c !== "undefined") {
    if (c < 0) {
      c = a.length + c;
    }
    if (b > c) {
      return "";
    }

    let output = "";
    for (let i = b; i < c; i++) {
      console.log("x");

      console.log("x");
      output += a[i];
    }
    return output;
  }

  let output = "";
  for (let i = b; i < a.length; i++) {
    output += a[i];
  }
  return output;
};
