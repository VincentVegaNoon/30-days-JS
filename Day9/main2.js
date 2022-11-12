import {
    countries
} from './countries.js'

//3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

function categorizeCountries(arr) {
    arr = countries.filter((country) => country.name.includes('ia'))
    console.log(arr)
}
categorizeCountries(countries)

////4 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function startsWithLetter(arr) {
    arr = countries.filter((country) => country.name.toLowerCase().includes('a'))
    return ['A', arr.length]
}
console.log(startsWithLetter(countries))

//5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(arr) {
    let newArr = []
for (let i = 0; i <10; i++) {
    newArr.push(countries[i].name)
}
console.log(newArr)
}
getFirstTenCountries(countries)
//6 Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries(arr) {
    let newArr = []
for (let i = countries.length - 1; i > countries.length - 11; i--) {
    newArr.push(countries[i].name)
}
console.log(newArr)
}
getLastTenCountries(countries)
//7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
  const getStartingLetters = arr => {
    const occurences = arr
      .reduce((acc, {name}) => {
        const startingLetter = name[0]
        acc[startingLetter] = ( acc[startingLetter] || 0 ) + 1
        return acc
      }, {})
    
    return Object
      .keys(occurences)
      .sort()
      .map(letter => ({letter, count: occurences[letter]}))
  }
  
  
  console.log(getStartingLetters(countries))

//Exercises: Level 3
//1 Use the countries information, in the data folder. Sort countries by name, by capital, by population
//By name
const sortByName = countries.map((elem) => elem.name).sort()
console.log(sortByName)
//By capital
const sortByCapital = countries.map((elem) => elem.capital).sort()
console.log(sortByCapital)
//by population
const sortByPopulation = countries.map((elem) => elem.population).sort()
console.log(sortByPopulation)

// *** Find the 10 most spoken languages:
// const mostSpokenLanguage = arr => {
//   const occurences = arr
//     .reduce((acc, {languages}) => {
//       const spokenlanguage = languages
//       acc[spokenlanguage] = ( acc[spokenlanguage] || 0 ) + 1
//       return acc
//     }, {})
  
//   return Object
//     .keys(occurences)
//     .sort()
//     .map(language => ({language, count: occurences[language]}))
// }
// console.log(mostSpokenLanguage(countries))

const mostSpokenLanguage = countries.map(elem => [elem.name, elem.languages])

console.log(mostSpokenLanguage)