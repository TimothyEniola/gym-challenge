import React from 'react'
import './Readmore.css'
import image5 from '../../assets/Image (5).png'
import image6 from '../../assets/Image (6).png'
import image7 from '../../assets/Image (7).png'
const Readmore = () => {
  return (
    <div className='readmore'>

        <div className="cards">
            <input id='ch' type="checkbox" />
     <img src={image7} alt="" />
     <h3>Pilates Training</h3>
     <p>containing Lorem Ipsum passages and <br />
     more recently with.... </p>
     <div className="content">
     <p>containing Lorem Ipsum passagesand <br />
     more recently with </p>
     <label For="ch">Read Less</label>
     </div>
     <label For="ch">Read More</label>
     </div>
     
     
     <div className="cards">
            <input id='th' type="checkbox" />
     <img src={image6} alt="" />
     <h3>Aerobic Training</h3>
     <p>containing Lorem Ipsum passagesand <br />
     more recently with.... </p>
     <div className="contents">
     <p>containing Lorem Ipsum passagesand <br />
     more recently with </p>
     <label For="th">Read Less</label>
     </div>
     <label For="th">Read More</label>
     </div>
     
     <div className="cards">
            <input id='dh' type="checkbox" />
     <img src={image5} alt="" />
     <h3>CrossFit Workout</h3>
     <p>containing Lorem Ipsum passagesand <br />
     more recently with.... </p>
     <div className="conten">
     <p>containing Lorem Ipsum passagesand <br />
     more recently with </p>
     <label For="dh">Read Less</label>
     </div>
     <label For="dh">Read More</label>
     </div>
    </div>
  )
}

export default Readmore