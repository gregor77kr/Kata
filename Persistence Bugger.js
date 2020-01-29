/**
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 * @param {Number} num a positive number
 * @link {https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript}
 */
function persistence(num) {
    let result = 0;
    num = num.toString();
    
    while (num.length > 1) {
        result++;
        num = num.split('').map(Number).reduce((accumulator, value) => accumulator * value).toString();
    }
    
    return result;
}