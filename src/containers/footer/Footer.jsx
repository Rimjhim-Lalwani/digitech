import React from 'react';
import transformerLogo from '../../assets/logodigi.png';
import './footer.css'
const Footer = () => {
   return (
      <div className="transformer__footer section__padding">
         {/* <div className="transformer__footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
         </div>

         <div className="transformer__footer-btn">
            <button type="button">Request Early Access</button>
         </div> */}

         <div className="transformer__footer-links">
            <div className="transformer__footer-links_logo">
               <figure>
                  <img src={transformerLogo} alt="Footer logo" />
                 
               </figure>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Links</h4>
               <ul>
                
                  <li><a href="#home"> Home</a></li>
      <li><a href="#transformer">About Us</a></li>
      <li><a href="#blog">Services</a></li>
      <li><a href="#features">Portfolio</a></li>
      <li><a href="#Contact">Contact Us</a></li>

               </ul>
            </div>

            

            <div className="transformer__footer-links_div">
               <h4>Get in touch</h4>
               <p>Jaipur,Rajasthan</p>
               <p>+91 9999999999</p>
               <p><a href="email">digitech@gmail.com</a></p>
            </div>
         </div>
         <div className="transformer__footer-copyright">
            <p>© 2023 DigiTech. All rights reserved.</p>
         </div>
      </div>
   )
}
export default Footer
