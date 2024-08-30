
function flat(params, depth = 1) {
    let output = []
    function flattened(arr, currDept) {
        for (let elment of arr) {
            if (Array.isArray(elment) && currDept > 0){
               flattened(elment, currDept-1) 
            } else{
                output.push(elment)
    
            }
           
        }
    }
    flattened(params, depth)

    return output
    
}


  