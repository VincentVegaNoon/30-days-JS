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

    for (i = 0; i < keys.length; i++) {
        let a = Object.values(entries[i])
        // console.log(a[0], a[1].skills)
        if (arr.length < 1) {
            arr.push(a[0], a[1].skills.length)

        }
        if (arr[1] < a[1].skills.length) {
            arr.splice(0, 2, a[0], a[1].skills.length)
        }
    }
    console.log(arr)
}
findUserSkillsLenght()

//3 Find people who are MERN stack developer from the users object

function findUserSkillsMern() {
    const entries = Object.entries(users)
    let valuesNameKeys = Object.values(entries)
    // console.log(valuesNameKeys)
    const keys = Object.keys(users)
    let arr = []

    for (i = 0; i < keys.length; i++) {
        let a = Object.values(entries[i])
        // console.log(a[0], a[1].skills)
        if (a[1].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
            arr.push(a[0])
        }
    }
    console.log(arr)
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
    }
    console.log(arr)
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
        name: '??land Islands',
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
    // console.log(valuesNameKeys[1])
    for (i = 0; i < keys.length; i++) {
        console.log(valuesNameKeys[i].name, valuesNameKeys[i].capital, valuesNameKeys[i].languages, valuesNameKeys[i].population)
    }
}
getCountries()

// Exercises: Level 3
//1 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    incomes: [1000, 2000, 3000, 3000],
    expenses: [1000, 2000, 1000],
    funds: 0,
    totalIncome: function () {
        let totalIncome = 0
        for (i = 0; i < this.incomes.length; i++) {
            totalIncome += this.incomes[i]
        }
        return totalIncome
    },
    totalExpense: function () {
        let totalExpense = 0
        for (i = 0; i < this.expenses.length; i++) {
            totalExpense += this.expenses[i]
        }
        return totalExpense
    },
    addIncome: function (elem = 1000) {
        personAccount.incomes.push(elem)
        console.log(this.incomes)
    },
    addExpense: function (elem = 1000) {
        personAccount.expenses.push(elem)
        console.log(this.expenses)
    },
    accountBalance: function () {
        let funds = personAccount.totalIncome() - personAccount.totalExpense()
        return funds
    },
    accountInfo: function () {
        console.log(`${this.firstName} ${this.lastName} you have ${this.accountBalance()} funds`)
    }
}
const usersTwo = [{
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
// 2 Imagine you are getting the above users collection from a MongoDB database. 
//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// const keys = Object.keys(usersTwo)
//     const values = Object.values(usersTwo)
//     console.log(values[1].username)

function signUp(elem = 'Alex', password = 'password') {
    const keys = Object.keys(usersTwo)
    const values = Object.values(usersTwo)
    console.log(values[1].username)
    const now = new Date();
    let flag = true
    for(let i = 0; i < keys.length; i++) {
    if (values[i].username.includes(elem)) {
        return console.log('This user already exist')
        flag = false
    }}
    if (flag == true) {
    let user = {
        _id: (Math.random() + 1).toString(36).substring(6),
        username: elem,
        email: `${elem}@${elem}.com`,
        password: password,
        createdAt: `${now.getDate()} ${now.getMonth()+1} ${now.getFullYear()}`,
        isLoggedIn: true,
    }
    usersTwo.push(user)
}
console.log(usersTwo)
}
signUp('Marek', 'strongpassword')

//b. Create a function called signIn which allows user to sign in to the application

// function signIn() {
//     let elem1 = prompt('username')
//     let elem2 = prompt('password')
//     console.log(elem1) 
//     console.log(elem2) 
//     const keys = Object.keys(usersTwo)
//     const values = Object.values(usersTwo)
//     let flag = true
//     for(let i = 0; i < keys.length; i++) {
//         if (values[i].username.includes(elem1) && values[i].password.includes(elem2)) {
//             flag = false
//              console.log('thats correct')
//              alert('signed')
//         }}
//         if (flag == true) {
//             alert('wrong password or username')
//         }
// }
// signIn()

//3 The products array has three elements and each of them has six properties. 
//a. Create a function called rateProduct which rates the product 
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]


function rateProduct(product, star) {
    if (star > 5 || star < 1) {
        alert('rate can be 1-5')
    }
    const keys = Object.keys(products)
    const values = Object.values(products)
    console.log(values[0].ratings)
    let rate = {
        userId: '1232ds',
        rate: star
    }
    for (i = 0; i < keys.length; i++) {
        console.log(values[i].name)
      if(values[i].name.includes(product)) {
        products[i].ratings.push(rate)
      }
    }
}
rateProduct('TV', 5)

// b. Create a function called averageRating which calculate the average rating of a product
// const keys = Object.keys(products)
//     const values = Object.values(products)
//     console.log(values[0].ratings.length)

function averageRating(product) {
    const keys = Object.keys(products)
    const values = Object.values(products)
    let rateAverage = 0
    let divine = 0
    for (i = 0; i < keys.length; i++) {
        console.log(values[i].ratings)
        if (values[i].name.includes(product)) {
            for (j = 0; j < values[i].ratings.length; j++) {
                divine = values[i].ratings.length
                rateAverage += values[i].ratings[j].rate
            }
        }
    }
   console.log(rateAverage/divine)
}
averageRating('TV')

//4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const keys = Object.keys(products)
    const values = Object.values(products)
    console.log(values[2].likes.length)

function likeUnlikeProduct(product, id) {
    const keys = Object.keys(products)
    const values = Object.values(products)
    let flag = true
    for (i = 0; i < keys.length; i++) {
        if (values[i].name.includes(product)) {
            for (j = 0; j < values[i].likes.length; j++) {
                if(values[i].likes[j].includes(id)) {
                    flag = false
                     values[i].likes.splice(j, 1)
                }
               if(values[i].likes.length < 1 || this.flag == true) {
                    values[i].likes.push(id)
                }
            }
        }
    }
}
likeUnlikeProduct('TV', 'fg12cy')