const h3 = document.querySelector('h3')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const h4 = document.getElementsByTagName('h4')


const clock = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    h3.textContent = (`${date < 10 ? `0${date}` : `${date}`}/${month < 10 ? `0${month}` : `${month}`}/${year} ${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`)

}
const changeColor = () => {
    const now = new Date()
    const seconds = now.getSeconds()
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (seconds % 2 == 0) {
        h3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    } else {
        h3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
}
const changesColors = () => {
    const now = new Date()
    const seconds = now.getSeconds()
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (seconds % 2 == 0) {
        p.style.color = `rgb(${r}, ${g}, ${b})`
    } else {
        p.style.color = `rgb(${r}, ${g}, ${b})`
    }
}

setInterval(clock, 1000)
setInterval(changeColor, 1000)
setInterval(changesColors, 1000)

import {
    asabenehChallenges2020
} from './asabenehChallenges2020.js'

console.log(asabenehChallenges2020.challenges[1].topics)
for (let i = 0; i < h4.length; i++) {
    for (let j = 0; j < asabenehChallenges2020.challenges[i].topics.length; j++) {
        h4[i].textContent += ` ${asabenehChallenges2020.challenges[i].topics[j]}`
    }
}


console.log(h4[1])