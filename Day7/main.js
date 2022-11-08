//Exercises: Level 1
//1 Declare a function fullName and it print out your full name.
function fullName() {
    let firstName = 'Jan';
    let lastName = 'Kowalski';
    console.log(`${firstName} ${lastName}`)
}
fullName()
//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullNameTwo(firstName, lastName) {
    console.log(`${firstName} ${lastName}`)
}
fullName('Jan', 'Kowalski')
//3 Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(param1, param2) {
    let sum = param1 + param2
    console.log(sum)
}
addNumbers(10, 20)
//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    let area = length * width
    console.log(area)
}
areaOfRectangle(3, 5)

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    console.log(perimeter)
}
perimeterOfRectangle(3, 7)

//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    console.log(volume)
}
volumeOfRectPrism(3, 6, 9)
//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r, pi = 3.14) {
    let area = pi * r * r
    console.log(area)
}
areaOfCircle(10)

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r, pi = 3.14) {
    let circumference = 2 * pi * r
    console.log(circumference)
}
circumOfCircle(10)
//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityCalc(mass, volume) {
    let density = mass / volume
    console.log(density)
}
densityCalc(10, 20)

//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedCalc(totaldistance, time) {
    let speed = totaldistance / time
    console.log(speed)
}
speedCalc(100, 60)

//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weightCalc(mass, gravity = 9.81) {
    let weight = mass * gravity
    console.log(weight)
}
weightCalc(100)

//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function converOCToOF(oC) {
    let oF = (oC * 9 / 5) + 32
    console.log(oF)
}
converOCToOF(21)

//13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function bmiCalc(weight, height) {
    bmi = (weight / (height * height)) * 10000
    let n = bmi.toFixed(2)
    console.log(n)
    if (n > 29.9) {
        console.log(`Your BMI is ${n} and you are Obese`)
    } else if (n > 25) {
        console.log(`Your BMI is ${n} and you are Overweight`)
    } else if (n >= 18.5) {
        console.log(`Your BMI is ${n} and you are Normal weight`)
    } else if (n < 18.5) {
        console.log(`Your BMI is ${n} and you are Underweight weight`)
    }
}
bmiCalc(59, 180)

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let monthsArray = ['September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
let month = monthsArray[Math.floor(Math.random() * monthsArray.length)]

function checkSeason(month) {
    if (monthsArray[0].includes(month) || monthsArray[1].includes(month) || monthsArray[2].includes(month)) {
        console.log('its autumn')
    } else if (monthsArray[3].includes(month) || monthsArray[4].includes(month) || monthsArray[5].includes(month)) {
        console.log('its winter')
    } else if (monthsArray[6].includes(month) || monthsArray[7].includes(month) || monthsArray[8].includes(month)) {
        console.log('its sprng')
    } else if (monthsArray[9].includes(month) || monthsArray[10].includes(month) || monthsArray[11].includes(month)) {
        console.log('its summer')
    }
}
checkSeason(month)

//15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(number1, number2, number3) {
    if (number1 > number2 || number1 > number3) {
        console.log(number1)
    } else if (number2 > number1 || number2 > number3) {
        console.log(number2)
    } else if (number3 > number2 || number3 > number1) {
        console.log(number3)
    }
}
findMax(0, 10, 5)

//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(paramArr) {
    for (const param of paramArr) {
        console.log(param)
    }
}
printArray([1, 2, 3, 4, 5])
//4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    console.log(`${date < 10 ? `0${date}` : `${date}`}/${month < 10 ? `0${month}` : `${month}`}/${year} ${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`)
}
showDateTime()

//5 Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x, y) {
    let a = x
    let b = y
    x = b
    y = a
    console.log(x, y)
}
swapValues(3, 4)

//6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr) {
    let a = []
    for (let i = arr.length - 1; i >= 0; i--) {
        a.push(arr[i])
    }
    arr = a
    console.log(arr)
}
reverseArray([1, 2, 3, 4, 5])

//7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(array) {
    let capitalizedArray = []
    for (const arr of array) {
        capitalizedArray.push(arr.toUpperCase())
    }
    console.log(capitalizedArray)
}
capitalizeArray(['a', 'b', 'c', 'd', 'e'])

//8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let arrayA = [1, 2, 3]

function addItem(item) {
    arrayA.push(item)
    return arrayA, console.log(arrayA)
}
addItem(4)

//9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(index) {
    arrayA.splice(index, 1)
    console.log(arrayA)
}
removeItem(1)
//10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(number) {
    let sum = 0
    for (i = 0; i <= number; i++) {
        sum += i
    }
    console.log(sum)
}
sumOfNumbers(10)

//11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(number) {
    let sum = 0
    for (i = 0; i <= number; i++) {
        if (i % 2 == 0) {} else {
            sum += i
        }
    }
    console.log(sum)
}
sumOfOdds(13)

//12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(number) {
    let sum = 0
    for (i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    console.log(sum)
}
sumOfEven(100)

//13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function sumOfEvenAndOdds(number) {
    let sumEven = 0
    let sumOfOdds = 0
    for (i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            sumEven += i
        } else {
            sumOfOdds += i
        }
    }
    console.log(sumEven, sumOfOdds)
}
sumOfEvenAndOdds(100)
//14 Write a function which takes any number of arguments and return the sum of the arguments

const sumAllNums = (...args) => {
    let sum = 0
    for (const arg of args) {
        sum += arg
    }
    console.log(sum)
}
sumAllNums(1, 2, 3, 4, 5, 6, 7, 8, 9)

