function triangle(str, depth) {
  let output = "";
  for (let i = 1; i <= depth; i++) {
    output += str.repeat(i)
    if (i != depth){
        output += "\n"

    }
  }
  return output
}
