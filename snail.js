/**
 * Given an n x n array, return the array elements arranged from outermost elements to the middle element, 
 * traveling clockwise.
 * @param {Array} array n * n array
 * @link {https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript}
 */
snail = function(array) {
    let result = [];

    while(array.length) {
        // first row
        result = result ? result.concat(array.shift()) : array.shift();

        // right column
        for (let i = 0; i < array.length; i++) {
            result.push(array[i].pop());
        }

        // bottom row
        result = result.concat(array.pop() || []).reverse();

        // left column
        for (let i = array.length - 1; i >= 0; i--) {
            result.push(array[i].shift());
        }
    }

    return result;
}