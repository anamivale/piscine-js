function vowelDots(params) {
  let output = "";

  for (let i = 0; i < params.length; i++) {
    let vowels = new RegExp("[aeiouAEIOU]");
    if (vowels.test(params[i])) {
      output += params[i] + ".";
      continue;
    }
    output += params[i];
  }
  return output;
}
console.log(vowelDots("valero"));
