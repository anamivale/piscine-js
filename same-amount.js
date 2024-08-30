function sameAmount(params, args1, args2) {
  let x = params.match(new RegExp(args1, "g"));
  let y = params.match(new RegExp(args2, "g"));
  console.log("Param: ",params,"ARGS1: ", args1,"ARGS2: ", args2);
  if (x === null || y === null) {
    return false;
  }
  if (x.length === y.length) {
    return true;
  }
  return false;
}

data1 = "hello how are you";
data2 =
  "qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd";

console.log(sameAmount(data2, /q /, /qqqqqqq/));
