// Problem: Find Maximum Number
// Category: Array (Basic)

/*
Description:
Given an array of integers, return the largest number.
*/

// Without built in
function findMaxNum(nums) {
  let maxNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }

  return maxNum;
}

console.log(findMaxNum([3, 7, 2, 9, 5])); // 9


// With built in
function findMaxNumBuiltIn(nums) {
  return Math.max(...nums)
}

console.log(findMaxNumBuiltIn([3, 7, 2, 9, 5])); // 9
