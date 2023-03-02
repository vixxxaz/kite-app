import React from 'react'
import MapChalci from '../components/MapChalci'


const Chalcidique = () => {
  return (
    <div>
        <h1 className='forecast-title'>Chalcidique area</h1>
        <h2 className="info">Choose the district you want to kite ? Click on it to access the map of the spot and the forecast </h2>
        <MapChalci />
        
    </div>
  )
}

export default Chalcidique