function RNA(params) {
  const isUpperCase = (str) => str === str.toUpperCase();

  if (!isUpperCase(params)) {
    return "Invalid";
  }
  let rna = "";

  for (let i = 0; i < params.length; i++) {
    if (params[i] === "G") {
      rna += "C";
    }
    if (params[i] === "C") {
      rna += "G";
    }
    if (params[i] === "T") {
      rna += "A";
    }
    if (params[i] === "A") {
      rna += "U";
    }
  }
  return rna;
}

function RNA(params) {
  let dna = "";

  for (let i = 0; i < params.length; i++) {
    if (params[i] === "C") {
      dna += "G";
    }
    if (params[i] === "G") {
      dna += "C";
    }
    if (params[i] === "A") {
      dna += "T";
    }
    if (params[i] === "U") {
      dna += "A";
    }
  }
  return dna;
}
