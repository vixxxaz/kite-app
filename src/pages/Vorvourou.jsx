import React from 'react'
import {MapContainer, TileLayer, Marker, Popup, Polygon} from 'react-leaflet'
import Meteo from '../components/Meteo';

const Vorvourou = () => {

    const position=[40.192850, 23.809156];
   

    const latitude = 40.19;
    const longitude = 23.80;

  return (
    <section>
        <h1 className='forecast-title'>Vourvourou spot</h1>
    <div className='Leaflet-container'>
        <MapContainer style={{width:'500px', height:'500px'}} center={position} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                
                <Marker position={[40.192850, 23.809156]}>
                   
                </Marker>              
        </MapContainer> 
    </div>
    <div>
       
        <Meteo latitude={latitude} longitude={longitude} />
    </div>
    </section>
       
  )
}

export default Vorvourou