import React, { useState, useEffect } from 'react';

function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.68&longitude=22.20&daily=sunrise,sunset,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=auto');
      const data = await response.json();
      setWeatherData(data);
    }

    fetchData();
  }, []);
  console.log(weatherData)
  function WeatherRow({ date, sunrise, sunset, windspeed, windgusts, winddirection }) {
    return (
      <tr>
        <td>{date}</td>
        <td>{sunrise}</td>
        <td>{sunset}</td>
        <td>{windspeed}</td>
        <td>{windgusts}</td>
        <td>{winddirection}</td>
      </tr>
    );
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Sunrise</th>
            <th>Sunset</th>
            <th>Max windspeed</th>
            <th>Max wind gusts</th>
            <th>Dominant wind direction</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(weatherData).length > 0 ? (
            Object.keys(weatherData).map((index) => (
              <WeatherRow
                key={index}
                date={weatherData[index].time}
                sunrise={weatherData[index].sunrise}
                sunset={weatherData[index].sunset}
                windspeed={weatherData[index].windspeed_10m_max}
                windgusts={weatherData[index].windgusts_10m_max}
                winddirection={weatherData[index].winddirection_10m_dominant}
              />
            ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
      </tbody>
      </table>
    </div>
  );
}

export default WeatherDisplay;
