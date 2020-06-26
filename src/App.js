import React from 'react';
import './App.css';


const api = {
  key: "475dcff19c6e96a3c3e6bce0f43036cb",
  base: "https://home.openweathermap.org/api_keys"
}
const dateBuilder = (d) => {
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let dataObj = new Date();
let hours = dataObj.getHours();
let minutes = dataObj.getMinutes();
let seconds = dataObj.getSeconds();
let date = dataObj.getUTCDate();
let month = months[dataObj.getUTCMonth() + 1];
let year = dataObj.getUTCFullYear();
var day = days[
  dataObj.getDay() ];
let amOrPm = hours> 12? 'PM' : 'AM';
  return `${day} ${date} ${month} ${year} at ${hours} : ${minutes} : ${seconds} ${amOrPm}`
}
function App() {
  

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="search.."
        />
    </div>
    <div className="location-box">
      <div className="location">New York City,US </div>
      <div className="date">{dateBuilder(new Date())} </div>
      </div>
    <div className="weather-box">
      <div className="temp">
        15C
      </div>
      <div className="weather">
        sunny
      </div>

      </div>

      </main>
    </div>
  );
}

export default App;
