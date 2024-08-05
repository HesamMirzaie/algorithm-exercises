/** 
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

Examples:
findLongestSubstring('') should return 0 because there are no characters.
findLongestSubstring('rithmschool') should return 7 because the longest substring with all distinct characters is 'rithmsc'.
findLongestSubstring('thisisawesome') should return 6 because the longest substring with all distinct characters is 'thisis'.
findLongestSubstring('thecatinthehat') should return 7 because the longest substring with all distinct characters is 'hecatin'.
findLongestSubstring('bbbbbb') should return 1 because all characters are the same.
findLongestSubstring('longestsubstring') should return 8 because the longest substring with all distinct characters is 'longest'.
findLongestSubstring('thisishowwedoit') should return 6 because the longest substring with all distinct characters is 'thisis'.

Time Complexity - O(n)
**/

// Solution 1: Frequency Counter O(n^2)
function findLongestSubstringV1(str) {
  const freqCounter = {};
  for (let i = 0; i < str.length; i++) {
    freqCounter[str[i]] = freqCounter[str[i]] + 1 || 1;
    // console.log(freqCounter);
    if (Object.values(freqCounter).includes(2)) {
      break;
    }
  }
  return Object.keys(freqCounter).length;
}
