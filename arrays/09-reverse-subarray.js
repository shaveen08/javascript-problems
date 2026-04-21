/*
Description:
    Given an array arr, you need to reverse a subarray of that array. 
    The range of this subarray is given by indices l and r (1-based indexing).

Ex: 
    Input: arr[] = [1, 2, 3, 4, 5, 6, 7], l = 2, r = 4
    Output: [1, 4, 3, 2, 5, 6, 7]

    Input: arr[] = [1, 6, 7, 4], l = 1, r = 4
    Output: [4, 7, 6, 1]
*/

function reverseSubArray(arr, l, r) {
  // convert to 0-based indices
  l = l - 1; // 2 - 1 = 1
  r = r - 1; // 4 - 1 = 3

  while (1 < 3) { // 3 times --> 1, 2, 3
    let temp = arr[l]; //temp --> 2 3 4
    arr[l] = arr[r];   //arr[l] --> 4 3 2
    arr[r] = temp;     //arr[r] --> 2 3 4
    l++;               // l++ --> 2 3 4
    r--;               // r-- --> 2 1 0
  }

  return arr;
}

// Example 1
console.log(reverseSubArray([1, 2, 3, 4, 5, 6, 7], 2, 4));
// Output: [1, 4, 3, 2, 5, 6, 7]

// Example 2
console.log(reverseSubArray([1, 6, 7, 4], 1, 4));
// Output: [4, 7, 6, 1]
