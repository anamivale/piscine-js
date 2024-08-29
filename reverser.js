function reverse(params) {
    
    if (Array.isArray(params)){
        let output = []
        for (let i = params.length-1; i>=0; i--){
            output.push(params[i])
        }
        return output
    }

    let output = ""
        for (let i = params.length-1; i>=0; i--){
            output += params[i]
        }
        return output
    
}

