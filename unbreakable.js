

function split(params, sep) {
    let output = []

    for ( let i=0; i<params.length; i++){
        output.push(params[i])
    }
    return output
}

function join(params) {
    let output = ""

    for ( let i=0; i<params.length; i++){
        output += params[i]
    }
    return output
}
x = [1,2,3,4,5]
console.log(x.join(x," "));
