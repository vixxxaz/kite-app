import Leaflet from "../components/Leaflet"




const Kallikrateia = () => {

    
    

  return (

    <div className="leflet-kalikra">
        <h1 className="info">Kallikrateia</h1>
        <p className="info">Click on the mark to access the link to the spot, click on it and you will see a map,the forecast for the week and tips !</p>
        <section>        
          <Leaflet />                           
        </section> 
    </div>
  )

}

export default Kallikrateia