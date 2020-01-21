// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

/**
 * Return sum of numbers that are below number parameter and are multiples of 3 or 5.
 * @param {Number} natural number
 */
function solution(number) {
    let result = 0;
    for (let index = 1; index < number; index++) {
        result += ((index % 3) == 0 || (index % 5) == 0) ? index : 0;
    }
    return result;
}