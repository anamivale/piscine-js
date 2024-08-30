function get(obj, path) {
    const keys = path.split('.');

    return keys.reduce((acc, key) => {
        if (acc !== undefined && acc !== null) {
            // Check if the key is an array index
            if (!isNaN(key)) {
                key = parseInt(key, 10);
            }
            // Check if the key is a method call
            if (typeof acc[key] === 'function') {
                return acc[key];
            }
            return acc[key];
        }
        return undefined;
    }, obj);
}

// Example usage
const src = { a: [{ b: "t" }] };
const path = "a.0.b.toString";

console.log(get(src, path)); // Output: "t"
