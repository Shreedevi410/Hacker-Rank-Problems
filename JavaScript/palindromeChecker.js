const word = "level";
const normalizedWord = word.toLowerCase();
const reversedWord = normalizedWord.split("").reverse().join("");

if (normalizedWord === reversedWord) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}
