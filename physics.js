function getAcceleration(params) {
  let a = params.f / params.m;
  let a1 = params.Δv / params.Δt;
  let a3 = (2 * params.d) / (params.t * params.t);

  if (Number.isNaN(a) || Number.isNaN(a1) || Number.isNaN(a3)) {
    return "impossible";
  }
}
