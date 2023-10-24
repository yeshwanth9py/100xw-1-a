/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  s1 = str1.split('');
  s2 = str2.split("");
  console.log(s1,s2);
  s1.sort()
  s2.sort()
  str1 = s1.join("")
  str2 = s2.join("")
  console.log(str1 === str2);
}

// console.log(isAnagram("canny","yannc"));
module.exports = isAnagram;
