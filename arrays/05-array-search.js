// Problem: Array search
// Category: Array

/*
Description:
Given an array, arr[] of n integers, and an integer element x, 
find whether element x is present in the array. Return the index of the first 
occurrence of x in the array, or -1 if it doesn't exist.

Ex: search([1, 2, 3, 4], 3) // 2 
*/

function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4], 3));
console.log(search([1, 2, 3, 4], 10));
