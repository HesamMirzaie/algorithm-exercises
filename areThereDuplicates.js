/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
**/

// Solution 1: Frequency Counter
function areThereDuplicatesV1(...arr) {
  let freqCounter = {};

  for (let item of arr) {
    freqCounter[item] = freqCounter[item] + 1 || 1;
    if (freqCounter[item] > 1) return true;
  }
  return false;
}
