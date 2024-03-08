// 4.1 Prompting user for password
const password = prompt("Enter your password:");

// 4.2 Lengthing requirement and feedback
const minLength = 8; // Define minimum password length
if (password.length >= minLength) {
  console.log("Password meets length requirement.");
} else {
  console.log(`Password is too short. Minimum length is ${minLength} characters.`);
}

// 4.3 Character presence checks
const hasUppercase = /[A-Z]/.test(password);
const hasLowercase = /[a-z]/.test(password);
const hasNumber = /\d/.test(password);
const hasSpecialChar = /[^\w\s]/.test(password);

// 4.4 Strength rating based on criteria
let strengthRating = 0;
if (hasUppercase) strengthRating++;
if (hasLowercase) strengthRating++;
if (hasNumber) strengthRating++;
if (hasSpecialChar) strengthRating++;

let feedbackMessage;
switch (strengthRating) {
  case 0:
    feedbackMessage = "Your password is very weak. Please consider using a combination of uppercase, lowercase letters, numbers, and special characters.";
    break;
  case 1:
    feedbackMessage = "Your password is weak. It would be stronger if it included a combination of character types.";
    break;
  case 2:
    feedbackMessage = "Your password is moderately strong. Consider adding another character type for further security.";
    break;
  case 3:
    feedbackMessage = "Your password is strong.";
    break;
  case 4:
    feedbackMessage = "Your password is very strong!";
    break;
  default:
    feedbackMessage = "Unexpected error calculating strength.";
}

// 4.5 Displaying the strength rating and feedback
console.log("Strength rating:", strengthRating);
console.log(feedbackMessage);