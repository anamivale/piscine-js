const slice = (a, b, c) => {
  if (Array.isArray(a)) {
    if (typeof c !== "undefined") {
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
    let output = "";
    for (let i = b; i < c; i++) {
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
