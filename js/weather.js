// grab dom elements
const searchBtn = document
  .getElementById("search-btn")
  .addEventListener("click", getWeather);

const input = document.getElementById("input");

console.log(input, searchBtn);

function getWeather() {
  console.log("button clicked");
}
