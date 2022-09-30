import React, { useState } from 'react';
import Search from './Components/search/search'
import "./App.css";
import Forecast from './Components/Forecast/forecast';
import CurrentWeather from './Components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';

function Weather() {

  const [currentWeather, setCurrentWeather] = useState(null); //hooks
  const [forecast, setForecast] = useState(null); //hooks




  const handleOnSearchChange = (searchData) => { // we passed it to app js file
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );


    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();


        setCurrentWeather({ city: searchData.label, ...weatherResponse }); // we are setting the response to the current data that we are getting from the api with the city and country code
        setForecast({ city: searchData.label, ...forecastResponse });   // we are setting the response to the current data that we are getting from the api

      })
      .catch(console.log);
  }
  return (
    <div className="container">
      <Search OnSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div> //we got a method that is calling the value that we are getting from the handleOnSearchChange
  );
}

export default Weather;
