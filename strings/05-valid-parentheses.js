/*
Description:
    -> Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    -> An input string is valid if:

    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.
    3. Every close bracket has a corresponding open bracket of the same type.

Ex: 
    Input: s = "()"
    Output: true

    Input: s = "(]"
    Output: false
*/

function isValid(s) {
  if (!s) return false;
  let stack = [];
  let match = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    let matchChar = match[s[i]];
    if (matchChar) {
      let last = stack[stack.length - 1];
      if (last === matchChar) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? true : false;
}
console.log(isValid("()"));
