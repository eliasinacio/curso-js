// Arguments object

function sum () {
    let res = 0

    for (const x of arguments) {
        res += x
    }

    return res
}

const x = sum(1, 2, 3, 4, 5, 6, 7)
console.log(x);


/* function types */

// function
function x (n) {
    return n*n
}

// local function
const y = function (n) {
    return n*n
}

// arrow function
const z = (n) => n*n

