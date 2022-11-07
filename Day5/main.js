  //1 Declare an empty array;
let empytArray = []

//2 Declare an array with more than 5 number of elements
 let fiveArray = [1,2,3,4,5]

 //3 Find the length of your array
console.log(fiveArray.length)

//4 Get the first item, the middle item and the last item of the array
let fiveLength = fiveArray.length
console.log(fiveArray[fiveLength - 1], fiveArray[Math.floor((fiveArray.length / 2))], fiveArray[fiveLength - fiveLength])

//5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    'Asabeneh',
    'Kowalski',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
]
console.log(mixedDataTypes.length)
//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//7 Print the array using console.log()
console.log(itCompanies)

//8 Print the number of companies in the array
console.log(itCompanies.length)

//9 Print the first company, middle and last company
let itCompaniesLength = itCompanies.length
console.log(itCompanies[itCompanies.length - 1], itCompanies[Math.floor((itCompanies.length / 2))], itCompanies[itCompanies.length - itCompanies.length])

//10 Print out each company
console.log(itCompanies.join(', '))

//11 Change each company name to uppercase one by one and print them out
for (let i = 0; i <= itCompanies.length - 1; i++) {
    console.log(itCompanies[i].toUpperCase())
}

//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]} are big IT companies`)

//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let randomCompanie = itCompanies[Math.floor(Math.random() * itCompanies.length)]
// let randomCompanie = 'dsa'
if (itCompanies.includes(randomCompanie)) {
    console.log(randomCompanie)
} else {
    console.log('company is not found')
}

//14 Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i <= itCompanies.length - 1; i++){
if(itCompanies[i].includes('oo')) {
    console.log(itCompanies[i])
}}

//15 Sort the array using sort() method
console.log(itCompanies.sort())

//16 Reverse the array using reverse() method
console.log(itCompanies.reverse())

//17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

//18 Slice out the last 3 companies from the array

console.log(itCompanies.slice(itCompanies.length - 3, 3))

//19 Slice out the middle IT company or companies from the array
let middle = Math.floor((itCompanies.length / 2))
console.log(itCompanies.slice(middle, middle + 1))

//20 Remove the first IT company from the array
console.log(itCompanies.shift())

//21 Remove the middle IT company or companies from the array
console.log(itCompanies.slice(middle, middle + 1))

//22 Remove the last IT company from the array
console.log(itCompanies.pop())

//23 Remove all IT companies
let itCompanies2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies2)
console.log(itCompanies2.slice(0, itCompanies2.length))

// Exercise: Level 2
// //1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// // import { webTechs } from "./webTechs"
// // import { countries } from "./countries"
// import {
//     countries
// } from './countries.js'
// import {
//     webTechs
// } from './webTechs.js'
// console.log(countries)
// console.log(webTechs)
//2 First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let clean = /[,.]/g
let cleaned = text.replace(clean, '')
let textDone = cleaned.split(' ')
console.log(textDone)
//3 In the following shopping cart add, remove, edit items
//add 'Meat' in the beginning of your shopping cart if it has not been already added
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart[0].includes('Meat')) {
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)
//add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart[shoppingCart.length - 1].includes('Sugar')) {
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)
// remove 'Honey' if you are allergic to honey
let allergic = true
let honeyIndex = shoppingCart.indexOf('Honey')
if (allergic == true)  {
    console.log(shoppingCart.slice(honeyIndex, honeyIndex + 1))
} 
//modify Tea to 'Green Tea'
let teaIndex = shoppingCart.indexOf('Tea')
shoppingCart[teaIndex] = 'Green tea'
console.log(shoppingCart)