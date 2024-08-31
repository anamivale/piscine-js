function ionOut(params) {
  const regex = /\b\w*tion*\w\b/g;

  let output = params.match(regex);
  if (output === null){
    return []
  }
  let arr = output;
  let outarr = [];

  arr.forEach((element) => {
    let x = element.replace("ion", "");
    outarr.push(x);
  });
  return outarr;
}
