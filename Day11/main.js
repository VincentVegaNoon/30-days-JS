//1 Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity,bodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity,bodyTemp, waterBoilingTemp)
//2 Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countriesSmall = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, swe, den, nor] = countriesSmall
console.log(fin, est, swe, den, nor)
//3 Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  let {width, height, area, perimeter} = rectangle
  console.log(width, height, area, perimeter)

  // Exercises: Level 2

  //1 Iterate through the users array and get all the keys of the object using destructuring
  const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]
       for (const {name, scores, skills, age} of users) {
        console.log(name, scores, skills, age)
    }
//2 Find the persons who have less than two skills

    for (const {name, skills} of users) {
        if (skills.length < 2) {
            console.log(`${name} has less than two skills`)
        }
    }
// Exercises: Level 3
//1 Destructure the countries object print name, capital, population and languages of all countries

import {
    countries
} from './countries.js'

for (const {name, capital, population, languages} of countries) {
   console.log(name, capital, population, languages)
}
//2 A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const studentOne = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores] = studentOne
  console.log(name, skills, skills[2], scores[2], skills[3], scores[3] )
//3 Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
function convertArrayToObject(arr) {
    const copiedArr = {...arr}
console.log(copiedArr)
}
convertArrayToObject(students)

//4 Copy the student object to newStudent without mutating the original object. In the new object add the following ?
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
  const copiedStudent = {...student}
  //Add Bootstrap with level 8 to the front end skill sets


console.log(copiedStudent)