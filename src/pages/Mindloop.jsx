import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import Meteo from '../components/Meteo';




const Mindloop = () => {

    const position=[40.374048, 22.957411];
    

    const latitude = 40.37;
    const longitude = 22.95;

  return (
    <section>
        <h1 className='forecast-title'>Spot de l'ecole mindloop</h1>
    <div className='Leaflet-container'>
        <MapContainer style={{width:'500px', height:'500px'}} center={position} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={[40.374048, 22.957411]}>
                    <Popup>
                        <p>Some really good west wind steady for few hour in mid-day, other orientation have to be far of the shore. Super shallow</p>
                    </Popup>
                </Marker>
               
        </MapContainer> 
    </div>
    <div>
    <Meteo latitude={latitude} longitude={longitude} /> 
    </div>
    </section>
    
    
  )
}

export default Mindloop