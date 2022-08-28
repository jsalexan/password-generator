// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Your password is generating.");

  var alphaLower = "abcdefghijklmnopqrstuvwxyz"
  var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";

prompt 
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

  return ("GENERATED PASSWORD");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
