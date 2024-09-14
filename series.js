function series(args) {
  let output = args.map( (element) =>  element());
  return Promise.all(output);
}

console.log(series([async () => 1, async () => true]));
