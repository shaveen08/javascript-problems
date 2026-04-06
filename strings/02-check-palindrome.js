// Problem: Reverse String
// Category: String

/*
Description:
Return true if a string reads the same forwards and backwards.
Ex: isPalindrome("racecar") → true
*/

// Without built in
function isPalindrome(str) {
  let cleanStr = str.toLowerCase().trim();
  let reversedStr = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversedStr += str[i].toLowerCase().trim();
  }

  return reversedStr === cleanStr;
}

console.log(isPalindrome("racecar"));

// With built in
function isPalindromeBuiltIn(str) {
  let cleanStr = str.toLowerCase().trim();
  let reversedStr = str.split("").reverse().join("");
  return cleanStr === reversedStr;
}

console.log(isPalindromeBuiltIn("racecar"));
