import React from 'react'
import "./Services.css"
import Sekone from "../../assets/Showcase/s1.png"
import Sektyu from "../../assets/Showcase/s2.png"
import Seksri from "../../assets/Showcase/s3.png"


const Services = () => {
  return (
    <div className='enkediv'>
      <div className='Soldiv'>
        <img className='Sekone' src={Sekone} alt="" />
        <h1>FREE AND FAST DELIVERY</h1>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className='Ordiv'>
        <img className='Sektyu' src={Sektyu} alt="" />
        <h1>24/7 CUSTOMER SERVICE</h1>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className='Sagdiv'>
        <img className='Seksri' src={Seksri} alt="" />
        <h1>MONEY BACK GUARANTEE</h1>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  )
}

export default Services