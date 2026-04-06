// Problem: Reverse String
// Category: String

/*
Description:
Write a function that takes a string and returns it reversed.
Ex: reverseStr("hello") → "olleh"
*/

// Without built in
function reverseStr(str) {
  let result = "";
  
  for(let i = str.length - 1; i >= 0 ; i--){
    result += str[i];
  }

  return result;
}

console.log(reverseStr("hello"));

// With built in
function reverseStrBuiltIn(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStrBuiltIn("hello"));