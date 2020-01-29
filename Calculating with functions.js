/**
 * @link {https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript}
 */
var n = function(digit) {
    return function(calculate) {
        return calculate ? calculate(digit) : digit;
    }
}
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }