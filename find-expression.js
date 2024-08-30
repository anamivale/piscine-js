

function findExpression(target) {
    if (target < 1) {
        return undefined;
    }
    
    // Helper function for recursion
    function recurse(current, operations) {
        // If current number matches the target, return the operations
        if (current === target) {
            return operations;
        }
        
        // If the current number exceeds the target, stop recursion
        if (current > target) {
            return undefined;
        }
        
        // Try adding 4
        let result = recurse(current + 4, operations + " " + add4);
        if (result !== undefined) {
            return result;
        }
        
        // Try multiplying by 2
        result = recurse(current * 2, operations + " " + mul2);
        if (result !== undefined) {
            return result;
        }
        
        // If neither operation results in the target, return undefined
        return undefined;
    }
    
    // Start the recursion from 1 with an empty operations string
    const result = recurse(1, "");
    
    // Return the result if found, else return undefined
    return result ? "1" + result : undefined;
}

