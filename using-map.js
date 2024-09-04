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
function fahrenheitToCelsius(params) {
  let reg = /-?\d+/g;
  let x = [];
  params.map((el) => {
    x.push(el.match(reg));
  });
  let nums = x.join(" ").split(" ");
  let output = [];

  nums.map((el) => {
    let z = (el - 32)*0.5556;
    console.log(el);
    console.log(z);
    output.push(Math.floor(z) + "°C");
  });
  return output;
}

function trimTemp(params) {
  let output = params.map(
    (x) => (x.temperature = x.temperature.replace(/ /g, ""))
  );
  let z = [];
  params.map((el, idx) => {
    el.temperature = output[idx];
    z.push(el);
  });
  return z;
}

function tempForecasts(params) {
  let output = params.map((x) => x.temperature);
  let reg = /\d+/g;
  let x = [];
  output.map((el) => {
    x.push(el.match(reg));
  });
  let nums = x.join(" ").split(" ");
  let out = [];

  nums.map((el) => {
    let z = (el - 32)*0.5556;
    out.push(Math.floor(z) + "°Celsius");
  });
  let z = [];
  params.map((el, idx) => {
    el.temperature = out[idx];
    z.push(el);
  });
  return `${z[0].temperature} in ${z[0].city}, ${z[0].state}`;
}

console.log(
  fahrenheitToCelsius(["86°F", "100°F", "41°F", "55°F", "10°F", "70°F", "-2°F"])
);
