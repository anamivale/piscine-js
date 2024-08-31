// getURL: returns all URLs present in the dataSet
function getURL(params) {
    let regex = /(https?:\/\/)[a-z0-9.\/]+/g
    let x = params.match(regex)
 
    return x
}
// greedyQuery: returns URLs from the dataSet, with at least 3 query parameters.
function greedyQuery(params) {
    let regex = /(https:\/\/|http:\/\/)([a-z0-9.\/]+)/g
    let x = params.match(regex)
    let y = []
    y = x
    return y
}
// notSoGreedy: returns URLs from the dataSet, with at least 2, but not more then 3 query parameters.
function notSoGreedy(params) {}
console.log(getURL("qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you"));