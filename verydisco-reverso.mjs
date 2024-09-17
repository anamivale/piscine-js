import fs from "fs";
const args = process.argv;

const file = args[2];
let newArray = [];

try {
  fs.readFile(file, (err, data) => {
    let fileData = data.toString();
    let arr = fileData.split(" ");
    arr.forEach((val) => {
      newArray.push(val.slice(val.length / 2) + val.slice(0, val.length / 2));
    });
    console.log(newArray.join(" "));
  });
} catch (error) {
  console.log(error.message);
}
