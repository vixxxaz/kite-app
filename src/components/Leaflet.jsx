import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const Leaflet = () => {

    const position=[40.446883, 22.964185];

  return (
    <div className='Leaflet-container'>
        <MapContainer style={{width:'500px', height:'500px'}} center={position} zoom={11} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={[40.494988, 22.817900]}>
                    <Popup>
                        <a href='/angelo'>Angelochori</a>
                    </Popup>
                </Marker>
                <Marker position={[40.374742, 22.890661]}>
                    <Popup>
                        <a href='/epanomi'>Epanomi</a>
                    </Popup>
                </Marker>
                <Marker position={[40.374048, 22.957411]}>
                    <Popup>
                        <a href='/mindloop'>Mindloop</a>
                    </Popup>
                </Marker>
                <Marker position={[40.476137, 22.819931]}>
                    <Popup>
                        <a href='/riviera'>Riviera</a>
                    </Popup>
                </Marker>
        </MapContainer> 
    </div>
  )
}

export default Leaflet