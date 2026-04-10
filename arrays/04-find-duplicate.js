// Problem: Two Sum
// Category: Array

/*
Description:
Return all duplicate values from an array.
Ex: findDupes([1,2,2,3,3,4]) → 
*/

// Without built in
function findDupes(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isDuplicate = true;
      }
    }

    if (isDuplicate) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(findDupes([1, 2, 2, 3, 3, 4])); // [2,3]

// With built in
function findDupesBuiltIn(arr) {
  return [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))];
}

console.log(findDupesBuiltIn([1, 2, 2, 3, 3, 4])); // [2,3]
