// Problem: Sum of Array
// Category: Array

/*
Description:
Given an array of integers, return the sum of all elements.
*/

// Without built in
function sumOfArray(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(sumOfArray([1, 2, 3, 4])); // 10

// With built in
function sumOfArrayBuiltIn(nums) {
  return nums.reduce((acc, curr) => acc + curr);
}

console.log(sumOfArrayBuiltIn([1, 2, 3, 4])); // 10
