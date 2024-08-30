let vowels = new RegExp("[aeiouAEIOU]");
function vowelDots(params) {
  let output = "";  
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
// console.log(vowelDots("valero"));
console.log(vowels.test('a') && !vowels.test('c'))
