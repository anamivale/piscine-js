function chunk(params, limit) {
    let output = []
    let temp = []

    for (let i =0; i<params.length; i++){
        console.log(i, (i)%limit);
        if(((i)% limit) == 0 && i !=0 ) {
            output.push(temp)
            temp = []
        }
        temp.push(params[i])
        if (i == params.length-1 ){
            output.push(temp)

        }
    }

    return output
}

