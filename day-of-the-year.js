// Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.

function dayOfTheYear(params) {
  let current = params.getTime();
  let x = params.getFullYear();
    let start = new Date()
    if (x === 1){
        start = new Date("0001-01-01")
    }
    else {
        start = new Date(x, 0, 1)
    }

  return parseInt((current - start) / 86400000) +1;
}
