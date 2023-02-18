// grab dom elements
const searchBtn = document
  .getElementById("search-btn")
  .addEventListener("click", getInputWeather);

console.log(input, searchBtn);

function getInputCity() {
  const input = document.getElementById("input");
  getCityWeather(input.value);
}

// fetch weather data from api
function getCityWeather(city) {
  // fetch data from an API that takes in a city name and returns the weather
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  response = response.json();
  console.log(response);
}
