/** 
Sliding Window - maxSubarray Sum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxsubarraySum([100,200,300,4001, 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,201, 4) // 39
maxSubarraySum([-3,4,0,-2,6, -11, 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,11,2) // 5
maxSubarraySum([2,31, 3) // null

Constraints:
Time Complexity - O(N)
Space Complexity - 0(1)
**/

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let max = 0;
  let currSum = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  currSum = max;

  for (let i = num; i < arr.length; i++) {
    currSum = currSum - arr[i - num] + arr[i];
    max = Math.max(max, currSum);
  }

  return max;
}

console.log(
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),
  maxSubarraySum([100, 200, 300, 400], 2)
);
