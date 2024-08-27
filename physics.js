function getAcceleration(params) {
  if (typeof params.f === "number" && typeof params.m === "number") {
    return params.f / params.m;
  }

  if (typeof params.Δv === "number" && typeof params.Δt === "number") {
    return params.Δv / params.Δt;
  }
  if (typeof params.d === "number" && typeof params.t === "number") {
    return (2 * params.d) / (params.t * params.t);
  }

  return "impossible";
}
// console.log(getAcceleration({ f: 10, m: 5 }));
let x = null
console.log(typeof x);
