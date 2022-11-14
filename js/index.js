let now = new Date();
let newDate = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let newMonth = months[now.getMonth()];

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let newDay = days[now.getDay()];

let nowDate = document.querySelector(".newDate");
nowDate.innerHTML = `${newDay}, ${newDate} ${newMonth}, ${hours}:${minutes}`;

function searchCity1(event) {
    event.preventDefault();
    let seachInput = document.querySelector("#input");
    let city = document.querySelector(".currentCity");
    if (seachInput.value) {
        city.innerHTML = `${seachInput.value}`;
    }
}
let form = document.querySelector("#form");
form.addEventListener("submit", searchCity1);

function checkCelc() {
    let tempCelc = document.querySelector(".main");
    tempCelc.innerHTML = "-10 ";
}
let celcius = document.querySelector("#celc");
celcius.addEventListener("click", checkCelc);

function checkFar() {
    let tempFar = document.querySelector(".main");
    tempFar.innerHTML = "-50 ";
}
let fahrenheit = document.querySelector("#far");
fahrenheit.addEventListener("click", checkFar);

let city = "Kyiv";
let apiKey = "7059cb165caa3316bff682d263a01b1e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);

function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector(".main");
    let cityElement = document.querySelector(".currentCity");
    temperatureElement.innerHTML = `${temperature}`;
    cityElement.innerHTML = response.data.name;
    let feels = Math.round(response.data.main.feels_like);
    let feelsElement = document.querySelector("#feels");
    feelsElement.innerHTML = `Feels like: ${feels}°C`;
    let humidity = response.data.main.humidity;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `Humidity: ${humidity}%`;
    let wind = response.data.wind.speed;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = `Wind Speed: ${wind}m/s`;
}
function searchCity2(city) {
    let apiKey = "7059cb165caa3316bff682d263a01b1e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#input").value;
    searchCity2(city);
}
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", handleSubmit);
searchCity2(city);

function searchLocation() {
    navigator.geolocation.getCurrentPosition(searchPosition);
}
let findLocation = document.querySelector("#location");
findLocation.addEventListener("click", searchLocation);

function searchPosition(position) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);
}
