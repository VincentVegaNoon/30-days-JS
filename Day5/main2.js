//1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// import { webTechs } from "./webTechs"
// import { countries } from "./countries"
import {
    countries
} from './countries.js'
import {
    webTechs
} from './webTechs.js'
console.log(countries)
console.log(webTechs)

//4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
    console.log('Ethiopia!')
} else {
    countries.push('Ethiopia')
    console.log(countries)
}
//5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}
//6 Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//3 Exercise: Level 3
// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sorted = ages.sort()
console.log(sorted[0], sorted[sorted.length - 1])
//Find the median age(one middle item or two middle items divided by two)
console.log(sorted[sorted.length / 2])
//Find the average age(all items divided by number of items)
let sum = 0
for(let i = 0; i <= sorted.length - 1; i++) {
    sum += sorted[i]
}
console.log(sum / sorted.length)


//2 Slice the first ten countries from the countries array
console.log(countries.slice(0, 10))

//3 Find the middle country(ies) in the countries array
if ((countries.length + 1) % 2 == 0) {
    console.log(countries[Math.floor((countries.length) / 2)], countries[Math.floor((((countries.length) / 2) - 1))])
} else {
    console.log('nie')
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if ((countries.length - 1) % 2 == 0) {
   let arr = countries.splice(0, (countries.length - 1) / 2)
   let arrTwo = countries.splice(((countries.length - 1) / 2) - 2, countries.length)
   console.log(arr)
   console.log(arrTwo)
} else {
    console.log('nie')
}