function series(args) {
  let x = [];
  if (args.length===0){
    return x
  }
  args.forEach((element) => {
    x.push(element());
  });
  return x
}

