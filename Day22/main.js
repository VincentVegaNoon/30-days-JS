let square
let container = document.querySelector('.container')
for (let i = 0; i <= 101;i++) {
    square = document.createElement('div')
    square.className = 'square'
    if (i % 2 ==0) {
        square.style.backgroundColor = '#03A65A'
    } else {
        square.style.backgroundColor = '#F2D338'
    }
    square.textContent = i
    container.appendChild(square)
}