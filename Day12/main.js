//1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let patternEarns = /\d+/g
let txtEarns =  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const earnings = txtEarns.match(patternEarns)
let salaryAnnual = earnings[0] * 12
let bonus = earnings[1]
let coursesAnnual = earnings[2] * 12
let totalIncome = salaryAnnual + bonus + coursesAnnual
console.log(salaryAnnual)

//2 The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
