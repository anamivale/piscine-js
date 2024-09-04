function flow(fns) {
  return function (...args) {
    if (args.length > 1) {
      args = [fns[0](...args)];
    }
    return fns.reduce((acc, fn) => fn(acc), args[0]);
  };
}
