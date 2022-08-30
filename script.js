// Assignment Code
//Main function that will determine all the elements that go into the password.
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Variable that will hold the user's choice of characters.
var useableCharacters = "";

// Variables for the various character-type choices.
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*-_=+*";
  
// Pop up prompt for user to select the length of their password.
  var userCharNum = window.prompt("Choose a password length between 8 and 128 characters.")

  // An integer will be parsed from a string.
  var numCharacters = parseInt(userCharNum)

// If the user types in characters that are not numbers, they will get thie alert.
  if (isNaN(numCharacters)) {
    window.alert("Please start over and enter a valid number between 8-128.")
    return
  } 
// If the user types in numbers outside the given parameters, they will get thie alert.
  if (numCharacters < 8 || numCharacters > 128) {
    window.alert("Please start over and enter a valid number between 8-128.")
    return
  }
  // TODO: Do I want to use an else?

//The following four varients will be true or false based on the user response to the pop up questions.
var userAlphaLower = window.confirm("Do you want to include lowercase letters? OK for yes, Cancel for no.");

var userAlphaUpper = window.confirm("Do you want to include uppercase letters? OK for yes, Cancel for no.");

var userNumbers = window.confirm("Do you want to include numbers? OK for yes, Cancel for no.");

var userSymbols = window.confirm("Do you want to include symbols? OK for yes, Cancel for no.");

if (
  userAlphaUpper === false &&
  userAlphaLower === false &&
  userNumbers === false &&
  userSymbols === false
) {
  window.alert("You must select at least one character type. Please start over.");
  }

if (userAlphaUpper===true) {
  useableCharacters = useableCharacters.concat(alphaUpper)
}
if (userAlphaLower===true) {
  useableCharacters = useableCharacters.concat(alphaLower)
}
if (userNumbers===true) {
  useableCharacters = useableCharacters.concat(numbers)
}
if (userSymbols===true) {
  useableCharacters = useableCharacters.concat(symbols)
}
console.log(useableCharacters)

var password = "";

for (var i = 0; i < numCharacters; i++) {
  password += useableCharacters.charAt(Math.floor(Math.random() * useableCharacters.length))
}
return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//Prompt to select criteria: 
  // - How many characters? 8 - 128 (prompt)
  //
  // - Include lowercase characters? (prompt with boolean)
  // - Include uppercase characters? (prompt with boolean)
  // - Include numbers? (prompt with boolean)
  // - Include special characters? (prompt with boolean)
  //
  // - Ensure at lease one value type has been selected and that a character length is picked. (input validation) If not, an error message.(code)
  // - Math code for random generation (code)

  // return ("GENERATED PASSWORD");