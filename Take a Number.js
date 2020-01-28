/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @link {https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript}
 */
function sumDigPow(a, b) {
    let result = [];

    for (let i = a; i < b; i++) {
        result.push(i.toString());
    }

    return result.filter(function(v, i) {
        let sum = 0;
        v.split('').forEach((v, i) => sum += Math.pow(v, i + 1));

        return sum == v;
    }).map(v => parseInt(v));
}