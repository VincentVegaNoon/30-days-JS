//1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Jan'
let lastName = 'Kowalski'
let country = 'Poland'
let city = 'Warsaw'
let age = 25
let isMarried = false
let year = 2022
console.log(typeof year)

//2 Check if type of '10' is equal to 10

console.log(typeof '10' == typeof 10)

//3 Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10)

//4 Boolean value is either true or false.

console.log(4 > 3)
console.log(4 < 3)
//5 Find the length of python and jargon and make a falsy comparison statement.
let python = 'python'
let jargon = 'jargon'
console.log(python.length > jargon.length)

//6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
'There is no "on" in both dragon and python'
if(python.includes('on') && jargon.includes('on')) {
    console.log('true')
} else {
    console.log('false')
}

//7  Use the Date object to do the following activities
//What is the year today?
const now = new Date()
console.log(now.getFullYear()) 
//What is the month today as a number?
console.log(month = now.getMonth() + 1)
//What is the date today?
console.log(now.getDate())
//What is the day today as a number?
console.log(now.getDay())
//What is the hours now?
console.log(now.getHours())
//What is the minutes now?
console.log(now.getMinutes())
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now())

//Exercises: Level 2
//1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let triangleB = prompt('Enter number', 'number goes here')
// let triangleH = prompt('Enter number', 'number goes here')
// let triangleArea = 0.5 * triangleB * triangleH
// console.log(triangleArea)

//2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let triangleSideA = prompt('Enter number')
// let triangleSideB = prompt('Enter number')
// let triangleSideC = prompt('Enter number')
// let perimeter = parseInt(triangleSideA) + parseInt(triangleSideB) + parseInt(triangleSideC)
// console.log(perimeter)
//10 If the length of your name is greater than 7 say, your name is long else say your name is short.

console.log(firstName.length > 7 ? 'your name is long' : 'your name is short')

//11 Compare your first name length and your family name length and you should get this output.

console.log(firstName.length > lastName.length ? `Your first name, ${firstName} is longer than your family name, ${lastName}` : `Your first name, ${firstName} is shorter than your family name, ${lastName}`)

//12 Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25

console.log(myAge > yourAge ? `I am ${myAge - yourAge} years older than you.` : `You are ${yourAge - myAge} years older than me.`)

//13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let userBirthYear = parseInt(prompt())
// let passYear = now.getFullYear() - userBirthYear
// console.log(passYear >= 18 ? `You are ${passYear}. You are old enough to drive` : `You are ${passYear}. You are not old enough to drive`)

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let yearsUserLive = parseInt(prompt())
// let calculate = yearsUserLive * 365 * 24 * 60 * 60
// console.log(calculate)

//15 Create a human readable time format using the Date time object
let timeYear = now.getFullYear()
let timeMonth = (now.getMonth() + 1)
let timeDay = now.getDate()
let timeHours = now.getHours()
let timeMinutes = now.getMinutes()
console.log(`${timeYear}-${timeMonth}-${timeDay} ${timeHours}:${timeMinutes}`)

// Exercises: Level 3
//1 Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
console.log(`${timeYear}-${timeMonth < 10 ? `0${timeMonth}` : `${timeMonth}`}-${timeDay < 10 ? `0${timeDay}` : `${timeDay}`} ${timeHours  < 10 ? `0${timeHours}` : `${timeHours}`}:${timeMinutes < 10 ? `0${timeMinutes}` : `${timeMinutes}`}`)