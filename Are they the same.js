/**
 * Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) 
 * that checks whether the two arrays have the "same" elements, with the same multiplicities. 
 * "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 * 
 * a or b might be [] (all languages except R, Shell). 
 * a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).
 * If a or b are nil (or null or None), the problem doesn't make sense so return false.
 * If a or b are empty then the result is self-evident.
 * @param {Array} array1 
 * @param {Array} array2
 * @link {https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript}
 */
function comp(array1, array2) {
    if (!array1 || !array2) {
        return false;
    }

    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    return array1.map(value => value * value).every((value, index) => value = array2[index]);
}