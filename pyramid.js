function pyramid(str, depth) {
    let output = ""
    let strLen = str.length
    for (let i=1; i<=depth; i++){
        let st = str.repeat((i*2)-1)
        let base = strLen*(2*depth -1)
        let level = strLen*(2*i -1)

        let spaces = " ".repeat((base-level)/2)
        output += spaces + st
        if (i!= depth){
            output += "\n"
        }
    }

    return output
}
console.log(pyramid("{}", 12));