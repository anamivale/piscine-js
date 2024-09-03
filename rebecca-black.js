function isFriday(params) {

    return params.getDay() === 5
    
}

function isWeekend(params) {
    return params.getDay() === 0 || params.getDay() === 6
}

function isLeapYear(params) {
   return  params.getFullYear() % 4 === 0
    
}
function isLastDayOfMonth(params) {

    return params.getDate() === 30 || params.getDate() === 31 
    
}