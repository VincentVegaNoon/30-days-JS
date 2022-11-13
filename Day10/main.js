const countries = ['Finland', 'Sweden', 'Norway']

//1 create an empty set
const emptySet = new Set()
console.log(emptySet)
//2 Create a set containing 0 to 10 using loop
setOfNumbers = new Set()
for(let i = 0; i < 10; i++) {
    setOfNumbers.add(i)
}
console.log(setOfNumbers)
//3 Remove an element from a set
console.log(setOfNumbers.delete(1))
console.log(setOfNumbers.size)
//4 Clear a set
setOfNumbers.clear()
console.log(setOfNumbers)
//5 Create a set of 5 string elements from array
const languagesUnique = [
    'English',
    'Finnish',
    'German',
    'French',
    'Spanish',
    'Polish',
    'Italian',
  ]
const langSet = new Set()
for (let i = 0; i < 5; i++) {
    langSet.add(languagesUnique[i])
}
console.log(langSet)
//6 Create a map of countries and number of characters of a country
const countriesWithLength = countries.map(elem => [elem, elem.length])
const mapOfCountries = new Map(countriesWithLength)
console.log(mapOfCountries)
// Exercises:Level 2
//1 Find a union b
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let C = new Set(c)
console.log(C)
//2 Find a intersection b
let A = new Set(a)
let B = new Set(b)

let intersection = a.filter((num) => B.has(num))
let Intersection = new Set(intersection)
console.log(Intersection)
//3 Find difference a with b
let difference = a.filter((elem) => !B.has(elem))
let Difference = new Set(difference)
console.log(Difference)
