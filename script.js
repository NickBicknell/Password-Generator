// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
var numbericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "/", ";", ":", "<", ">", "?", "_", "~"];

var confirmLength = "";
var confirmLowerCaseChar;
var confirmUpperCaseChar;
var confirmNumericChar;
var confirmSpecialChar;

function generatePassword() {
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

  window.alert("Your password will be " + confirmLength + " characters long");
  
  confirmLowerCaseChar = window.confirm("Click OK if you would like to include lowercase characters");
  confirmUpperCaseChar = window.confirm("Click OK if you would like to include uppercase characters");
  confirmNumericChar = window.confirm("Click OK if you would like to include numeric characters");
  confirmSpecialChar = window.confirm("Click OK if you would like to include special characters");

  while(confirmLowerCaseChar === false && confirmUpperCaseChar === false && confirmNumericChar === false && confirmSpecialChar === false) {
    window.alert("You must select at least one type of character set");
    confirmLowerCaseChar = window.confirm("Click OK if you would like to include lowercase characters");
    confirmUpperCaseChar = window.confirm("Click OK if you would like to include uppercase characters");
    confirmNumericChar = window.confirm("Click OK if you would like to include numeric characters");
    confirmSpecialChar = window.confirm("Click OK if you would like to include special characters");
  }

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
