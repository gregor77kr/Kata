/**
 * Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.
 * All words must have their first letter capitalized without spaces.
 * @link {https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript}
 */
String.prototype.camelCase = function() {
    return this.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
}