const multiply = (a, b) => {
   let  output = 0
    for (let i = 1; i<=b; i++){
        output += a
    }
    return output
};


const divide = (a, b) => {
    let x = 0
    while (a>0){
        a -= b
        x++
    }
    return x
    
};
const modulo = (a, b) => {
    let x = 0
    while (a>b-1){
        a -= b
        x = a
    }
    return x
    
};

