import { Weather } from "./types";

const inptEle = <HTMLInputElement>document.querySelector("#loc");
const forecastEle = <HTMLDivElement>document.querySelector(".Forecast");
const placeEle = <HTMLHeadingElement>document.querySelector(".place");
const currentEle = <HTMLDivElement>document.querySelector(".current");


const getForecast=()=>{
    const ev=event as MouseEvent
    ev.preventDefault();
    console.log("location", inptEle.value);
    getForecastData(inptEle.value);
    inptEle.value = "";
//     navigator.geolocation.getCurrentPosition(
// (position)=>{console.log(position)},(err)=>{console.log(err)});


}
// const getCurrLocForecast = () => { 
//       const ev=event as MouseEvent
//     ev.preventDefault();
//     console.log("location", inptEle.value);
//     getForecastData(inptEle.value);
//     inptEle.value = "";
//     navigator.geolocation.getCurrentPosition(
// (position)=>{console.log(position)},(err)=>{console.log(err)});
// }

function getForecastData(location: string): void { 
    console.log(location);
    const key:string = "b65913ba233f45b3b05102250232208";
    const url: string = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=5&aqi=no&alerts=yes`;
    console.log(url);
    fetch(url).then((data) => {return data.json()}).then((data) => { renderData(data,location)}).catch(err => { console.log(err) });



}
function renderData(data: Weather,location:string) {
    console.log(data)
    forecastEle.innerHTML = "";
    placeEle.innerText = location;
    currentEle.innerHTML = `<h4>Current Temprature: ${data.current.feelslike_c}℃</h4>`;
    data.forecast.forecastday.forEach(d => { 
        const item = <HTMLDivElement>document.createElement("div");
        item.innerHTML = `<p>
        <img src="https://${d.day.condition.icon}"/>
        <br>
        ${d.day.condition.text}
        MaxTemp:${d.day.maxtemp_c}℃<br>
        MinTemp:${d.day.mintemp_c}℃<br>
        Humidity:${d.day.avghumidity}<br>
        Sunrise:${d.astro.sunrise}<br>
        Sunset:${d.astro.sunset}<br>
        MaxWindSpeed(mph):${d.day.maxwind_mph}mph<br>
        </p>
        `
        forecastEle.appendChild(item);
    })
   
 }
