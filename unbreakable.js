

function split(params) {
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

