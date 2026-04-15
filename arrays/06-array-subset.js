// Problem: Array search
// Category: Array

/*
Description:
Given two arrays a[] and b[], your task is to determine 
whether b[] is a subset of a[].

Ex:  isSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7]) // true
*/

function isSubset(a, b) {
  let freq = {};
  for (let i = 0; i < a.length; i++) {
    freq[a[i]] = (freq[a[i]] || 0) + 1;
  }

  for (let j = 0; j < b.length; j++) {
    if (!freq[b[j]]) {
      return false;
    }
    freq[b[j]]--;
  }
  return true;
}

console.log(isSubset([11, 7, 1, 13, 21, 3, 7, 3], [11, 3, 7, 1, 7]));
console.log(isSubset([1, 2, 3, 4, 4, 5, 6], [1, 2, 4]));
console.log(isSubset([10, 5, 2, 23, 19], [19, 5, 3]));
