const greet = 'hi'
function ok() {
    console.log(greet)
}
ok()


//2nd
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('outer' + outerVariable)
        console.log("inner" + innerVariable)
    }
}

const hello = outerFunction('outside')
hello('inside')