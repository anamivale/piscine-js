function sameAmount(params, args1, args2) {
    console.log(params);
  let x = params.match(args1);
  let y = params.match(args2);
  console.log(x,y);
  if (x === null || y===null){
    return false
  }
  if (x.length === y.length) {
    return true;
  }
  return false;
}

