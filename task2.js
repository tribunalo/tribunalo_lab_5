// 1. Prompting the user to input two strings and will save them in variables
const string1 = prompt("Enter the first name:");
const string2 = prompt("Enter the second lastname:");

// 2. Concatenating the prompted strings using the "+" operator
const concatenatedString = string1 + " " + string2;
console.log("Concatenated String:", concatenatedString);

// 3. Using string methods such as length(), toUpperCase(), toLowerCase(), and substring()
console.log("String Length:", string1.length);
console.log("Uppercase String:", string1.toUpperCase());
console.log("Lowercase String:", string1.toLowerCase());
console.log("Substring:", string1.substring(0, 3));

// 4. Performing  string interpolation using template literals
const interpolatedString = `${string1} ${string2} are the input strings`;
console.log(interpolatedString);

// 5. Implementing basic string comparison using comparison operators
if (string1 > string2) {
  console.log("String 1 is greater than String 2");
} else if (string1 < string2) {
  console.log("String 1 is less than String 2");
} else {
  console.log("String 1 is equal to String 2");
}

// 6. Using the split() method to divide a string into an array of substrings
const splitString = string1.split(" ");
console.log("Split String:", splitString);