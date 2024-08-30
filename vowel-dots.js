function vowelDots(params) {
  let output = "";
  let vowels = new RegExp("[aeiouAEIOU]");
  for (let i = 0; i < params.length; i++) {
    
    if (vowels.test(params[i])) {
      output += params[i] + ".";
    //   continue;
    }else{
        output += params[i];
    }
    
  }
  return output;
}
console.log(vowelDots("valero"));
