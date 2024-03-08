// 1. Prompting the user to input a string of text
const inputText = prompt("Enter a string of text:");

// 2. Counting the number of characters, words, and sentences in the input text
const characterCount = inputText.length;
const wordCount = inputText.split(" ").filter(word => word !== "").length;
const sentenceCount = inputText.match(/\.|\?|!/g)?.length || 0;

// 3. Identifying the most frequent word and display its occurrence count
const words = inputText.toLowerCase().match(/\b\w+\b/g) || [];
const wordCounts = {};

for (const word of words) {
  if (!wordCounts[word]) {
    wordCounts[word] = 0;
  }
  wordCounts[word]++;
}

const mostFrequentWord = Object.entries(wordCounts).reduce((prev, current) => (current[1] > prev[1] ? current : prev))[0];
const frequentWordCount = wordCounts[mostFrequentWord];

// 4. Determining the average word length in the text
const totalWordLength = words.reduce((prev, current) => prev + current.length, 0);
const averageWordLength = totalWordLength / wordCount;

// 5. Output the analyzed results using console.log()
console.log(`Character Count: ${characterCount}`);
console.log(`Word Count: ${wordCount}`);
console.log(`Sentence Count: ${sentenceCount}`);
console.log(`Most Frequent Word: ${mostFrequentWord}, Occurrence Count: ${frequentWordCount}`);
console.log(`Average Word Length: ${averageWordLength.toFixed(2)}`);