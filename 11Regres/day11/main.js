//3 Use forEach to console.log each country in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Ethiopia']

const countriesOne = countries.forEach(country => console.log(country))
//4 Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesOne = names.forEach(elem => console.log(elem))
//5 Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersOne = numbers.forEach(num => console.log(num))
//6 Use map to create a new array by changing each country to uppercase in the countries array.
const countriesToUpper = countries.map(elem => elem.toUpperCase()
)
console.log(countriesToUpper)
//7 Use map to create an array of countries length from countries array.
const countriesLength = countries.map(elem => elem.length)
console.log(countriesLength)
//8 Use map to create a new array by changing each number to square in the numbers array
const countriesToSquare = numbers.map(elem => elem * 2)
console.log(countriesToSquare)
//9 Use map to change to each name to uppercase in the names array
const namesToUpper = names.map(elem => elem.toUpperCase)
console.log(namesToUpper)
//10 Use map to map the products array to its corresponding prices.

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  

const productsMatch = products.map(elem => [elem.product, elem.price])
console.log(productsMatch)

//11 Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(country => country.toLowerCase().includes('land'))
console.log(countriesWithLand)
//12 Use filter to filter out countries having six character.
const countriesWithSix = countries.filter(elem => elem.length == 6)
console.log(countriesWithSix)
//13 Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixAndMore = countries.filter(elem => elem.length >= 6)
console.log(countriesWithSixAndMore)
//14 Use filter to filter out country start with 'E';
const countryWithE = countries.filter(elem => elem.startsWith('E'))
console.log(countryWithE)
//15 Use filter to filter out only prices with values.
const pricesWithValue = products.filter(elem => elem.price > 0 ? [elem.product, elem.price] : '')
console.log(pricesWithValue)
//16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    const filtered = arr.filter(elem => typeof elem == 'string' ? elem : '')
    console.log(filtered)
}
getStringLists([1,2,3,'four','five',6,'seven'])
//17 Use reduce to sum all the numbers in the numbers array.
const sumNumbers = numbers.reduce((a,b) => a + b, 0)
console.log(sumNumbers)
//18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countriesConcat = countries.reduce((a,b) => a + ', ' + b)
console.log(countriesConcat)
//20 Use some to check if some names' length greater than seven in names array

const nameGreaterSeven = names.some(elem => elem.length > 7)
console.log(nameGreaterSeven)

//21 Use every to check if all the countries contain the word land
const countriesLand = countries.every(elem => elem.includes('land'))
console.log(countriesLand)
//23 Use find to find the first country containing only six letters in the countries array
// const countriesFindSix = countries.find(elem => elem.length == 6) 
// console.log(countriesFindSix)
//24 Use findIndex to find the position of the first country containing only six letters in the countries array
const countriesFindSix = countries.findIndex(elem => elem.length == 6)
console.log(countriesFindSix)
//25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries.findIndex(elem => elem.includes('Norway'))
console.log(findNorway)
//26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findRussia = countries.findIndex(elem => elem.includes('Russia'))
console.log(findRussia)

//Exercises: Level 2
//1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const productsTotal = products.map(elem => elem.price).filter(elem => elem > 0).reduce((acc, cur) => acc + cur, 0)
console.log(productsTotal)
//2 Find the sum of price of products using only reduce reduce(callback))
const productsTotalSum = products.reduce((acc, cur) => parseInt(acc) + cur.price, 0)
console.log(productsTotalSum)
//3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

import {
    countriesTwo
} from './countries.js'
function categorizeCountries(arr) {
   let countriesLand = arr.filter(elem => elem.name.includes('land'))
   console.log(countriesLand)
}
categorizeCountries(countriesTwo)

//4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function startsWithLetter(arr) {
   let countriesWithA = arr.filter((country) => country.name.startsWith('A'))
    let array = ['A', countriesWithA]
    console.log(array)
}
startsWithLetter(countriesTwo)
//5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

function getFirstTenCountries (arr) {
    let array = []
for (let i = 0; i < 10; i++) {
    array.push(arr[i])
}
console.log(array)
}
getFirstTenCountries(countriesTwo)
//6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries (arr) {
    let array = []
for (let i = arr.length - 1; i > (arr.length - 11); i--) {
    array.push(arr[i])
}
console.log(array)
}
getLastTenCountries(countriesTwo)
//7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const getStartingLetters = arr => {
    const occurences = arr.reduce((acc, {name}) => {
        const startingLetter = name[0] 
        acc[startingLetter] = ( acc[startingLetter] || 0 ) + 1
        return acc
      }, {})
    
    return Object.keys(occurences).sort().map(letter => ({letter, count: occurences[letter]}))
  }
  
  
  console.log(getStartingLetters(countriesTwo))