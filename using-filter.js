function filterShortStateName(params) {
  let output = params.filter((el) => el.length < 7);
  return output;
}
function filterStartVowel(params) {
  let vowels = "aeiouAEIOU";
  let output = params.filter((el) => vowels.includes(el[0]));
  return output;
}

function filter5Vowels(params) {
  let vowels = "aeiouAEIOU";
  let output = [];
  params.filter((el) => {
    let count = 0;
    for (let i = 0; i < el.length; i++) {
      if (vowels.includes(el[i])) {
        count++;
      }
    }
    if (count >= 5) {
      output.push(el);
    }
  });
  return output;
}
function filter1DistinctVowel(params) {
  let vowels = "aeiouAEIOU";
  let output = [];
  params.filter((el) => {
    let count = {};
    for (let i = 0; i < el.length; i++) {
      if (vowels.includes(el[i])) {
        count[el[i]] = el[i]
      }
    }
    let arr =Object.keys(count)
    if (arr.length === 1) {
      output.push(el);
    }
  });
  return output;
}



