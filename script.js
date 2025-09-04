let length = 0;
let chars = false;
let nums = false;
let syms = false;
let password = "";
const generatedPasswordE = document.querySelector("#generatedPassword");
const generateBtnE = document.querySelector("#generate");
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*-_+=?";
let numbers = "0123456789";

generateBtnE.addEventListener("click", generate);

function generate() {
  length = Number(document.querySelector("#length").value);
  chars = document.querySelector("#char").checked;
  nums = document.querySelector("#num").checked;
  syms = document.querySelector("#sym").checked;
  password = "";
  generatedPasswordE.style.color = "black";
  if (length < 1) {
    generatedPasswordE.textContent = "Please enter a length of 1 or more";
    generatedPasswordE.style.color = "red";
    return;
  }
  if (!chars && !nums && !syms) {
    generatedPasswordE.textContent =
      "Please select at least one of the following: characters, numbers or symbols.";
    generatedPasswordE.style.color = "red";
    return;
  }
  for (i = 0; i < length; i++) {
    randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
        if (chars) {
          randomValue = Math.floor(Math.random() * characters.length);
          password += characters[randomValue];
        } else {
          i -= 1;
        }
        break;
      case 1:
        if (nums) {
          randomValue = Math.floor(Math.random() * numbers.length);
          password += numbers[randomValue];
        } else {
          i -= 1;
        }
        break;
      case 2:
        if (syms) {
          randomValue = Math.floor(Math.random() * symbols.length);
          password += symbols[randomValue];
        } else {
          i -= 1;
        }
        break;
    }
  }
  generatedPasswordE.textContent = password;
}
