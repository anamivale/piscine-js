import fs from "fs";
const fileExists = fs.existsSync("vip.txt");
if (!fileExists) {
  return;
}
console.log("welcome");
