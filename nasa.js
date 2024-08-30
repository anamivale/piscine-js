function nasa(params) {
   
  let output = "";

  for (let i = 1; i <= params; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      if (i === params) {
        output += "NASA";
        continue;
      }
      output += "NASA ";
      continue;
    }
    if (i % 3 == 0) {
      if (i == params) {
        output += "NA";
        continue;
      }
      output += "NA ";
      continue;
    }
    if (i % 5 == 0) {
      if (i == params) {
        output += "SA";
        continue;
      }
      output += "SA ";
      continue;
    }
    output += i;
    if (i !== params) {
        output += " ";
      }

  }
  return output 
}

console.log(nasa(15));
