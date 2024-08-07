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

function findLongestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  const obj = {};

  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (obj[char] !== undefined && obj[char] >= start) {
      start = obj[char] + 1;
    }
    obj[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
console.log(findLongestSubstring('thisishowwedoit'));
