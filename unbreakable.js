function split(params, sep) {
    let output = []
    let len = sep.length
    if (typeof sep !== "undefined"){
        let word  = ""
        for ( let i=0; i<params.length; i++){

            if (params.slice(i, i+len) == sep){
                if (word != ""){
                    output.push(word)
                    word = ""
                    i+=len

                }
               
                    
                }
                word += params[i]
                if (i == params.length-1){
                    if (word != ""){
                        output.push(word)
                    }
                }
            }
            return output

        }
    

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


