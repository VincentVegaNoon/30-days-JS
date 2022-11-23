//1 Read the countries API using fetch and print the name of country, capital, languages, population and area.

const url = 'https://restcountries.com/v2/all'
fetch(url)
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        console.log([data[i].name, data[i].capital, data[i].languages, data[i].population, data[i].area])
    }
})
.catch (error => console.error(error))

//2 Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        let catNames = []
        for (let i = 0; i < cats.length; i++) {
            catNames.push(cats[i].name)
        }
        console.log(catNames)
    } catch (err) {
        console.error(err)
    }
}
console.log('===== async and await')
fetchData()

//3 Read the cats api and find the average weight of cat in metric unit.

const averageWeight = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        let catWeight = []
        for (let i = 0; i < cats.length; i++) {
            catWeight.push([cats[i].name, parseInt(((cats[i].weight.metric[4] - cats[i].weight.metric[0]) / 2) + parseInt(cats[i].weight.metric[0]))])
        }
        console.log(catWeight)
    } catch (err) {
        console.error(err)
    }
}
console.log('===== async and await')
averageWeight()
//4 Read the countries api and find out the 10 largest countries
const largestCountries = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        let largest = []
        for (let i = 0; i< countries.length; i++) {
            largest.push([countries[i].name, countries[i].area])
        }
        console.log(largest.sort(byArea).slice(0, 10))
    } catch (err) {
        console.error(err)
    }
}
console.log('===== async and await')
largestCountries()

function byArea(a, b) {
    return parseInt(b[1]) - parseInt(a[1])
}

//5 Read the countries api and count total number of languages in the world used as officials.
const languagesCount = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        let arr = []
        for (let i = 0; i < countries.length; i++) {
            arr.push(countries[i].languages[0].name)
        }
        const setOfLanguages = new Set(arr)
        console.log(setOfLanguages.size)
    } catch (err) {
        console.error(err)
    }
}
console.log('===== async and await')
languagesCount()