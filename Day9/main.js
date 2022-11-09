//1 Explain the difference between forEach, map, filter, and reduce.
//map - iterate array elements and modify the array elements, return a new array
//foreach - iterate an array, can be used only with array, return array
//filter - filter out items which full fill filtering conditions and return a new array
//reduce - the call back function takes accumulator, current, and optional initial value as a parametr and return a single value. It is a good practice to define an initial value for accumulatory value If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

//2 Define a callback function before you use it in forEach, map, filter or reduce.
//A callback is a function which can be passed as parameter to other function
const callback = (n) => {
    return n**2
}
function cube(callback, n) {
    return callback(n) * n
}
console.log(cube(callback, 3))

//3 Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Ethiopia']
countries.forEach((country) => console.log(country))
//4 Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach((name) => console.log(name))
//5 Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((num) => console.log(num))
//6 Use map to create a new array by changing each country to uppercase in the countries array.
const newCountries = countries.map((country) => country.toUpperCase())
console.log(newCountries)
//7 Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)
//8 Use map to create a new array by changing each number to square in the numbers array
numbersToSquare = numbers.map((num) => num * num)
console.log(numbersToSquare)
//9 Use map to change to each name to uppercase in the names array
namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
//10 Use map to map the products array to its corresponding prices.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  
const productsPrices = products.map((elem) => [elem.product , elem.price])
console.log(productsPrices)
//11 Use filter to filter out countries containing land.
const countriesWithLand = countries.filter((country) => country.toLowerCase().includes('land'))
console.log(countriesWithLand)
//12 Use filter to filter out countries having six character.
const countriesWithSixChars = countries.filter((country) => country.length == 6)
console.log(countriesWithSixChars)
//13 Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixCharsAndMore = countries.filter((country) => country.length >= 6)
console.log(countriesWithSixCharsAndMore)
//14 Use filter to filter out country start with 'E';
const countryStartsWithE = countries.filter((country) => country.startsWith('E'))
console.log(countryStartsWithE)
//15 Use filter to filter out only prices with values.
const productsWithPrice = products.filter((elem) => typeof elem.price == 'number')
console.log(productsWithPrice)
//16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = arr => {
    let array = arr.filter((elem) => typeof elem == 'string')
    arr = array
    console.log(arr)
}
getStringLists([1,2,3,'four','five','six', 7])
//17