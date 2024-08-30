function nasa(params) {
   
  output = "";

  for (let i = 1; i <= params; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      if (i == params.length - 1) {
        output += "NASA";
        continue;
      }
      output += "NASA ";
      continue;
    }
    if (i % 3 == 0) {
      if (i == params.length - 1) {
        output += "NA";
        continue;
      }
      output += "NA ";
      continue;
    }
    if (i % 5 == 0) {
      if (i == params.length - 1) {
        output += "SA";
        continue;
      }
      output += "SA ";
      continue;
    }
    output += i;
    if (i !== params.length - 1) {
        output += " ";
      }

  }
  return output
}

console.log(nasa(15));
