const counter = document.querySelector("#counter");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const resetButton = document.querySelector("#reset");
const container = document.querySelector("#container");

let count = 0;

incrementButton.addEventListener("click", () => {
  count++;
  counter.textContent = count;
  setColor(count);
});
decrementButton.addEventListener("click", () => {
  count--;
  counter.textContent = count;
  setColor(count);
});
resetButton.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
  setColor(count);
});

setColor = (count) => {
  if (count < 0) {
    container.style.background = "red";
  } else if (count > 0 && count < 10) {
    container.style.background = "yellow";
  } else if (count == 0) {
    container.style.background = "grey";
  } else {
    container.style.background = "green";
  }
};
