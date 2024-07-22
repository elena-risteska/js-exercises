const numbersArray = [3, 1, 2, -4];

//convert minutes to seconds
function minutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(minutesToSeconds(2));

//check for ? at the end
function ensureQuestion(string) {
  if (string.endsWith("?")) {
    console.log("it already ends with a '?'");
  } else {
    console.log(string + "?");
  }
}
ensureQuestion("pozz?");

//find max number
function maxOfNumbers(numbers) {
  return Math.max(...numbers);
}
console.log(maxOfNumbers(numbersArray));

//change case
function changeCase(string) {
  console.log(string.toUpperCase());
  console.log(string.toLowerCase());
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
console.log(changeCase("neznamneshto"));

//remove space
function noSpace(string) {
  let newString = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      newString += string[i];
      // novaNiza.pop();    druga varijanta sho ne znam oti ne raboti
    }
    // else {
    //     novaNiza += niza[i];
    // }
  }
  return newString;
  // return niza.split(" ").join("");   druga varijanta za return
}
console.log(noSpace("proveri dali ima"));

//sum square of numbers
function sumPow(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += Math.pow(number, 2);
  });
  return sum;
}
console.log(sumPow(numbersArray));

//sum only positive
function sumPositive(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    if (number > 0) {
      sum += number;
    }
  });
  return sum;
}
console.log(sumPositive(numbersArray));
