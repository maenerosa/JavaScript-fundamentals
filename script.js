// Write a function called add7 that takes one number and returns that number + 7.
const add7 = (number) => number + 7;

// Write a function called multiply that takes 2 numbers and returns their product.
const multiply = (a, b) => a * b;

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
const capitalized = (str) => {
  const strToLowerCase = str.toLowerCase();
  return strToLowerCase.charAt(0).toUpperCase() + strToLowerCase.substring(1);
};

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
const lastLetter = (str) => str.charAt(str.length - 1);

function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
var string = "hello";

console.log(reverseString(string));
