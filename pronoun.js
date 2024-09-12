function pronoun(str) {
  var output = {};
  var arr = str.split("\n").join(" ").split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (/^i$/i.test(arr[i])) {
      output["i"] === undefined ? (output["i"] = {}) : null;
      output["i"]["count"] === undefined
        ? (output["i"]["count"] = 1)
        : output["i"]["count"]++;
      output["i"]["word"] === undefined ? (output["i"]["word"] = []) : null;
      output["i"]["word"].push(findNext(arr.slice(i)));
    } else if (/^you$/i.test(arr[i])) {
      output["you"] === undefined ? (output["you"] = {}) : null;
      output["you"]["count"] === undefined
        ? (output["you"]["count"] = 1)
        : output["you"]["count"]++;
      output["you"]["word"] === undefined ? (output["you"]["word"] = []) : null;
      output["you"]["word"].push(findNext(arr.slice(i)));
    } else if (/^he$/i.test(arr[i])) {
      output["he"] === undefined ? (output["he"] = {}) : null;
      output["he"]["count"] === undefined
        ? (output["he"]["count"] = 1)
        : output["he"]["count"]++;
      output["he"]["word"] === undefined ? (output["he"]["word"] = []) : null;
      output["he"]["word"].push(findNext(arr.slice(i)));
    } else if (/^she$/i.test(arr[i])) {
      output["she"] === undefined ? (output["she"] = {}) : null;
      output["she"]["count"] === undefined
        ? (output["she"]["count"] = 1)
        : output["she"]["count"]++;
      output["she"]["word"] === undefined ? (output["she"]["word"] = []) : null;
      output["she"]["word"].push(findNext(arr.slice(i)));
    } else if (/^it$/i.test(arr[i])) {
      output["it"] === undefined ? (output["it"] = {}) : null;
      output["it"]["count"] === undefined
        ? (output["it"]["count"] = 1)
        : output["it"]["count"]++;
      output["it"]["word"] === undefined ? (output["it"]["word"] = []) : null;
      output["it"]["word"].push(findNext(arr.slice(i)));
    } else if (/^they$/i.test(arr[i])) {
      output["they"] === undefined ? (output["they"] = {}) : null;
      output["they"]["count"] === undefined
        ? (output["they"]["count"] = 1)
        : output["they"]["count"]++;
      output["they"]["word"] === undefined
        ? (output["they"]["word"] = [])
        : null;
      output["they"]["word"].push(findNext(arr.slice(i)));
    } else if (/^we$/i.test(arr[i])) {
      output["we"] === undefined ? (output["we"] = {}) : null;
      output["we"]["count"] === undefined
        ? (output["we"]["count"] = 1)
        : output["we"]["count"]++;
      output["we"]["word"] === undefined ? (output["we"]["word"] = []) : null;
      output["we"]["word"].push(findNext(arr.slice(i)));
    }
  }
  for (var key in output) {
    output[key]["word"] = output[key]["word"].filter((x) => x !== undefined);
  }
  return output;
}
function findNext(arr) {
  var pronouns = /^(i|you|he|she|it|they|we)$/i;
  for (var i = 1; i < arr.length; i++) {
    if (pronouns.test(arr[i])) {
      return;
    } else {
      return arr[i].replace(/,/, "");
    }
  }
}
