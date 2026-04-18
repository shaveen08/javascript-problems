// Problem: Two Sum
// Category: Array

/*
Description:
Given an array of integers, return indices of two numbers such that they add up to a target.
*/

// Method 1
function twoSumMethod1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSumMethod1([2, 7, 11, 15], 9)); // [0, 1]

// Method 2
function twoSumMethod2(nums, target){
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] == target - nums[j]){
        return [i ,j];
      }
    }
  }
}

console.log(twoSumMethod2([2, 7, 11, 15], 9)); // [0, 1]