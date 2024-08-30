function split(params, sep) {
  let output = [];
  let len = sep.length;
  if (typeof sep !== "undefined") {
    let word = "";
    for (let i = 0; i < params.length; i++) {
      if (params.slice(i, i + len) == sep) {
        output.push(word);
        word = "";
        i += len;
      }
      word += params[i];
      // if (i == params.length - 1) {
      //   if (word == ""){
      //     break
      //   }
      //   output.push(word);
      // }
    }
    return output;
  }

  for (let i = 0; i < params.length; i++) {
    output.push(params[i]);
  }
  return output;
}

function join(params, sep) {
  let output = "";

  for (let i = 0; i < params.length; i++) {
    output += params[i];
    if (i != params.length1 && typeof sep !== "undefined") {
      output += sep;
    }
  }
  return output;
}

console.log(split('a b c', ' '));
