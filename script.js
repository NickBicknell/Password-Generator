// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "-", "/", ";", ":", "<", ">", "?", "_", "~"];
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

var confirmLength = "";
var confirmNumericChar;
var confirmSpecialChar;
var confirmLowerCaseChar;
var confirmUpperCaseChar;

function generatePassword() {
  var confirmLength = window.prompt("Please input length of desired password");

  while(confirmLength < 8) {
    window.alert("Password length must be 8 characters or more");
    var confirmLength = window.prompt("Please input length of desired password:");
  } while(confirmLength >=129) {
    window.alert("Password length must be 128 characters or less");
    var confirmLength = window.prompt("Please input length of desired password:");
  }
  
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


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
