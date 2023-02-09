import React from 'react'
import '../App.css'
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Pinterest from "../assets/pinterest.png";
import Whatsapp from "../assets/whatsapp.png";
function Footer() {
  return (
    // Fi.Cl jsx:-
    <div className='footer-container'>
        <hr/>
        <div className='footer'>
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Facebook} alt="" />
          <img src={Pinterest} alt="" />
          <img src={Whatsapp} alt="" />
        </div>
      </div>
    </div>
  
  )
}

export default Footer
