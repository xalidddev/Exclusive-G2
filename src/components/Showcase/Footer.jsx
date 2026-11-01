import React from 'react'
import "../Showcase/Footer.css"
import { SendHorizontal } from "lucide-react";
import QR from "../../assets/Showcase/qr.png"
import Google from "../../assets/Showcase/google.png"
import App from "../../assets/Showcase/appstore.png"
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='ENKEDIV '>
      <div className='EsasDiv'>
        <div className='DIV ILk'>
          <h1 className='div1h11'>Exclusive</h1>
          <h2 className='div1h12'>Subscribe</h2>
          <p className='div1p11'>Get 10% off your first order</p>
          <button className='div1btn1'>Enter your email<SendHorizontal className="PlaneIcon" /></button>
        </div>
        <div className='DIV Iki'>
          <h1 className='div2h22'>Support</h1>
          <p className='div2p11'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className='div2p21'>exclusive@gmail.com</p>
          <p className='div2p31'>+88015-88888-9999</p>
        </div>
        <div className='DIV Uc'>
          <h1 className='div3h3'>Account</h1>
          <div className='liDivi'>
            <ul>
              <li className='div3li1' >My Account</li>
              <li className='div3li2' >Login / Register</li>
              <li className='div3li3' >Cart</li>
              <li className='div3li4' >Wishlist</li>
              <li className='div3li5' >Shop</li>
            </ul>
          </div>
        </div>
        <div className='DIV Dord'>
          <h1 className='div4h4'>Quick Link</h1>
          <div className='IkiliDivi'>
            <ul>
              <li className='div4li1' >Privacy Policy</li>
              <li className='div4li2' >Terms Of Use</li>
              <li className='div4li3' >FAQ</li>
              <li className='div4li4' >Contact</li>
            </ul>
          </div>
        </div>
        <div className='DIV Bes'>
          <h1 className='div5h5'>Download App</h1>
          <div className='KicikDiv'>
            <p className='div5p1'>Save $3 with App New User Only</p>
            <div className='KicikIconDiv'>
              <img className='QR' src={QR} alt="" />
              <div className='LapKicikIconDiv'>
                <img className='Imeyc' src={Google} alt="" />
                <img className='Imeyc' src={App} alt="" />
              </div>
            </div>
          </div>
          <div className='IconDivi'>
            <FaFacebookF />
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />

          </div>
        </div>
      </div>
      <div className='Nazikxett'></div>
      <div className='Copyright'>
        <p className='CopyP'>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>

  )
}

export default Footer
