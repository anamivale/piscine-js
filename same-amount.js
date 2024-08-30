function sameAmount(params, args1, args2) {
  console.log(params);
  let x = params.match(args1);
  let y = params.match(args2);
  console.log(x.length, y.length);
  if (x === null || y === null) {
    return false;
  }
  if (x.length === y.length) {
    return true;
  }
  return false;
}

let data2 =
  "qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd";

console.log(sameAmount(data2, /q /, /qqqqqqq/));
