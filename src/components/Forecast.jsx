import React from 'react'
import {UseFetch} from '../components/UseFetch'

const Forecast = ({latitude, longitude}) => {

    const {data , error, loading} =  UseFetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&timezone=auto`)
    console.log(data)
  
    // const txtWind0 = windGustArray.windspeed_10m_max[0];
    // localStorage.setItem('wind', txtWind0);
    // console.log(txtWind0)

    //change les direction de degree a direction
    const cardinalDirections = [
        "N", "NNE", "NE", "ENE",
        "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW",
        "W", "WNW", "NW", "NNW"
      ];
    
    function degreesToCardinal(degrees) {
    const i = Math.round(degrees / 22.5);
    return cardinalDirections[i % 16];
    }

    if (loading) {
      return <p>Loading forecast data...</p>
    }
    if (error) {
      return <p>Error loading forecast data. Please try again later.</p>
    }

    if(data){
      const windGustArray = data;
      console.log(windGustArray)
    return (
      
    <div>
        <h3 className='forecast-title'>Week Forecast</h3>
        
      {/* <p>Wind today at 10m altitude: {windGustArray.windspeed_10m_max[0]} knts</p> */}
      <table className='forecast'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Sunrise</th>
            <th>Sunset</th>
            <th>Max Wind Speed</th>
            <th>Max Wind Gusts</th>
            <th>Wind Direction</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(windGustArray.time).map((index) => (
          <tr key={index}>
            <td>{windGustArray.time[index]}</td>
            <td>{new Date(windGustArray.sunrise[index]).toISOString().split('T')[1].split(':').slice(0,2).join(':')}</td>
            <td>{new Date(windGustArray.sunset[index]).toISOString().split('T')[1].split(':').slice(0,2).join(':')}</td>
            <td>{windGustArray.windspeed_10m_max[index]}</td>
            <td>{windGustArray.windgusts_10m_max[index]}</td>
            <td>{degreesToCardinal(windGustArray.winddirection_10m_dominant[index])}</td>
            </tr>
            ))}
          </tbody>
        </table> 
    </div>
  )
}
return null
}

export default Forecast