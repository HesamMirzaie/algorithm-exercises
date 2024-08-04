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

// Solution 1: Frequency Counter O(n)
function areThereDuplicatesV1(...arr) {
  let freqCounter = {};

  for (let item of arr) {
    freqCounter[item] = freqCounter[item] + 1 || 1;
    if (freqCounter[item] > 1) return true;
  }
  return false;
}
// Solution 1: Multiple Pointers
function areThereDuplicatesV2(...arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] === arr[right]) {
      return true;
    } else if (arr[left] !== arr[right]) {
      right--;
    }
  }
  return false;
}
console.log(areThereDuplicatesV2('a', 'b', 'c', 'a'));
