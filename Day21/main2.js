//3 Exercise: Level 3
//1 Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
const h3 = document.querySelector('h3')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')

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