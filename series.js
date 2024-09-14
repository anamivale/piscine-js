function series(args) {
  let output = args.map(async (element) => await element());
  return Promise.all(output);
}

series([async () => 1, async () => true]).then((result) => {
  console.log(result); 
});
