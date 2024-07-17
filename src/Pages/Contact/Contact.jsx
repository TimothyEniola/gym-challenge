import React from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import image13 from "../../assets/Image (13).png";
import twi from "../../assets/Twiter (1).png";
import face from "../../assets/Fb (1).png";
import insta from "../../assets/Insta (1).png";
import Readmore from "../../Components/Readmore/Readmore";
import Footer from "../../Components/Footer/Footer";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="maddi">
        <h2>Madison Froning</h2>
      </div>
      <div className="seper">
        <div className="madditext">
          <div className="maddisite">
            <img src={image13} alt="" />
            <h3>Madison Froning</h3>
            <h6>Grossfit Trainer</h6>
          </div>
          <div className="maddip">
            <p>
              <span>Phone : </span> (+1) 123 456 7890
            </p>
            <p>
              <span> Email :</span> madison@gmail.com
            </p>
            <p>
              <span>Location : </span> Adams St.Westford, MA 01886
            </p>
            <div className="maddipimg">
              <img src={twi} alt="" />
              <img src={face} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
        <div className="heatl">
          <h2>Personal Details</h2>
          <p>
            Far far away, behinds the words mountains, far from the countries
            Vokalia and Consonantia, there live <br /> the blind texts.
            Separated they lived in Book marks grove rights at the coasts of the
            Semantics, a large <br />
            language ocean. A small river named Duden flows by the their place
            and supplies it with the necessary <br />
            regelialia. It is a paradisematic country, in which roasted.
          </p>
          <div className="heath">
            <h3>The Healthy Life Style For All</h3>
            <p>
              There are many variations of passangers of Lorem Ipsum availables
              but on the majority have suffered <br />
              alteration Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Habitasse .
            </p>

            <ul>
              <li>
                Dynamically target high-payoff intellectual capital for
                customized
              </li>
              <li>Interactively procrastinate high-payoff content</li>
              <li>
                Credibly reinter mediate backend ideas for cross-platform models
              </li>
            </ul>
            <div className="impro">
              <h3>Make real time a health improvements</h3>
              <p>
                Proactively envisioned multimedia based expertise crosses media
                growth strategies. Seamlessly <br /> visualize quality
                intelectual captal without superor collaboration idea sharing
                Holistically pontficate <br />
                installed based portals after maintainabled products. engaged
                world wide methodologies with enabled <br />
                Completely pursue scalable customer service through sustainable
                potentialities
              </p>
              <ol>
                <li>
                  It brings the right people together with all the right
                  information and tools to get work done
                </li>
                <li>
                  We provide operational efficiency, data security, and flexible
                  scale
                </li>
                <li>
                  Your best work, together in one package that works seamlessly
                  from your computer
                </li>
              </ol>
              <div className="dash">
                <p>
                  User generated content in real-time will have multiple
                  touchpoints for offshoring. Capitalize on low <br /> hanging
                  fruit to identify a ballpark value added activity to beta
                  test. Override the digital divide with <br />
                  additional clickthrough's from DevOps. Nanotechnology
                  immersion along the information highway will <br /> close the
                  loop on focusing solely on the bottom line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pressp">
        <div className="pressptext">
          <h4>
            {" "}
            Contact us And <br />
            Join The Team
          </h4>
          <p className="pop">
            It is a long established fact of that a reader will be distracted{" "}
            <br />
            by the readable content of a page when looking at its layout. <br />
            point of using Lorem Ipsum is{" "}
          </p>
          <div className="ppa">
            <p>
              251 Purple Sunset Avenue <br />
              Brooklyn, BXY 92101 <br />
              <span>fitnessfit@example.com </span>
            </p>
          </div>
        </div>
        <div className="formv">
          <div className="fullemail">
            <div className="fullname">
              <input type="text" placeholder="Your FULL name" />
            </div>
            <div className="emaild">
              <input type="email" placeholder="E-mail ADDRESS" />
            </div>
          </div>
          <div className="subje">
            <input type="text" placeholder="Subject" /> <br />
          </div>
          <div className="messa">
            <textarea type="text" placeholder="Message " />
          </div>
          <div className="formbtn">
            <button>Start Now</button>
          </div>
        </div>
      </div>
      <div className="meem">
      <Readmore/>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
