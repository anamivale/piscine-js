function flow(fns) {
  let initial = fns[0];

  for (let i = 1; i < fns.length; i++) {
    let x = fns[i](initial);
    initial = x;
  }
  return initial;
}
