import {
    countries
} from './countries.js'

//3 Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

function categorizeCountries(arr) {
    arr = countries.filter((country) => country.name.includes('ia'))
    console.log(arr)
}
categorizeCountries(countries)

//