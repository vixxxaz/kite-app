import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import Meteo from '../components/Meteo';




const Nea = () => {

    const position=[40.195907, 23.334261];

    const latitude = 40.47;
    const longitude = 22.81;

  return (
    <section>
        <h1 className='forecast-title'>Nea potidea</h1>
        <div className='Leaflet-container'>
            <MapContainer style={{width:'500px', height:'500px'}} center={position} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    <Marker position={[40.195907, 23.334261]}>
    
                    </Marker>
                    
            </MapContainer> 
        </div>
        <div>
        <Meteo latitude={latitude} longitude={longitude} />  
        </div>
    </section>   
  )
}

export default Nea