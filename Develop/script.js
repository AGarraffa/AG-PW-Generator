// Assignment Code

//global variables
var generateBtn = document.querySelector("#generate");
var length = ""
var charSet = ""
var pw = ""


// function to determine password length
function lengthPrompt (){
  length = Number(prompt("How long would you like the password to be? Choose a number between 8 and 128", "8"));
  console.log(typeof length)

  //validates the entry
  if (length < 8 || length >128 || isNaN(length) || !Number.isInteger(length)){
    alert("That is not a valid entry. Please try again");
    lengthPrompt();
  }

    return length;
}


//function to develop the characters used in the password
function input(){
  let inUpper = confirm("Do you want uppercase letters?");
  let inLower = confirm("Do you want lowercase letters?");
  let inNumber = confirm("Do you want numbers?");
  let inSpec = confirm("Do you want special characters?");

  inUpper ? (charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ") : "";
  inLower ? (charSet += "abcdefghijklmnopqrstuvwxyz") : "";
  inNumber ? (charSet += "1234567890") : "";
  inSpec ? (charSet += "!#$%&'()*+,-./:;<=>?@[^_`{|}~") : "";

  //validates the entry
  if (!inUpper && !inLower && !inNumber && !inSpec){
    alert("Please select one of character types.")
    input()
  }

  return charSet;
}

//function that generates the actual password
function generatePassword(){

  lengthPrompt()
  input()

  for (let index = 0; index < length; index++) {
    pw += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return pw;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//I tried to do all of the conditional statements within a single generatePassword function but I was running in to issues with the data validation. Doing the validation in a separate function solved that issue. 