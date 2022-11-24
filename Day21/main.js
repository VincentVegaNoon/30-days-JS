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

//1