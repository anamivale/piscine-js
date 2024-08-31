function groupPrice(params) {
  let regex = /([A-Za-z0-9.\S]*)/g;
  let s = params.match(regex);
  let x = /[\d]*/g;
  let y = params.match(x);
  let z = s.concat(y);
  let output = [];
  z.forEach((element) => {
    if (element != "") {
      output.push(element);
    }
  });
  return output;
}
