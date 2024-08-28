const slice = (a, b, c) => {
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
};

