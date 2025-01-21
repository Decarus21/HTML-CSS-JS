/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  return "x".repeat(str.length);
}
console.log(xify("hello"));
console.log(xify("hi there"));

function yellingChars(str) {
  let result = "";
  for (let char of str) {
    result += char + "!";
  }
  return result;
}
console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));

function indexedChars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += i + str[i];
  }
  return result;
}
console.log(indexedChars("hello"));
console.log(indexedChars("bye"));

function numberedChars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += "(" + (i + 1) + ")" + str[i];
  }
  return result;
}
console.log(numberedChars("hello"));
console.log(numberedChars("bye"));

function repeatIt(str, n) {
  return str.repeat(n);
}
console.log(repeatIt("beetlejuice", 3));
console.log(repeatIt("oh hi", 8));

function truncate(str){
  return str.length > 15 ? str.slice(0, 15) + "..." : str;
}
console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves,"));
console.log(truncate("Well, that's just, like, your opinion man."))

function ciEmailify(name){
  let [firstName, lastName] = name.split("");
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@codeimmersives.com`;
}
console.log(ciEmailify("colin jaffe"));
console.log(ciEmailify("Anthony DeRosa"));

function reverse(str){
  return str.split("").reverse().join(""); 
}
console.log(reverse("colin"));
console.log(reverse("mesuara"));

function onlyVowels(word){
  return word.toLowerCase().replace(/[^aeiou]/g, "");
}
console.log(onlyVowels("colin jaffe"));
console.log(onlyVowels("quickly"));
console.log(onlyVowels("Anthony DeRosa"));


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === "undefined") {
  xify = undefined;
}

if (typeof smilify === "undefined") {
  smilify = undefined;
}

if (typeof yellingChars === "undefined") {
  yellingChars = undefined;
}

if (typeof numberedChars === "undefined") {
  numberedChars = undefined;
}

if (typeof indexedChars === "undefined") {
  indexedChars = undefined;
}

if (typeof exclaim === "undefined") {
  exclaim = undefined;
}

if (typeof repeatIt === "undefined") {
  repeatIt = undefined;
}

if (typeof truncate === "undefined") {
  truncate = undefined;
}

if (typeof ciEmailify === "undefined") {
  ciEmailify = undefined;
}

if (typeof reverse === "undefined") {
  reverse = undefined;
}

if (typeof onlyVowels === "undefined") {
  onlyVowels = undefined;
}

if (typeof crazyCase === "undefined") {
  crazyCase = undefined;
}

if (typeof titleCase === "undefined") {
  titleCase = undefined;
}

if (typeof camelCase === "undefined") {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === "undefined") {
  crazyCase2ReturnOfCrazyCase = undefined;
}

module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
};
