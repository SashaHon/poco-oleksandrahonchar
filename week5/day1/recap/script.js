"use strict";

// function biggerNumber(num1, num2) {
//   return num1 > num2
//     ? `The greater number of ${num1} and ${num2} is ${num1}.`
//     : `The smaller number of ${num1} and ${num2} is ${num1}.`;
// }

// console.log(biggerNumber(3, 10));

// function helloWorld(lang) {
//   return lang === "de"
//     ? "Hallo Welt!"
//     : lang === "fr"
//     ? "Bonjour le monde!"
//     : lang === "es"
//     ? "Hola Mundo!"
//     : "Hello World!";
// }

// console.log(helloWorld("de"));

function retirementCalc() {
  let currentAge,
    retirementAge,
    yearsLeft,
    currentYear = new Date().getFullYear(),
    retirementYear;

  function setInputs() {
    alert(
      "Please enter a valid number for your current age and the age you want to retire"
    );
    currentAge = +prompt("What's your age?", 18);
    if (
      !currentAge ||
      isNaN(currentAge) ||
      currentAge < 1 ||
      currentAge > 100
    ) {
      setInputs();
    }
    retirementAge = +prompt("When do you want to retire?", 60);
    if (!retirementAge || isNaN(retirementAge) || retirementAge < currentAge) {
      setInputs();
    }
  }

  setInputs();
  yearsLeft = retirementAge - currentAge;
  retirementYear = currentYear + yearsLeft;

  return alert(
    `You have ${yearsLeft} years left until you can retire. It's ${currentYear}, so you can retire in ${retirementYear}.`
  );
}

retirementCalc();
