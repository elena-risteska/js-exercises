const backgroundSelector = document.querySelector("#backgroundSelector");
const randomColor = document.querySelector("#randomColor");

backgroundSelector.addEventListener("input", (event) => {
  document.body.style.backgroundColor = event.target.value;
});

getRandomColor = () => {
  return Math.floor(Math.random() * 256);
};

randomColor.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
});
