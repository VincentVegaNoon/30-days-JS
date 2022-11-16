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
//1 Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const getWords = array => {
    let arr = array.split(' ')
    const occurences = arr.reduce((acc, name) => {
        const word = name 
        acc[word] = ( acc[word] || 0 ) + 1
        return acc
      }, {})
    
    return Object.keys(occurences).sort().map(elem => ({elem, count: occurences[elem]}))
  }
  
  
  console.log(getWords(paragraph))

  // Exercises: Level 3
 //1 Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
 sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
 const cleanText = text => {
    let clean = /[%@&$#?!;]/g
    let textCopy = text.replace(clean, '')
    console.log(textCopy)
    let arr = textCopy.split(' ')
    let occurances = {}
    for (let word of arr) {
        if (occurances[word]) {
            occurances[word]++;
        } else {
          occurances[word] = 1;
        }
      }
      console.log(occurances)
 }
  
  
  cleanText(sentence)