// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of all character types in individual variables
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
var numbericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "/", ";", ":", "<", ">", "?", "_", "~"];

// Variables for confirmation of character types and length
var confirmLength = "";
var confirmLowerCaseChar;
var confirmUpperCaseChar;
var confirmNumericChar;
var confirmSpecialChar;

// Function to generate the unique password with selected length and characters
function generatePassword() {
  // The window prompt to take user input of password length within min/max character parameters 
  confirmLength = window.prompt("Please input length of desired password", "12");

  while(confirmLength < 8) {
    window.alert("Password length must be 8 characters or more");
    generatePassword();
    return;
  } 
  while(confirmLength >=129) {
    window.alert("Password length must be 128 characters or less");
    generatePassword();
    return;
  }

  // A window alert telling you the length of the password the user selected
  window.alert("Your password will be " + confirmLength + " characters long");
  
  // The confirmation of different character types to be used in the password
  confirmLowerCaseChar = window.confirm("Click OK if you would like to include lowercase characters");
  confirmUpperCaseChar = window.confirm("Click OK if you would like to include uppercase characters");
  confirmNumericChar = window.confirm("Click OK if you would like to include numeric characters");
  confirmSpecialChar = window.confirm("Click OK if you would like to include special characters");

  // A while loop to confirm the user has selected at least one character type
  while(confirmLowerCaseChar === false && confirmUpperCaseChar === false && confirmNumericChar === false && confirmSpecialChar === false) {
    window.alert("You must select at least one type of character set");
    confirmLowerCaseChar = window.confirm("Click OK if you would like to include lowercase characters");
    confirmUpperCaseChar = window.confirm("Click OK if you would like to include uppercase characters");
    confirmNumericChar = window.confirm("Click OK if you would like to include numeric characters");
    confirmSpecialChar = window.confirm("Click OK if you would like to include special characters");
  }

  // Variable used to pull the user input of selected characters and display what was selected back to the user
  var charConfirmation = "";

  if (confirmLowerCaseChar) {
    charConfirmation += "Your password will have lowercase characters\n"; 
  } else {
    charConfirmation += "Your password will not have lowercase characters\n"
  }
  if (confirmUpperCaseChar) {
    charConfirmation += "Your password will have uppercase characters\n"; 
  } else {
    charConfirmation += "Your password will not have uppercase characters\n"
  }
  if (confirmNumericChar) {
    charConfirmation += "Your password will have numeric characters\n"; 
  } else {
    charConfirmation += "Your password will not have numeric characters\n"
  }
  if (confirmSpecialChar) {
    charConfirmation += "Your password will have special characters\n"; 
  } else {
    charConfirmation += "Your password will not have special characters\n"
  }

  window.alert(charConfirmation);

  // Variable to concat/combine selected character types into a single array
  var passwordChar = [];

  if (confirmLowerCaseChar) {
    passwordChar = passwordChar.concat(lowerCaseChar);
  }
  if (confirmUpperCaseChar) {
    passwordChar = passwordChar.concat(upperCaseChar);
  }
  if (confirmNumericChar) {
    passwordChar = passwordChar.concat(numbericChar);
  }
  if (confirmSpecialChar) {
    passwordChar = passwordChar.concat(specialChar);
  }

  // Variable to take the new array of combined character types and pull the selected length by the user and randomly arrange them for a unique password output
  var finalPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    finalPassword = finalPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
  }
   
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
