const textArea = document.querySelector("textarea");
const characters = document.querySelector("#characters");
const counterContainer = document.querySelector("#counterContainer");
const maxCharacters = document.querySelector("#maxCharacters");
const maxValue = 10;
let counter = 0;

maxCharacters.textContent = maxValue;

textArea.addEventListener("input", () => {
  if (counter >= maxValue) {
    textArea.value = textArea.value.substring(0, maxValue);
  }

  counter = textArea.value.length;
  characters.textContent = counter;

  if (counter > maxValue - 5) {
    counterContainer.style.color = "red";
  } else {
    counterContainer.style.color = "black";
  }
});
