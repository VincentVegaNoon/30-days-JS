//1 Create an empty object called dog
const dog = {}
//2 Print the the dog object on the console
console.log(dog)
//3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.legs = 4
dog.color = 'brown'
dog.age = 4
dog.bark = function () {
    return `woof woof`
}
//4 Get name, legs, color, age and bark value from the dog object
const dogValues = Object.values(dog)
console.log(dogValues)
//5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'labrador'
dog.getDogInfo = function () {
    return `Im ${this.breed} i got ${this.legs} legs im ${this.color}, im ${this.age} years old ${this.bark()}`
}
console.log(dog.getDogInfo())

//Exercises: Level 2
//1 Find the person who has many skills in the users object.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
// console.log(users.Alex.skills.length)
// const skillsValues = Object.values(users)
// console.log(skillsValues)
// const a = Object.values(skillsValues[1].skills)
// console.log(a)
// console.log(a.length)
// const keys = Object.keys(users)
// console.log(keys.length)

// function findUserSkillsLenght() {
//     const skillsValues = Object.values(users)
//     const keys = Object.keys(users)
//     let a = Object.values(skillsValues[1].skills)
//     let arr = []
//     for (i = 0; i < keys.length; i++) {
//         console.log(Object.values(skillsValues[i].skills))
//         let b = Object.values(skillsValues[i].skills)
//         let c = b.length
//         if (arr.length < 1){
//             arr.push(c)
//             console.log(arr.length)
//             console.log(arr[0])
//         }
//         if (arr[0] < c) {
//             arr.splice(0,1,c)
//         } else {}
//     }console.log(arr)
// }
// findUserSkillsLenght()
// const entries = Object.entries(users)
// console.log(entries)
// const valuesNameKeys = Object.values(entries[6])
// console.log(valuesNameKeys[0], valuesNameKeys[1].skills.includes('MongoDB','Express', 'React', 'Node'))


function findUserSkillsLenght() {
    const entries = Object.entries(users)
    let valuesNameKeys = Object.values(entries)
    // console.log(valuesNameKeys)
    const keys = Object.keys(users)
    let arr = []

    for (i = 0; i < keys.length; i++){
        let a = Object.values(entries[i])
        // console.log(a[0], a[1].skills)
        if(arr.length < 1) {
            arr.push(a[0], a[1].skills.length)
            
        }
        if (arr[1] < a[1].skills.length) {
            arr.splice(0,2,a[0], a[1].skills.length)
        }
    } console.log(arr)
}
findUserSkillsLenght()

//3 Find people who are MERN stack developer from the users object

function findUserSkillsMern() {
    const entries = Object.entries(users)
    let valuesNameKeys = Object.values(entries)
    // console.log(valuesNameKeys)
    const keys = Object.keys(users)
    let arr = []

    for (i = 0; i < keys.length; i++){
        let a = Object.values(entries[i])
        // console.log(a[0], a[1].skills)
        if(a[1].skills.includes('MongoDB','Express', 'React', 'Node')) {
            arr.push(a[0])
        }
    } console.log(arr)
}
findUserSkillsMern()

//4 Set your name in the users object without modifying the original users object

users.Jan = {
    email: 'jan@jan.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 26,
        isLoggedIn: true,
        points: 10
}
console.log(users)
//5 Get all keys or properties of users object
const entries = Object.entries(users)
const valuesNameKeys = Object.values(entries[2])
console.log(entries)
console.log(valuesNameKeys[1])
console.log(entries[1][0])

function getKeys() {
    const keys = Object.keys(users)
    const entries = Object.entries(users)
    const valuesNameKeys = Object.values(entries)
    console.log(entries)
    console.log(valuesNameKeys)
let arr = []

for (i = 0; i < keys.length; i++) {
    let key = Object.keys(valuesNameKeys[i][1])
    arr.push(entries[i][0], key)
} console.log(arr)
}
getKeys()
//6 Get all the values of users object
function getValues() {
    const keys = Object.keys(users)
    const entries = Object.entries(users)
    const valuesNameKeys = Object.values(entries)
    console.log(entries)
    console.log(valuesNameKeys)
let arr = []

for (i = 0; i < keys.length; i++) {
    let key = Object.values(valuesNameKeys[i][1])
    arr.push(entries[i][0], key)
} console.log(arr)
}
getValues()
//7 Use the countries object to print a country name, capital, populations and languages.
const countries = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://restcountries.eu/data/ala.svg',
      currency: 'Euro'
    }
]
function getCountries(){
    const keys = Object.keys(countries)
    const entries = Object.entries(countries)
    const valuesNameKeys = Object.values(countries)
    // console.log(valuesNameKeys[1])
    for (i = 0; i < keys.length; i++) {
        console.log(valuesNameKeys[i].name, valuesNameKeys[i].capital, valuesNameKeys[i].languages, valuesNameKeys[i].population)
    }
} 
getCountries()
