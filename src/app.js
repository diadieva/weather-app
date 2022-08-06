function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  temperatureElement.innerHTML = Math.round(response.data.main.temp)
cityElement.innerHTML = response.data.name;
}
let apiKey = "67463d90019f3c15672ebddc2b82fac3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=50.43331&lon=30.5167&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);