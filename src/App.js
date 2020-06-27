import React, {useState} from 'react';
import './App.css';

const api = {
  key: "475dcff19c6e96a3c3e6bce0f43036cb",
  base: "https://api.openweathermap.org/data/2.5/"
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
  
const [query, setQuery] = useState('');
const [weather, setWeather] = useState('');

const search = evt => {
  if (evt.key === "Enter") {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
  }
}

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search the City.."
          onChange={e=>setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
    </div>
    {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;


