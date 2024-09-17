import fs from "fs";
let dir = process.argv[2];
if (typeof dir === "undefined") {
  dir = process.cwd();
}

try {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log(err.message);
    }
    console.log(files.length);
  });
} catch (err) {
  console.error(err);
}
