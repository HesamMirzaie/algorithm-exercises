/** 
Multiple Pointers - isSubsequence
Write a function called is Subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true 
isSubsequence('sing', 'sting'); // true 
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - 0(1)

**/

function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;
  // console.log(str1.length, str2.length);
  while (pointer1 < str1.length && pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
      pointer2++;
    } else if (str1[pointer1] !== str2[pointer2]) {
      pointer2++;
    }
  }
  if (pointer1 === str1.length) {
    return true;
  }
  return false;
}
console.log(
  isSubsequence('hello', 'hello world'), // true,
  isSubsequence('sing', 'sting'), // true,
  isSubsequence('abc', 'abracadabra'), // true,
  isSubsequence('abc', 'acb') // false ,
);

// Get improved by AI
function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < str1.length && pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
    }
    pointer2++;
  }

  return pointer1 === str1.length;
}
