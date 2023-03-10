import React from 'react'
import {MapContainer, TileLayer, Marker, Popup, Polygon} from 'react-leaflet'
import Meteo from '../components/Meteo';

const Angelo = () => {

    const position=[40.494988, 22.817900];
    //ajout de la zone de kite
    const polygonCoords = [
        [40.495223, 22.817472],
        [40.487083, 22.816271],
        [40.490034, 22.791086]
    ];

    const latitude = 40.68;
    const longitude = 22.20;

  return (
    <section>
        <h1 className='forecast-title'>Angelo</h1>
    <div className='Leaflet-container'>
        <MapContainer style={{width:'500px', height:'500px'}} center={position} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Polygon positions={polygonCoords} />
                <Marker position={[40.494988, 22.817900]}>
                    <Popup>
                        <p>A lot of turbulence to launch the kite ,put it on the sea side, avoid staying on beach with kite twelve</p>
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

export default Angelo