//1. Create an empty object called dog
const dog = {}
//2 Print the the dog object on the console
console.log(dog)
//3Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = 'Reksio'
dog.legs = 4
dog.color = 'white'
dog.age = 5
dog.bark = function () {
    return `woof woof`
}
//4 Get name, legs, color, age and bark value from the dog object
const dogValues = Object.values(dog)
console.log(dogValues)

//5 Set new properties the dog object: breed, getDogInfo
dog.breed = 'labrador'
dog.getDogInfo = function() {
    return `I am ${this.name} i got ${this.legs} legs im ${this.color} ${this.bark()} `
}
console.log(dog.getDogInfo())

// Exercises: Level 2

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
  
//   console.log(Object.keys(users))
//   console.log(Object.values(users))
//   const abc = Object.values(users)
//   console.log(abc.length)

  function longestSkills() {
    const usersValues = Object.values(users)
    const usersKeys = Object.keys(users)
    let arr = []
    for (let i = 0; i < usersValues.length; i++) {
        console.log(usersValues[i].skills)
        if (arr.length < 1) {
            arr.push([usersKeys[i] ,usersValues[i].skills])
            console.log(arr)
        } 
        if (usersValues[i].skills.length > arr[0][1].length) {
            arr.splice(0,1,[usersKeys[i] ,usersValues[i].skills])
        }
    
    console.log(arr)
  }
}
  longestSkills()
  //2 Count logged in users, count users having greater than equal to 50 points from the following object.
//   const usersKeys = Object.keys(users)
//   console.log(users.Alex.points)




function loggedUsers() {
    
const usersValues = Object.values(users)
const usersKeys = Object.keys(users)
console.log(usersValues[1].points)
console.log(usersKeys.length)
let arr = []
for (let i = 0; i < usersValues.length; i++) {
    if (usersValues[i].points >= 50 || usersValues[i].isLoggedIn == true) {
        arr.push([usersKeys[i] ,usersValues[i].points])
    }
}
console.log(arr)
}
loggedUsers()
//3 Find people who are MERN stack developer from the users object

function usersMern() {
    
  const usersValues = Object.values(users)
  const usersKeys = Object.keys(users)
  console.log(usersValues[1].points)
  console.log(usersKeys.length)
  let arr = []
  for (let i = 0; i < usersValues.length; i++) {
      if (usersValues[i].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
          arr.push([usersKeys[i] ,'MERN user'])
      }
  }
  console.log(arr)
  }
  usersMern()

  //4 Set your name in the users object without modifying the original users object

users.Jan = {
    email: 'Jan@Jan.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 25,
    isLoggedIn: false,
    points: 10

}
//5 Get all keys or properties of users object


function getKeys() {
  const keys = Object.keys(users)
  const entries = Object.entries(users)
  console.log(entries)
  const valuesNameKeys = Object.values(entries)
  console.log(entries)
  console.log(valuesNameKeys)
  let arr = []

  for (i = 0; i < keys.length; i++) {
      let key = Object.keys(valuesNameKeys[i][1])
      arr.push(entries[i][0], key)
  }
  console.log(arr)
}
getKeys()
//6 Get all the values of users object
function getValues() {
  const keys = Object.keys(users)
  const entries = Object.entries(users)
  const valuesNameKeys = Object.values(entries)
  let arr = []
  for (let i = 0; i < keys.length; i++) {
    let value = Object.values(valuesNameKeys[i][1])
    arr.push((entries[i][0], value))
  }
  console.log(arr)
}
getValues()
//7 Use the countries object to print a country name, capital, populations and languages.

const countries = [{
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

function getCountries() {
  const keys = Object.keys(countries)
  const entries = Object.entries(countries)
  const valuesNameKeys = Object.values(countries)
  console.log(entries)
  for (let i = 0; i < keys.length; i++) {
    console.log([valuesNameKeys[i].name, valuesNameKeys[i].capital, valuesNameKeys[i].population, valuesNameKeys[i].languages])
  }
}
getCountries()