const { argv } = require("process");
// print process.argv
let newArray = [];
argv.slice(2).forEach((val, index) => {
  val.length%2 === 0 ? newArray.push(val.slice((val.length / 2)) + val.slice(0, (val.length / 2))):newArray.push(val.slice((val.length / 2)+1) + val.slice(0, (val.length / 2)+1));

  console.log(`${index}: ${val}`);
});
console.log(newArray.join(" "));