/**
 * Implement a function that adds two numbers together and returns their sum in binary.
 * The conversion can be done before, or after the addition.
 * The binary number returned should be a string.
 * @param {Number} a 
 * @param {Number} b 
 */
function addBinary(a,b) {
    let sum = a + b;

    return sum.toString(2);
}

// function addBinary(a,b){
//     var sum = a + b, binary = '';

//     while (sum > 0) {
//         binary = (sum % 2) + binary;
//         sum = Math.floor(sum / 2);
//     }

//     return binary;
// }