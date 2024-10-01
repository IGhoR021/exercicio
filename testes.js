
import months from './months.js'

const days30 = months.filter( (months)=> {
    return months.days ==30
})

console.log(days30)

let toPrint= ''

days30.array.forEach(days30 => {
    toPrint += month.month + ','
    
});
let sumMonthDays = filterMonths.reduce( (prev, next) => {
    console(prev.days + next.days)
    return {days: prev + next.days}
})
console.log(sumMonthDays)

document.getElementById('main').innerHTML = toPrint.months

