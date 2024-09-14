function series(args) {
  let output = args.map(async (element) => await element());
  return Promise.all(output);
}

console.log(series([async () => 1, async () => true]));
