import { argv } from "node:process";
// print process.argv
let newArray = [];
let x = argv[2].split(" ");
x.forEach((val) => {
  val.length % 2 === 0
    ? newArray.push(val.slice(val.length / 2) + val.slice(0, val.length / 2))
    : newArray.push(
        val.slice(val.length / 2 + 1) + val.slice(0, val.length / 2 + 1)
      );
});
console.log(newArray.join(" "));
