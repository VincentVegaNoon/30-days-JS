import {
    countries
} from './countries.js'

let block
let container = document.querySelector('.container')
for (let i = 0; i < countries.length;i++) {
    block = document.createElement('div')
    block.className = 'block'
    block.textContent = countries[i]
    container.appendChild(block)
}