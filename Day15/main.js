//1 Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(
        name = 'Bob',
        age = 4,
        color = 'black',
        legs = 4,
        skills = [],
    ) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.skills = skills
    }
    getFullInfo() {
        const fullInfo = this.name + ' ' + this.age + ' ' + this.color
        return fullInfo
    }
    get getAge() {
        return this.age
    }
    set setSkills(skill) {
        this.skills.push(skill)
    }
}
const animal2 = new Animal()
const animal1 = new Animal('Bobik', 3, 'brown', 4)

animal1.setSkills = 'fetching'

console.log(animal2)
console.log(animal1.getFullInfo())
console.log(animal1.getAge)
console.log(animal1.skills)

//2 Create a Dog and Cat child class from the Animal Class.
const dog = new Animal('Reksio', 4, 'white', 4)
const cat = new Animal('Mruczek', 1, 'gray', 4)

// Exercises Level 2
//1 Override the method you create in Animal class
class BabyAnimal extends Animal {
    constructor(name, age, color, legs, skills, race) {
        super(name, age, color, legs, skills)
        this.race = race
    }
    getFullInfo() {
        const fullInfo = this.name + ' ' + this.age + ' ' + this.color + ' ' + this.race
        return fullInfo
    }
}
const animal3 = new BabyAnimal('Hodro', 3, 'brown', 4, 'fetching', 'labrador')
console.log(animal3.getFullInfo())

//Exercises Level 3
//1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

class Statistics {
    constructor(
        ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
    )
    {
        this.ages = ages
    }
    count() {
        let count = this.ages.length
        return count
    }
    sum() {
        let sum = 0
        for (const age of this.ages) {
            sum += age
        }
        return sum
    }
    min() {
        let min = this.ages[0]
        for (let i = 0; i < this.ages.length; i++) {
            if (this.ages[i] < min) {
                min = this.ages[i]
            }
        }
        return min
    }
    max() {
        let max = this.ages[0]
        for (let i = 0; i< this.ages.length; i++) {
            if(this.ages[i] > max) {
                max = this.ages[i]
            }
        }
        return max
    }
    median() {
        let sorted = this.ages.sort()
        let median = sorted[Math.floor(sorted.length/2)]
        return median
    }
}
const abc = new Statistics()
console.log(abc.median())

//2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.

class PersonAccount {
    constructor(firstname, lastname, incomes, expanses)
    {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = incomes
        this.expanses = expanses
    }
    totalIncome() {
        let income = 0
        for (let i = 0; i < this.incomes.length; i++) {
            income += this.incomes[i]
        }
        return income
    }
    totalExpanses() {
        let expanse = 0
        for (let i = 0; i < this.expanses.length; i++) {
            expanse += this.expanses[i]
        }
        return expanse
    }
    accountInfo() {
        const info = this.firstname + ' ' + this.lastname
        return info
    }
    set addIncome(income) {
        this.incomes.push(income)
    }
    set addExpense(expanse) {
        this.expanses.push(expanse)
    }
    accountBalance() {
       let balance = this.totalIncome() - this.totalExpanses()
       return balance
    }
}
const person = new PersonAccount('Marek', 'Nowakowski', [100, 2000, 30], [1000, 10, 15, 10])
person.addIncome = 100
person.addExpense = 40

console.log(person.accountBalance())
