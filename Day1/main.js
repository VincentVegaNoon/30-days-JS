//1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30 Days of JavaScript'

//2 Print the string on the browser console using console.log()

console.log(challenge)

//3. Print the length of the string on the browser console using console.log()

console.log(challenge.length)

//4 Change all the string characters to capital letters using toUpperCase() method

let challengeUpper = challenge.toUpperCase()

//5 Change all the string characters to lowercase letters using toLowerCase() method

let challengeLower = challenge.toLowerCase()

//6 Cut (slice) out the first word of the string using substr() or substring() method

// substr(): It takes two arguments, the starting index and number of characters to slice.

console.log(challenge.substr(0,7))

//7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

console.log(challenge.substring(3,challenge.length))

//8 Check if the string contains a word Script using includes() method

console.log(challenge.includes('Script'))

//9 Split the string into an array using split() method

console.log(challenge.split())

//10 Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(' '))

//11 Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(' '))

//12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

console.log(challenge.replace('JavaScript', 'Python'))

//13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

console.log(challenge.charAt(15))

//14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt(15))

//15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf('J'))

//16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf('a'))

//17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

//18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.lastIndexOf('because'))

//19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.search('because'))

//20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let sentenceTwo = ' 30 Days Of JavaScript '
console.log(sentenceTwo.trim())

//21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith('30'))

//22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.endsWith('JavaScript'))

//23 Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/gi
console.log(challenge.match(pattern))

//24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string = ''
console.log(string.concat('30 Days of ', 'JavaScript')
)
//25 Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2))

// Exercise: Level 2
//3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = '10'
if(typeof ten == typeof 10){
    console.log('is equal')
} else {
   ten = parseInt(ten)
    console.log(ten)
}
//4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let one = '9,8'
let numFloat = parseInt(one) + 1
console.log(typeof numFloat == typeof 10)

//5 I hope this course is not full of jargon. Check if jargon is in the sentence.

let jargon = 'I hope this course is not full of jargon. Check if jargon is in the sentence.'
if (jargon.search('jargon')) {
    console.log('there is jargon')
} else {
    console.log('no jargon')
}
 //6 Check if 'on' is found in both python and jargon
let paj = 'python and jargon'
let patternPaj = /on/gi
 if(paj.search(patternPaj.length = 2)) {
    console.log("'on' is found in both")
 } else {
    console.log('nope')
 }
 //7 Generate a random number between 0 and 100 inclusively.

console.log(Math.floor(Math.random() * 100))

//8 Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 50) + 50)
//9 Generate a random number between 0 and 255 inclusively.

console.log(Math.floor(Math.random() * 256))
//10 Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript'
console.log(js[Math.floor(Math.random()* js.length)])
//12 Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let start = sentence.search('because')
console.log(sentence.substr(start, 23))

//Exercises: Level 3
//1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
sentenceThree = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let patternLove = /love/gi
console.log(sentenceThree.match(patternLove).length)

//2 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let patternBecause = /because/gi
console.log(sentence.match(patternBecause).length)

//3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).
let sentenceToClear = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let clean = /[%@&$#?!;]/g
let cleaned = sentenceToClear.replace(clean, '')
console.log(cleaned)

//4 Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/g
let income = txt.match(regEx)
let salary = parseInt(income[0] * 12)
let bonus = parseInt(income[1])
let course = parseInt(income[2] * 1)
let annualIncome = salary + bonus + course
console.log(annualIncome)