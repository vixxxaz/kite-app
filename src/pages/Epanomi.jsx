import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import Meteo from '../components/Meteo';




const Epanomi = () => {

    const position=[40.374742, 22.890661];

    const latitude = 40.47;
    const longitude = 22.81;

  return (
    <section>
        <h1 className='forecast-title'>Epanomi</h1>
        <div className='Leaflet-container'>
            <MapContainer style={{width:'500px', height:'500px'}} center={position} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    <Marker position={[40.374742, 22.890661]}>
                        <Popup>
                            <p>Dirt road to arrive there bit tricky, deep watter and wavy.Long sand point </p>
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

export default Epanomi