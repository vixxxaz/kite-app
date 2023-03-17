import { useState, useEffect } from 'react';

function Meteo({latitude, longitude}) {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,sunrise,sunset,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&windspeed_unit=kn&timezone=auto`
      );
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, [latitude, longitude]);

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

  if (!data) {
    return <div>Loading...</div>;
  }
  const txtWind0 = data.daily.windspeed_10m_max[0];
    localStorage.setItem('wind', txtWind0);
    console.log(txtWind0)

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{textAlign:"center"}}>Wind Data</h1>
      <p style={{textAlign:"center", color: "white"}}>Le vent aujourd'hui est de {txtWind0}</p>
      <table
        style={{
          backgroundColor: 'white',
          borderCollapse: 'collapse',
          margin: 'auto',
          borderRadius: '25px'
          
        }}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Sunrise</th>
            <th>Sunset</th>
            <th>Wind Speed (knots)</th>
            <th>Wind gust (knots)</th>
            <th>Wind direction</th>
            <th>Temperature 2M </th>          
          </tr>
        </thead>
        <tbody>
          {data.daily.time.map((date, index) => (
            <tr key={date}>
              <td>{new Date(date).toLocaleDateString('en-EN', { month: 'short', day: 'numeric' })}</td>
              <td>{new Date(data.daily.sunrise[index]).toISOString().split('T')[1].split(':').slice(0,2).join(':')}</td>
              <td>{new Date(data.daily.sunset[index]).toISOString().split('T')[1].split(':').slice(0,2).join(':')}</td>
              <td>{data.daily.windspeed_10m_max[index]}</td>
              <td>{data.daily.windgusts_10m_max[index]}</td>
              <td>{degreesToCardinal(data.daily.winddirection_10m_dominant[index])}</td>
              <td>{data.daily.temperature_2m_max[index]} °</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Meteo;
