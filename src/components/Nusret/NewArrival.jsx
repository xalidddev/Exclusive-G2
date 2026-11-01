import React from 'react'
import "../Nusret/NewArrival.css"
import PS from "../../assets/Nusret/ps5.png"
import woman from "../../assets/Nusret/woman.png"
import speaker from "../../assets/Nusret/speaker.png"
import perfume from "../../assets/Nusret/perfume.png"

const Services = () => {
  return (
    <div className="enkeDiv">
      <div className='qirmiziDivin'>
        <div className='qirmiziDiv'></div>
        <h1 className='Feature'>Featured</h1>
      </div>
      <h1 className='Arriv'>New arrival</h1>
      <div className='cartDiv'>
        <div className='solDivin'>
          <img className='PS' src={PS} alt="" />
          <div className='sagUstDivin'>
            <img className='woman' src={woman} alt="" />
            <div className='ikibalacaDivin'>
              <img src={speaker} alt="" />
              <img src={perfume} alt="" />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
export default Services








