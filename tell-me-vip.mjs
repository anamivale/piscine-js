import fs from "fs";

let path = "/home/vmuhembe/piscine-js/guests";

try {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.log("error>", err.message);
    }
    if (!Array.isArray(files)) {
      console.log("");
      return;
    }
    files.forEach((element) => {
      fs.readFile(path + "/" + element, (err, data) => {
        if (err) {
          console.log("error>", err.message);
        }
        let obj = JSON.parse(data);
        if (obj.answer === "yes") {
          fs.appendFile("vip.txt", element, (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
      });
    });
  });
} catch (error) {
  console.log(error.message);
}
try {
  fs.readFile("vip.txt", (err, data) => {
    if (err) {
      console.log("error>", err.message);
    }

    let dat = data.toString();
    let arrData = dat.split(".json");
    let lastFirst = [];
    for (let file of arrData) {
      let x = file.split("_");
      let lf = x[1] + " " + x[0];
      lastFirst.push(lf);
    }

    lastFirst.sort();
    if (!Array.isArray(lastFirst)) {
      console.log("");
      return;
    }
    for (let i = 0; i < lastFirst.length - 1; i++) {
      if (lastFirst[i] === "undefined") {
        continue;
      }
      console.log(`${i + 1}. ${lastFirst[i]}`);
    }
  });
} catch (error) {
  console.log(error.message);
}
