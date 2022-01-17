//global variables
var generateBtn = document.querySelector("#generate");
var length = "";
var charSet = "";
var pw = "";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var num = "1234567890";
var spec = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
var inUpper = ""
var inLower = ""
var inNumber = ""
var inSpec = ""

// function to determine password length
function lengthPrompt (){
  length = Number(prompt("How long would you like the password to be? Choose a number between 8 and 128", "8"));

  // validates the entry
  if (length < 8 || length >128 || isNaN(length) || !Number.isInteger(length)){
    alert("That is not a valid entry. Please try again");
    lengthPrompt();
  }
    console.log(`The pw is ${length} characters long.`);
    return length;
}


// function to develop the characters used in the password
function input(){
  inUpper = confirm("Do you want uppercase letters?");
  inLower = confirm("Do you want lowercase letters?");
  inNumber = confirm("Do you want numbers?");
  inSpec = confirm("Do you want special characters?");

  inUpper ? (charSet += upper) : "";
  console.log(charSet);
  inLower ? (charSet += lower) : "";
  console.log(charSet);
  inNumber ? (charSet += num) : "";
  console.log(charSet);
  inSpec ? (charSet += spec) : "";
  console.log(charSet);

  console.log(inUpper)
  console.log(inLower)
  console.log(inNumber)
  console.log(inSpec)
  // validates the entry
  if (!inUpper && !inLower && !inNumber && !inSpec){
    alert("Please select one of character types.")
    input()
  }

  console.log(`The pw will consist of the following characters ${charSet}.`)
  return charSet;
}

// function that generates the password with the given criteria
function createPassword() {

  pw = "";

  for (let index = 0; index < length; index++) {
    pw += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(`The current pw is ${pw}.`)
  
  pwValidate();
  
  return pw;
  
}

//function that validates the password to make sure it contains at least one of each of the chosen character types
function pwValidate() {
  let pwArr = Array.from(pw);
  let upperTest = 0;
  let lowerTest = 0;
  let numTest = 0;
  let specTest = 0;


  console.log(pwArr)

  for (let i = 0; i < length; i++) {
    if (upper.includes(pwArr[i])){
      upperTest++;
    }
    if (lower.includes(pwArr[i])){
      lowerTest++;
    }
    if (num.includes(pwArr[i])){
      numTest++;
    }
    if (spec.includes(pwArr[i])){
      specTest++;
    }
  }

  console.log(upperTest)
  console.log(lowerTest)
  console.log(numTest)
  console.log(specTest)

  
  
  if ((inUpper && upperTest === 0) || (inLower && lowerTest === 0) || (inNumber && numTest === 0) || (inSpec && specTest === 0)) {
    console.log("Invalid password, trying again.")
    createPassword();

  }

  else {
    console.log("The password was successfully generated")
    
    return pw;
  }

}

// function that calls the prompts functions and creates a validates password
function generatePassword(){

  lengthPrompt()
  input()
  createPassword()

  return pw;

}


// function that writes the password to the page. The generator function is called here as well
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// event listener for button press
generateBtn.addEventListener("click", writePassword);

