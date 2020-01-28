/**
 * You are given an array strarr of strings and an integer k.
 * Your task is to return the first longest string consisting of k consecutive strings taken in the array.
 * Example:
 * longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
 * n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 * Note
 * consecutive strings : follow one after another without an interruption
 * @param {Array} strarr
 * @param {Number} k
 */
function longestConsec(strarr, k) {
    let n = strarr.length;
    
    if (n == 0 || k > n || k <= 0) {
        return "";
    }

    let max = 0;
    let result = "";

    for (let i = 0; i < n; i++) {

        let sum = 0;
        let str = "";
        for (let j = i; j < i + n - k + 1; j++) {
            sum += strarr[j].length;
            str += strarr[j];
        }

        if (sum > max) {
            result = str; 
        }
    }

    return result;
}