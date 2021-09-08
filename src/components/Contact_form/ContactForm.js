import React from 'react'
import "./contactForm.css"
import phone from "../../assets/phone.jpg";
import email from "../../assets/email.jpg";
import location from "../../assets/location.jpg";




function ContactForm() {
  
  return (
    <section>
    <div className="container-form">
      <div className="contactinfo">
        <div>
          <h2 style={{width:"100%", textAlign:"center"}}>Contact Info</h2>
          <ul class="info">
            <li>
              <span><img src={location}></img></span>
              <span><a style={{color:"blue"}}href="https://www.google.com/maps/place/Panepistimiou+6,+Athina+106+71/@37.9771362,23.7337325,17z/data=!3m1!4b1!4m5!3m4!1s0x14a1bd392d04192f:0xbf6f1b6c41a0e58e!8m2!3d37.9771362!4d23.7359212">Panepistimiou 6
                    Athens,Greece
                    11147</a></span>

            </li>

            <li>
              <span><img src={email}></img></span>
              <span><a href="mailto:vinyl_shop_pms@yahoo.com?subject=testme">vinyl_shop_pms@yahoo.com</a></span>

            </li>

            <li>
              <span><img src={phone}></img></span>
              <span>210-3289881</span>

            </li>
          </ul>

          

        </div>
      </div> 
      <div className="contactForm">
        <h2 style={{textAlign:"center",color:"black"}}>Send a Message</h2>
        <div className="formBox">
          <div className="inputBox">
              <span style={{color:"white"}}>First Name</span>
              <input type="text" name="" required />
              
          </div>
          <div className="inputBox">
              <span style={{color:"white"}}>Last Name</span>
              <input type="text" name="" required />
              
          </div>

          <div className="inputBox">
              <span style={{color:"white"}}>Email Address</span>
              <input type="text" name="" required />
              
          </div>

          <div className="inputBox">
              <span style={{color:"white"}}>Mobile</span>
              <input type="text" name="" required />
              
          </div>
          <div className="inputBox w100">
            <span style={{color:"white"}}>Write your message here....</span>
            <textarea name="" required></textarea>
            
          </div>
          <div className="inputBox">
            <input style={{position: "relative",
    cursor: "pointer",
    color:"white",
    border:"none",
    maxWidth:"150px",
    padding:"12px",
    width:"100%"
}} type="submit" value="Send"/>
          </div>
        </div>
      </div>

      
    </div>
    </section>
  )
}

export default ContactForm
