//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// const now = new Date()

// let userAge = parseInt(prompt())
// if (userAge < 18) {
//     console.log(`You are left with${18 - userAge} years to drive`)
// } else {
//     console.log('You are left with 3 years to drive.')
// }

//2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 30;
let yourAge = 25;
if (myAge > yourAge) {
    console.log(`You are ${myAge - yourAge} younger than me`);
} else {
    console.log(`You are ${yourAge - myAge} older than me`);
}

//3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.
let a = 4;
let b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${b} is greater than ${a}`);
}
console.log(a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`)

//4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = Math.floor(Math.random() * 11)
if ((number % 2) == 0) {
    console.log(`${number} is even`)
} else {
    console.log(`${number} is odd`)
}

// Exercises: Level 2
//1 Write a code which can give grades to students according to theirs scores:
let userScore = Math.floor(Math.random() * 101)
if (userScore >= 90) {
    console.log(`You get ${userScore} points, your grade is A`)
} else if (userScore > 80) {
    console.log(`You get ${userScore} points, your grade is B`)
} else if (userScore > 70) {
    console.log(`You get ${userScore} points, your grade is C`)
} else if (userScore > 60) {
    console.log(`You get ${userScore} points, your grade is D`)
} else if (userScore < 60) {
    console.log(`You get ${userScore} points, your grade is F`)
}

//2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is 
let monthsArray = ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
let randomMonth = Math.floor(Math.random() * monthsArray.length)
let month = monthsArray[randomMonth]
let autumn = 'September October November'
let winter = 'December, January, February'
let spring = 'March, April, May'
let summer = 'June, July, August'
if (autumn.includes(month)) {
    console.log('its autumn')
} else if (winter.includes(month)) {
    console.log('its winter')
} else if (spring.includes(month)) {
    console.log('its spring')
} else if (summer.includes(month)) {
    console.log('its summer')
} else {
    console.log('its not a month')
}
//1 Write a program which tells the number of days in a month.
let userMonth = prompt().toLowerCase()
switch (userMonth) {
    case 'january':
        console.log('January has 31 days.')
        break
    case 'february':
        console.log('February has 28 days.')
        break
}