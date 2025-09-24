document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const tempretureDisplay = document.getElementById("tempreture");
  const descritpitonDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"; //env variables

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;
    // it may throw an error
    // server/database is always is another contient

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }

    // we make webresquest
  });

  async function fetchWeatherData(city) {
    // get the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    try {
      const response = await fetch(url);
      console.log(typeof response);
      console.log("response", response);

      if (!response.ok) {
        throw new Error(`Response States: %{response.status}`);
      }

      const jsonFile = await response.json();
      console.log(jsonFile);
      return jsonFile;
    } catch (error) {
      // console.error(error.errorMessage);
    }
  }

  function displayWeatherData(weatherData) {
    //display
    console.log(weatherData);
    const { name, main, weather } = weatherData;
    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

    //unlock the display

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
