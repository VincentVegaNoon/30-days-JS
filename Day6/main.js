//1 Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
let j = 0
while (j <= 10) {
    console.log(j)
    j++
}

let k = 0
do {
    console.log(k)
    k++
} while (k <= 10)

//2 Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let l = 10; l >= 0; l--) {
    console.log(l)
}

//3 Iterate 0 to n using for loop
let n = 5
for (let i = 0; i <= n; i++) {
    console.log(i)
}
//4 Write a loop that makes the following pattern using console.log():
let hashtag = ''
for (let i = 0; i <= 7; i++) {
    hashtag += '#'
    console.log(hashtag)
}

//5  Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

//6 Using loop print the following pattern
for (let j = 0; j <= 1; j++) {
    console.log('i i^2 i^3')
    for (let i = 0; i <= 10; i++) {
        console.log(`${i} ${i * i} ${i * i * i}`)
    }
}
//7 Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
    if(i%2 == 0) {
        console.log(i)
    }
}
//8 Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
    if(i%2 == 0) {
    } else {
        console.log(i)
    }
}
//10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfHundred = 0
for (let i = 0; i <= 100; i++) {
    sumOfHundred += i
}
console.log(sumOfHundred)
//11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even = 0
let odds = 0
for (let i = 0; i <= 100; i++) {
    if(i%2 == 0) {
        even += i
    } else {
        odds += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odds}.`)

//12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let evenAndOddsArray = []
evenAndOddsArray.push(even)
evenAndOddsArray.push(odds)
console.log(evenAndOddsArray)

//13 Develop a small script which generate array of 5 random numbers
let randomNumbersArray = []
for (i = 0; i <= 5; i++) {
    let random = Math.floor(Math.random() * 11)
    randomNumbersArray.push(random)
}
console.log(randomNumbersArray)

//14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomNumbersArrayUnique = []

for (i = 0; i <= 5; i++) {
    let random = Math.floor(Math.random() * 11)

      if(randomNumbersArrayUnique.includes(random)) {
        i--
      } else {
        randomNumbersArrayUnique.push(random)
      }
}
console.log(randomNumbersArrayUnique)

//15 Develop a small script which generate a six characters random id:

let r = (Math.random() + 1).toString(36).substring(7);
console.log(r);

//Exercises: Level 2
//1 Develop a small script which generate any number of characters random id:

let randomId = (Math.random() + 1).toString(36).substring(Math.random() * 13);
console.log(randomId);

//2 Write a script which generates a random hexadecimal number.

let items = ["a", "b", "c", "d", "e", "f"];
let item = items[Math.floor(Math.random() * items.length)];
console.log(item);

let random = Math.random().toString().slice(2, 6);
console.log(`#${item}${random}${item}`);

//3 Write a script which generates a random rgb color number.
let rgbArray = []
for (i = 0; i <= 3; i++) {
    let rgbRandom = Math.floor(Math.random() * 256)
    rgbArray.push(rgbRandom)
}
console.log(`rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`)
//4 Using the above countries array, create the following new array.
let countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let arr = []
for (let i = 0; i <= countries.length - 1; i++){
    arr.push(countries[i].toUpperCase())
}
console.log(arr)

//5 Using the above countries array, create an array for countries length'.
let arrLength = []
for (let i = 0; i <= countries.length - 1; i++){
    arrLength.push(countries[i].length)
}
console.log(arrLength)

//6 Use the countries array to create the following array of arrays:

let arrOfArr = []
for (let i = 0; i <= countries.length - 1; i++){
    let arr = []
    arr.push(countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length)
    arrOfArr.push(arr)
}
console.log(arrOfArr)

//7 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let arrLand = []
for (let i = 0; i <= countries.length - 1; i++) {
    if (countries[i].includes('land')) {
        arrLand.push(countries[i])
    } else if (i == 10 && arrLand.length == 0) {
        console.log('All these countries are without land')
    }
}
console.log(arrLand)

//8 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let arrIa = []
for (let i = 0; i <= countries.length - 1; i++) {
    if (countries[i].includes('ia')) {
        arrIa.push(countries[i])
    } else if (i == 10 && arrIa.length == 0) {
        console.log('These are countries ends without ia')
    }
}
console.log(arrIa)
//9 Using the above countries array, find the country containing the biggest number of characters.

let arrLongestCountry = []
for (i = 0; i < countries.length; i++) {
    if (arrLongestCountry.length == 0) {
        arrLongestCountry.push(countries[i])

    } else if(arrLongestCountry[0].length == countries[i].length) {
        arrLongestCountry.push(countries[i])
    } else if(arrLongestCountry[0].length < countries[i].length) {
        arrLongestCountry.splice(0, arrLongestCountry.length)
        arrLongestCountry.push(countries[i])
    }
}
console.log(arrLongestCountry)

//10 Using the above countries array, find the country containing only 5 characters.

let arrFiveChars = []
for (const country of countries) {
    if (country.length == 5) {
        arrFiveChars.push(country)
    } else{}
}
console.log( arrFiveChars)

//11 Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let arrLongestWebTechs = []
for (i = 0; i < webTechs.length; i++) {
    if (arrLongestWebTechs.length == 0) {
        arrLongestWebTechs.push(webTechs[i])

    } else if(arrLongestWebTechs[0].length == webTechs[i].length) {
        arrLongestWebTechs.push(webTechs[i])
    } else if(arrLongestWebTechs[0].length < webTechs[i].length) {
        arrLongestWebTechs.splice(0, arrLongestWebTechs.length)
        arrLongestWebTechs.push(webTechs[i])
    }
}
console.log(arrLongestWebTechs)
//12 Use the webTechs array to create the following array of arrays:
let arrOfWebTechs = []
for (const webTech of webTechs) {
    let arr = []
    arr.push(webTech, webTech.length)
    arrOfWebTechs.push(arr)
}
console.log(arrOfWebTechs)

//13 An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let mernAcronym = ''
for (const mern of mernStack) {
    mernAcronym += mern[0]
}
console.log(mernAcronym)
//14 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

//15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruitArray = ['banana', 'orange', 'mango', 'lemon']
let reverse = []
for (i = 0; i <= fruitArray.length - 1; i++) {
    reverse.push(fruitArray[(fruitArray.length- 1) - i])
}

console.log(fruitArray = reverse)
//16 Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  for (i = 0; i < fullStack[0].length; i++) {
    console.log(fullStack[0][i].toUpperCase())
    if (i == fullStack[0].length - 1) {
        for (j = 0; j <= fullStack[1].length - 1; j++) {
            console.log(fullStack[1][j].toUpperCase())
        }
    } else {}
  }

 // Exercises: Level 3
//1 Copy countries array(Avoid mutation)
let sortedCountries = []
for (i = 0; i < countries.length; i++) {
    sortedCountries.push(countries[i])
}
//2 Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
sortedCountries.sort()
console.log(sortedCountries)
//3 Sort the webTechs array and mernStack array
webTechs.sort()
mernStack.sort()
