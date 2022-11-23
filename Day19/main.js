//1 Create a closure which has one inner function
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
//2 Create a closure which has three inner functions
function first() {
    let count = 0
    function plusOne() {
        count += 5
        return count
    }
    function minusOne() {
        count--
        return count
    }
    function multiply() {
        count *= count
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne(),
        multiply:multiply()
    }
}
const innerFuncs = first()
console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.multiply)
