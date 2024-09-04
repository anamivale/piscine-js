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
  let vowels = "aeiou";
  let output = [];
  params.filter((el) => {
    let count = {};
    for (let i = 0; i < el.length; i++) {
      if (vowels.includes(el[i].toLowerCase())) {
        count[el[i].toLowerCase()] = el[i];
      }
    }
    let arr = Object.keys(count);
    if (arr.length === 1) {
      output.push(el);
    }
  });
  return output;
}

function multiFilter(params) {
  let vowels = /[aeiouAEIOU]/;
  let vowel = "aeiouAEIOU";


  let output = params.filter(
    (el) =>
      el.capital.length >= 8 &&
      !vowel.includes(el.name[0]) &&
      vowels.test(el.tag) &&
      el.region !== "South"
  );
  return output
}

console.log(
  multiFilter([
    { tag: "CA", name: "California", capital: "Sacramento", region: "West" },
    { tag: "HI", name: "Hawaii", capital: "Honolulu", region: "West" },
    {
      tag: "MO",
      name: "oMissouri",
      capital: "Jefferson City",
      region: "Midwest",
    },
    {
      tag: "PA",
      name: "Pennsylvania",
      capital: "Harrisburg",
      region: "Northeast",
    },
    {
      tag: "RI",
      name: "Rhode Island",
      capital: "Providence",
      region: "Northeast",
    },
  ])
);
