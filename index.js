function isPalindrome(word) {
  // Write your algorithm here

  // Reverse the letters of the word and create a new
  const reversedWord = word.split('').reverse().join('');

  // Check if reversed word and original word match and return
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  declare a function that takes a word as argument
      split the word to its letters, reverse the resulting array and join the letters
      store the result in a variable

      compare the reversed word and the input argument
      return the output of the comparison
*/

/*
  Add written explanation of your solution here
  I want my function to take a string argument, then split this at every single letter.
  This will return an array of letters which I then reverse.
  There after I join the letters to come up with a reversed string.
  I compare the reversed string with the input string and return the results
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
