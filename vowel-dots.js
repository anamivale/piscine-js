function vowelDots(params) {
  let vowels = /[aeiouAEIOU]/;
  let output = "";

  for (let i = 0; i < params.length; i++) {
    if (vowels.test(params[i])) {
      output += params[i] + ".";
      continue;
    }
    output += params[i];
  }
  return output;
}
