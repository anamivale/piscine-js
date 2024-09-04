function citiesOnly(params) {
  const output = [];
  params.map((x) => {
    output.push(x.city);
  });

  return output;
}

function upperCasingStates(params) {
  if (!Array.isArray(params)) {
    throw "not an array";
  }

  let x = [];
  params.map((el) => {
    let y = el.split(" ");
    let z = [];
    y.map((val) => {
      z.push(val[0].toUpperCase() + val.slice(1).toLowerCase());
    });
    x.push(z.join(" "));
  });
  return x;
}
function fahrenheitToCelsius(params) {}

// console.log(fahrenheitToCelsius(["68°F", "59°F", "25°F"]));
let reg = /d+/g;
console.log(["68°F", "59°F", "25°F"].match(reg));
