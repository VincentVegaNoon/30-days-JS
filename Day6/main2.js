import {
        countries
    } from './countries.js'

   // 4 Extract all the countries contain the word 'land' from the countries array and print it as array
let arrLand = []
for (let i = 0; i <= countries.length - 1; i++) {
    if (countries[i].includes('land')) {
        arrLand.push(countries[i])
    } else if (i == 10 && arrLand.length == 0) {
        console.log('All these countries are without land')
    }
}
console.log(arrLand)
//5 Find the country containing the hightest number of characters in the countries array
let arrLongestCountry = []
for (let i = 0; i < countries.length; i++) {
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

//6 Extract all the countries contain the word 'ia' from the countries array and print it as array
let arrIa = []
for (let i = 0; i <= countries.length - 1; i++) {
    if (countries[i].includes('ia')) {
        arrIa.push(countries[i])
    } else if (i == 10 && arrIa.length == 0) {
        console.log('These are countries ends without ia')
    }
}
console.log(arrIa)
//7 Extract all the countries containing only four characters from the countries array and print it as array
let arrOfFour = []
for (const country of countries) {
    if(country.length == 4) {
        arrOfFour.push(country)
    } else{}
}
console.log(arrOfFour)

//8 Extract all the countries containing two or more words from the countries array and print it as array
let arrTwoWords = []
for (const country of countries) {
    if(country.includes(' ')) {
        arrTwoWords.push(country)
    } else{}
}
console.log(arrTwoWords)
//9 Reverse the countries array and capitalize each country and stored it as an array
let arrCapitalized = []
for (const country of countries) {
    arrCapitalized.push(country.toUpperCase())
}
arrCapitalized.reverse()
console.log(arrCapitalized)