import React from 'react'
import "../Showcase/NewArrival.css"
import PS from "../../assets/Showcase/ps5.png"
import woman from "../../assets/Showcase/woman.png"
import speaker from "../../assets/Showcase/speaker.png"
import perfume from "../../assets/Showcase/perfume.png"

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








