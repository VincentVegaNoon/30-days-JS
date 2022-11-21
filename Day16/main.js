//1 Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const skillsTxt = JSON.stringify(skills)
console.log(skillsTxt)
//2 Stringify the age variable
let age = 250;
const ageTxt = JSON.stringify(age)
console.log(ageTxt)
//3 Stringify the isMarried variable
let isMarried = true
const isMarriedTxt = JSON.stringify(isMarried)
console.log(isMarriedTxt)
//4 Stringify the student object
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
const studentTxt = JSON.stringify(student, undefined, 4)
console.log(studentTxt)

// Exercises Level 2
//1 Stringify the students object with only firstName, lastName and skills properties
const studentTxtOnly = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(studentTxtOnly)

//Exercises Level 3
//1 Parse the txt JSON to object.

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
const txtObj = JSON.parse(txt, undefined, 4)
console.log(txtObj)
//2 Find the user who has many skills from the variable stored in txt.
function longestSkills(item) {
    const usersValues = Object.values(item)
    const usersKeys = Object.keys(item)
    let arr = []
    for (let i = 0; i < usersValues.length; i++) {
        if (arr.length < 1) {
            arr.push([usersKeys[i] ,usersValues[i].skills])
        } 
        if (usersValues[i].skills.length > arr[0][1].length) {
            arr.splice(0,1,[usersKeys[i] ,usersValues[i].skills])
        }
  }
  console.log(arr)
}
  longestSkills(txtObj)