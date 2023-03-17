import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import Meteo from '../components/Meteo';




const Rachies = () => {

    const position=[38.868178, 22.758193];

    const latitude = 38.86;
    const longitude = 22.75;

  return (
    <section>
        <h1 className='forecast-title'>Rachies</h1>
        <div className='Leaflet-container'>
            <MapContainer style={{width:'500px', height:'500px'}} center={position} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    <Marker position={[38.868178, 22.758193]}>
                    </Marker>                    
            </MapContainer> 
        </div>
        <div>
        <Meteo latitude={latitude} longitude={longitude} />  
        </div>
    </section>   
  )
}

export default Rachies