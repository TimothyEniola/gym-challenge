import React from 'react'
import './Card.css'
import image12 from '../../assets/Image (12).png'
import image13 from '../../assets/Image (13).png'
import image14 from '../../assets/Image (14).png'
import star from '../../assets/Star.png'
import faceb from '../../assets/Fb.png'
import insta from '../../assets/Insta.png'
import twitter from '../../assets/Twiter.png'
import team from '../../assets/Team.png'
const Card = () => {
  return (
    <div className='card'>
      
      <div className="cardtext">
        <h5>Our Trainers</h5>
        <h2>We Trained You to Gain</h2>
      </div>
      <div className="team">
        
      <div className="teamimage">
        <img src={team} alt="" />
        </div>
     <div className="divide">
         <div className="cardimage">
            <div className="amandapics">
             <img src={image12} alt="" />
            </div>
            <div className="black">
               <div className="amanda">
               <h4>Amanda</h4>
                <div className="star">
               <div className="starimage"> <img src={star} alt="" /></div>
                <div className="starrate"><h5>/5</h5></div>
                </div>
              </div>
              <div className="amanline"></div>
              <div className="specialist">
               <h3>Specialisations :</h3>
              <p>Crossfit Expoort, Nutrition & Rehab</p>
              </div>
              <div className="blackicon">
                <img src={faceb} alt="" />
                <img src={insta} alt="" />
              </div>
            </div>
         </div>  

         
         <div className="cardimage">
            <div className="amandapics">
             <img src={image13} alt="" />
            </div>
            <div className="black">
               <div className="amanda">
               <h4>Amanda</h4>
                <div className="star">
               <div className="starimage"> <img src={star} alt="" /></div>
                <div className="starrate"><h5>/5</h5></div>
                </div>
              </div>
              <div className="amanline"></div>
              <div className="specialist">
               <h3>Specialisations :</h3>
              <p>Crossfit Expoort, Nutrition & Rehab</p>
              </div>
              <div className="blackicon">
                <img src={faceb} alt="" />
                <img src={insta} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
         </div>  
         
         <div className="cardimage">
            <div className="amandapics">
             <img src={image14} alt="" />
            </div>
            <div className="black">
               <div className="amanda">
               <h4>Amanda</h4>
                <div className="star">
               <div className="starimage"> <img src={star} alt="" /></div>
                <div className="starrate"><h5>/5</h5></div>
                </div>
              </div>
              <div className="amanline"></div>
              <div className="specialist">
               <h3>Specialisations :</h3>
              <p>Crossfit Expoort, Nutrition & Rehab</p>
              </div>
              <div className="blackicon">
                <img src={faceb} alt="" />
                <img src={insta} alt="" />
              </div>
            </div>
         </div>  
        </div>    
{/*         
        <div className="teamimage">
        <img src={team} alt="" />
        </div> */}
        </div>
    </div>
  )
}

export default Card