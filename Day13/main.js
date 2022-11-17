//1 Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)

//2 Display the user object as a table
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)
//3 Use console.group() to group logs
console.group('User')
console.log(user)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

//Exercises:Level 2
//1 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10)
//2 Write a warning message using console.warn()
console.warn('This is a warning')

//Exercises:Level 3
//1 Check the speed difference among the following loops: while, for, for of, forEach
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')
