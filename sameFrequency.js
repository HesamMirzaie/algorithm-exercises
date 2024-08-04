/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true 
sameFrequency (34,14) // false 
sameFrequency (3589578, 5879385) // true 
sameFrequency (22,222) // false
**/
// Solution 1: O(N^2)
function sameFrequencyV1(...arr) {
  let digit = arr.map((i) => i.toString().split(''));
  let isTrue = false;
  if (digit[0].length !== digit[1].length) {
    return false;
  }
  for (item of digit[0]) {
    if (digit[1].includes(item)) {
      isTrue = true;
    } else {
      return false;
    }
  }
  return isTrue;
}

// Solution 2: Frequency Counter O(N)

function sameFrequencyV2(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (item of strNum2) {
    freqCounter1[item] = freqCounter1[item] + 1 || 1;
  }
  for (item of strNum1) {
    freqCounter2[item] = freqCounter2[item] + 1 || 1;
  }
  if (JSON.stringify(freqCounter1) === JSON.stringify(freqCounter2)) {
    return true;
  }
  return false;
}
