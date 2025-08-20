// A simple search bar logic that allows searching for exact phrases, even with special characters.
function searchInText(text, searchTerm) {
  // Before: Manual escaping, which is prone to errors
  const escapedTermBefore = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regexBefore = new RegExp(escapedTermBefore, "g");

  // After: Using the new method, the code is much cleaner and safer
  const regexAfter = new RegExp(RegExp.escape(searchTerm), "g");

  // Test the new method
  const matches = [...text.matchAll(regexAfter)];
  return matches.map((match) => match.index);
}

const longText = "Find my.file and my.file.txt here. The price is $100.";
const phraseToFind = "my.file.txt";

console.log("Found at indices:", searchInText(longText, phraseToFind)); // Output: Found at indices: [21]
