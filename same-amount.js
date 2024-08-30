function sameAmount(params, args1, args2) {
  let x = params.match(args1);
  let y = params.match(args2);
  if (x === null || y===nul){
    return false
  }
  if (x.length === y.length) {
    return true;
  }
  return false;
}
