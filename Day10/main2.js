import {
    countries
} from './countries.js'

//Exercises:Level 3
//1. How many languages are there in the countries object file.
function howManyLaguages(arr) {
const keys = Object.keys(arr)
    const values = Object.values(arr)
let array = []
for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < values[i].languages.length; j++) {
        array.push(values[i].languages[j])
    }
}
const setOfLanguages = new Set(array.sort())
console.log(setOfLanguages)
}
howManyLaguages(countries)

//2 *** Use the countries data to find the 10 most spoken languages:
function tenMostSpokenLanguages(arr, top = 10) {
const counts = []
const count = {}
const keys = Object.keys(arr)
    const values = Object.values(arr)
let array = []
for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < values[i].languages.length; j++) {
        array.push(values[i].languages[j])
    }
}
array.sort()
const langSet = new Set(array)
console.log(langSet)
for (const lang of langSet) {
    const filteredLang = array.filter((elem) => elem === lang)
    counts.push({lang: lang, count: filteredLang.length})
}
let toSort = counts.map(elem => [elem.lang, elem.count])
let abc = toSort.sort(function (a, b) {
    return b[1] - a[1]
})
let showArray = []
for (let k = 0; k < top; k++) {
    showArray.push([abc[k]])
}
console.log(showArray)
}

tenMostSpokenLanguages(countries, 10) 
