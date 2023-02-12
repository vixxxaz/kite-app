import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

const WeatherDisplay = () => {
  
  const [forecast, setForecast] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    // setIsLoading(true);
    async function getData() {
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=40.68&longitude=22.20&daily=sunrise,sunset,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=auto'
      try{
        const response = await axios.get(url);
        setForecast(response.data.daily);
      } catch(err){
        console.log(err)
      }
      getData()

    } 
    // axios
      // .get(`https://api.open-meteo.com/v1/forecast?latitude=40.68&longitude=22.20&daily=sunrise,sunset,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=auto`)
     
      // .then(response => setForecast(response.data.daily))  
     
      // .catch(err => {
      //   setError(err);
        // setIsLoading(false);
      // });
  }, []);
  console.log(forecast)
  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  const windGustArray = forecast;
  console.log(windGustArray)
  const txtWind0 = windGustArray.windspeed_10m_max[0];
  localStorage.setItem('wind', txtWind0);

  // const cardinalDirections = [
  //   "N", "NNE", "NE", "ENE",
  //   "E", "ESE", "SE", "SSE",
  //   "S", "SSW", "SW", "WSW",
  //   "W", "WNW", "NW", "NNW"
  // ];

  // function degreesToCardinal(degrees) {
  //   const index = Math.round(degrees / 22.5);
  //   return cardinalDirections[index % 16];
  // }
  // const sunTime = (windGustArray.sunrise[i]).split("T");
  //   let hour = sunTime[1].substring(0,2);
  //   let min = sunTime[1].substring(3,5);

  //   const sunsetTime = (windGustArray.sunset[i]).split("T");
  //   let hourS = sunsetTime[1].substring(0,2);
  //   let minS = sunsetTime[1].substring(3,5);

  return (
   <div>
      <h3>Live Forecast</h3>
      <p>Wind today at 10m altitude: {txtWind0} knts</p>
      {/* <table>
        <tr>
          <th>Date</th>
          <th>Sunrise</th>
          <th>Sunset</th>
          <th>Max Wind Speed</th>
          <th>Max Wind Gusts</th>
          <th>Dominant Wind Direction in °</th>
        </tr>
        {windGustArray.time.map((time, index) => (
          <tr key={index}>
            <td>{time}</td>
            <td>{windGustArray.sunrise[index]}</td>
            <td>{windGustArray.sunset[index]}</td>
            <td>{windGustArray.windspeed_10m_max[index]}</td>
            <td>{windGustArray.windgusts_10m_max[index]}</td>
            <td>{degreesToCardinal(windGustArray.winddirection_10m_dominant[index])}</td>
            </tr>
            ))}
        </table> */}
    </div>
  );
};

export default WeatherDisplay;

            