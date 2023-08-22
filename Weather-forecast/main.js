"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var inptEle = document.querySelector("#loc");
var forecastEle = document.querySelector(".Forecast");
var placeEle = document.querySelector(".place");
var currentEle = document.querySelector(".current");
var getForecast = function () {
  var ev = event;
  ev.preventDefault();
  console.log("location", inptEle.value);
  getForecastData(inptEle.value);
  inptEle.value = "";
  //     navigator.geolocation.getCurrentPosition(
  // (position)=>{console.log(position)},(err)=>{console.log(err)});
};
// const getCurrLocForecast = () => {
//       const ev=event as MouseEvent
//     ev.preventDefault();
//     console.log("location", inptEle.value);
//     getForecastData(inptEle.value);
//     inptEle.value = "";
//     navigator.geolocation.getCurrentPosition(
// (position)=>{console.log(position)},(err)=>{console.log(err)});
// }
function getForecastData(location) {
  console.log(location);
  var key = "b65913ba233f45b3b05102250232208";
  var url = "http://api.weatherapi.com/v1/forecast.json?key="
    .concat(key, "&q=")
    .concat(location, "&days=5&aqi=no&alerts=yes");
  console.log(url);
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      renderData(data, location);
    })
    .catch(function (err) {
      console.log(err);
    });
}
function renderData(data, location) {
  console.log(data);
  forecastEle.innerHTML = "";
  placeEle.innerText = location;
  currentEle.innerHTML = "<h4>Current Temprature: ".concat(
    data.current.feelslike_c,
    "\u2103</h4>"
  );
  data.forecast.forecastday.forEach(function (d) {
    var item = document.createElement("div");
    item.innerHTML = '<p>\n        <img src="https://'
      .concat(d.day.condition.icon, '"/>\n        <br>\n        ')
      .concat(d.day.condition.text, "\n        MaxTemp:")
      .concat(d.day.maxtemp_c, "\u2103<br>\n        MinTemp:")
      .concat(d.day.mintemp_c, "\u2103<br>\n        Humidity:")
      .concat(d.day.avghumidity, "<br>\n        Sunrise:")
      .concat(d.astro.sunrise, "<br>\n        Sunset:")
      .concat(d.astro.sunset, "<br>\n        MaxWindSpeed(mph):")
      .concat(d.day.maxwind_mph, "mph<br>\n        </p>\n        ");
    forecastEle.appendChild(item);
  });
}
