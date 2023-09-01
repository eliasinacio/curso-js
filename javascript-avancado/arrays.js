/**
 * Concat
 */

let array1 = [0, 1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9]

let array3 = array1.concat(array2)

// > [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


/**
 * Destructuring
 */

function getXY() { 
    const x = 10,
        y = 20

    return [x, y]
}

const [x, y] = getXY();


/**
 * Filter
 */

const array4 = [1, 2, 3, 4, 5, 6]

const odd = array4.filter(x => x % 2 !== 0)

console.log('filtered array: ', odd);
console.log('array: ', array4)


/**
 * Map
 */

const array5 = [4, 9, 16, 25, 36, 49]

const squareRoots = array5.map(x => x ** (1/2))

console.log('array: ', array5)
console.log('square roots: ', squareRoots)

/**
 * Reduce
 */

const array6 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array6.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10
