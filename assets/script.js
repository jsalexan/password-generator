// Assignment Code
// Button that will be clicked to run the code.
var generateBtn = document.querySelector("#generate");

function generatePassword() { // Variable that will hold the user's choice of characters.
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

    // If the user types in characters that are not numbers, they will get this alert.
    if (isNaN(numCharacters)) {
        alert("Please start over and enter a valid number between 8-128.")
        return
    }

    // If the user types in numbers outside the given parameters, they will get this alert.
    if (numCharacters < 8 || numCharacters > 128) {
        alert("Please start over and enter a valid number between 8-128.")
        return
    }

    // The following four varients will be true or false based on the user response to the pop up questions.
    var userAlphaLower = confirm("Do you want to include lowercase letters? OK for yes, Cancel for no.");
    if (userAlphaLower === true) {
        alert("Your password WILL include lowercase letters.");
    } else {
        alert("You password will NOT include lowercase letters.");
    }

    var userAlphaUpper = confirm("Do you want to include uppercase letters? OK for yes, Cancel for no.");
    if (userAlphaUpper === true) {
        alert("Your password WILL include uppercase letters.");
    } else {
        alert("You password will NOT include uppercase letters.");
    }

    var userNumbers = confirm("Do you want to include numbers? OK for yes, Cancel for no.");
    if (userNumbers === true) {
        alert("Your password WILL include numbers.");
    } else {
        alert("You password will NOT include numbers.");
    }

    var userSymbols = confirm("Do you want to include symbols? OK for yes, Cancel for no.");
    if (userSymbols === true) {
        alert("Your password WILL include symbols.");
    } else {
        alert("You password will NOT include symbols.");
    }

    // The following checks to make sure the user has selected at least one character type from the four offered. If all are false, they get the next prompt.
    if (userAlphaUpper === false && userAlphaLower === false && userNumbers === false && userSymbols === false) {
        alert("You must select at least one character type. Please start over.");
    }

    // The following checks if the user choice for each variable is true, and if so, adds the corresponding character list variable to a new one: useableCharacters.
    if (userAlphaUpper) {
        useableCharacters += alphaUpper
    }

    if (userAlphaLower) {
        useableCharacters += alphaLower
    }

    if (userNumbers) {
        useableCharacters += numbers
    }

    if (userSymbols) {
        useableCharacters += symbols
    }

    // Establishes a variable for the final output.
    var finalResult = "";

    // Calculates the password by taking the useable characters and length
    for (var i = 0; i < numCharacters; i++) {
        finalResult += useableCharacters.charAt(Math.floor(Math.random() * useableCharacters.length))
    }
    return finalResult
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
