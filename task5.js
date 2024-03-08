// 5.1 Prompt user for input string
const inputString = prompt("Enter a string to encrypt:");
const shift = 3; // Define the shift amount for the Caesar Cipher

// 5.2 & 5.3 Encryption and decryption functions
const encrypt = (text, shift) => {
 let encrypted = "";
 for (const char of text) {
   const base = char.charCodeAt(0);
   let shifted = base + shift;

// If letter, wrap around alphabet
   if (char.match(/[a-z]/i)) { 
     const alphabetSize = 26;

// Wraping around lowercase
     shifted = ((shifted - 97 + alphabetSize) % alphabetSize) + 97; 
   }
   encrypted += String.fromCharCode(shifted);
 }
 return encrypted;
};

const decrypt = (text, shift) => {
 return encrypt(text, -shift); // Decryption is the same as encryption with a negative shift
};

// 5.4 Encrypting input string
const encrypted = encrypt(inputString, shift);
console.log("Encrypted string:", encrypted);

// 5.5 Offering decryption option
const decryptChoice = prompt("Would you like to decrypt the string? (yes/no)");
if (decryptChoice.toLowerCase() === "yes") {
 const decrypted = decrypt(encrypted, shift);
 console.log("Decrypted string:", decrypted);
}
