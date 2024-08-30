function sameAmount(params, args1, args2) {
  let x = params.match(new RegExp(args1, "g"));
  let y = params.match(new RegExp(args2, "g"));
  console.log(x);
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

// const regexp = /test1/g;
// const str = "test1test1";

// str.match(regexp); // ['test1', 'test2']

// console.log(str.match(regexp));
// // console.log(array[1]);

// let re = /ab+c/; // literal notation
// // OR
// // re = new RegExp("ab+c", "i"); // constructor with string pattern as first argument
// console.log(re)
// // OR
// re = new RegExp(re, "g");
// console.log(re)
