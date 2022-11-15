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
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
const sortedPoints = points.sort(function (a, b){
    return a - b
})
console.log(sortedPoints)
function getDiffrence(x, z) {
    let a = parseInt(x)
    let b = parseInt(z)
    if(a < 0 || b < 0) {
        let c = a + b
        let sum = b + c
        console.log(sum)
    }
    else {
       return a - b
    }
}
getDiffrence(sortedPoints[0], sortedPoints[sortedPoints.length - 1])

//3 Write a pattern which identify if a string is a valid JavaScript variable

function isValidVariable(variable) {
    let clean = /[^0-9][%@&#?!;-]/g
    let variableCopy = variable.replace(clean, '')
    if (variable.length > variableCopy.length) {
        console.log(false)
    } else {
        console.log(true)
    }
}
isValidVariable('1first_name')

// Exercises: Level 2
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
