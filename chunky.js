function chunk(params, limit) {
    let output = []
    let temp = []

    for (let i =0; i<params.length; i++){
        if(i+1 % limit === 0 || i == params.length-1){
            output.push(temp)
        }
        temp.push(params[i])
    }
}

console.log(chunk([1,2,3,4,5,6], 2));