//15 Write a function which generates a randomUserIp.
const randomUserIp = () => {
    let ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));
    console.log(ip)
}
randomUserIp()

//18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let randomId = (Math.random() + 1).toString(36).substring(2);
    console.log(randomId)
}
userIdGenerator()

//1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratorTwo(numChars = 5, numIds = 5) {
    let chars = 'abcdefghijklmnoprstuwyz1234567890'
    for (j = 0; j < numIds; j++) {
        let id = ''
        for (let i = 0; i < numChars; i++) {
            id += chars[Math.floor(Math.random() * chars.length)]
        }
        console.log(id)
    }
}
userIdGeneratorTwo(10, 10)

//2 Write a function name rgbColorGenerator and it generates rgb colors.

const rgbColorGenerator = () => {
    let rgbArray = []
    for (i = 0; i < 3; i++) {
        let rgb = Math.floor(Math.random() * 256)
        rgbArray.push(rgb)
    }
    console.log(`rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`)
}
rgbColorGenerator()

//3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(numHex = 3) {
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (j = 0; j < numHex; j++) {
        let hex = '#'
        hexArray = []
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * hexValues.length)
            hex += hexValues[index];
        }
        hexArray.push(hex)
        console.log(hexArray)
    }
}
arrayOfHexaColors(5)

//4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.


function arrayOfRgbColors(numRgb = 3) {
    let arrOfArr = []
    for (j = 0; j < numRgb; j++) {
        let rgbArray = []
        for (i = 0; i < 3; i++) {
            let rgb = Math.floor(Math.random() * 256)
            rgbArray.push((`${rgb}`))
        }
        arrOfArr.push(rgbArray)
    }
    console.log(arrOfArr)
}
arrayOfRgbColors(5)

//7 Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(color, number) {
    if (color == 'hexa') {
        arrayOfHexaColors(number)
    } else if (color == 'rgb') {
        arrayOfRgbColors(number)
    }
}
generateColors('hexa', 5)

//8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(array) {
    let random = Math.floor(Math.random() * array.length)
    for (i = 0; i < array.length - 1; i++) {
        let random = Math.floor(Math.random() * array.length - 1)
        let item = array[i]
        array.splice(i, 1)
        array.splice(random, 0, item)
    }
    console.log(array)
}
shuffleArray([1, 2, 3, 4, 5])

//9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(number) {
    let sum = 1
    for (i = 1; i < number; i++) {
        sum += sum * i
    }
    console.log(sum)
}
factorial(6)
//10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(param) {
    if (param == ' ' || param == 'undefined') {
        console.log('its empty')
    } else if (param == ' ' || param == 'undefined') {
        console.log('its empty')
    } else if (param) {
        console.log('its not empty')
    } else {
        console.log('its empty')
    }
}
isEmpty('')
//11 Call your function sum, it takes any number of arguments and it returns the sum.

function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
    return sum
}
sum(1, 2, 3, 4, 5)
//12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(arr) {
    let sum = 0
    for (let j = 0; j < arr.length; j++) {
        if (typeof arr[j] == 'number') {} else {
            return console.log(`Every item in array must be a number, ${arr[j]} its not a number`)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)
}
sumOfArrayItems([1, 2, 'three', 3, 4, 5])
//13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    let sum = 0
    for (let j = 0; j < arr.length; j++) {
        if (typeof arr[j] == 'number') {} else {
            return console.log(`Every item in array must be a number, ${arr[j]} its not a number`)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum / arr.length)
}
average([1, 2, 3, 4, 5])

//14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

function modifyArray(arr) {
    if (arr.length < 5) {
        console.log('item not found')
    } else {
        let itemBig = arr[4].toUpperCase()
        arr.splice(4, 1, itemBig)
    }
    console.log(arr)
}
modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])

//16 Write a functions which checks if all items are unique in the array.
function checkUnique(array) {
    for (j = 0; j < array.length; j++) {
        for (i = j + 1; i < array.length; i++) {
            console.log(array[i], array[j])
            if (array[j] === array[i]) {
                console.log('its not unique')
            }
        }
    }
}
checkUnique([1, 2, 3, 4, 5])


//17 Write a function which checks if all the items of the array are the same data type.
function checkDataType(array) {
    for (j = 0; j < array.length; j++) {
        for (i = j + 1; i < array.length; i++) {
            console.log(array[i], array[j])
            if (typeof array[j] === typeof array[i]) {} else {
                return console.log('its not same data type')
            }
        }
    }
}
checkDataType([1, 2, '2', 4, 5])
//18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(variable) {
    let clean = /[%@&#?!;]/g
    let variableCopy = variable.replace(clean, '')
    if (variable.length > variableCopy.length) {
        console.log('variable is invalid')
    } else {
        console.log('variable is valid')
    }
}
isValidVariable('validVa?ri;able')

//19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

function sevenForSeven() {
    let arr = []
    for (k = 0; k < 7; k++) {
        let add = true
        if (arr.length < 1) {
            arr.push(Math.floor(Math.random() * 10))
        }
        let random = Math.floor(Math.random() * 10)
        for (i = 0; i <= arr.length; i++){
            if (random == arr[i]){
                k--
                add = false
            } else {
            }
        }
        if (add == true) {
            arr.push(random)
        } else {
            console.log('false')
        }
    } console.log(arr)
}
sevenForSeven()

//20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
]

function reverseCountries(arr) {
    let arrCopy = arr
    arrCopy.reverse()
    console.log(arrCopy)
}
reverseCountries(countries)