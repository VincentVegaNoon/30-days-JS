//1 Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
document.querySelector('p')

//2 Get each of the the paragraph using document.querySelector('#id') and by their id
document.getElementById('first')
document.getElementById('second')
document.getElementById('third')
document.getElementById('fourth')
//3 Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allPs = document.querySelectorAll('p')
//4 Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i< allPs.length; i++) {
    console.log(allPs[i])
}
allPs.forEach(p => console.log(p))
//5 Set a text content to paragraph the fourth paragraph,Fourth Paragraph
allPs[3].textContent = 'Fourth Paragraph'
//6 Set id and class attribute for all the paragraphs using different attribute setting methods
allPs[1].className = 'paragraph'
allPs[1].id = 'second-paragraph'

allPs[2].setAttribute('class', 'paragraph')
allPs[2].setAttribute('id', 'third-paragraph')

allPs[0].classList.add('paragraph', 'first-paragraph')

// Exercise: Level 2

//1 Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
allPs[0].style.color = 'white'
allPs[0].style.backgroundColor = 'black'
allPs[0].style.border = '2px solid red'
allPs[0].style.fontSize= '34px'
allPs[0].style.fontFamily= 'Arial'

//2 Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
allPs.forEach((item, i) => {
    if (i % 2 === 0) {
        item.style.backgroundColor = 'green'
    } else {
        item.style.backgroundColor = 'red'
    }
})
//3 Set text content, id and class to each paragraph
allPs[0].textContent = 'First paragraph'
allPs[1].textContent = 'Second paragraph'
allPs[2].textContent = 'Third paragraph'
allPs[3].textContent = 'Fourth paragraph'