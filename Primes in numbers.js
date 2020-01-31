/**
 * Given a positive number n > 1 find the prime factor decomposition of n.
 * @param {Number} n
 * @link {https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript} 
 */
function primeFactors(n){
    let result = "";

    for (let i = 2; i <= n; i++) {
        let count = 0;

        while (n % i == 0) {
            n = n / i;
            count++;
        }

        if (count) {
            result += "(" + i;
            result += count > 1 ?  "**" + count + ")" : ")";
        }
    }
    return result;
}