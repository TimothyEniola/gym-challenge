import React from "react";
import "./Footer.css";
import Logom from "../../assets/Logo (4).png";
import faceb from "../../assets/Fb.png";
import insta from "../../assets/Insta.png";
import twitter from "../../assets/Twiter.png";
import arrow from "../../assets/Up Arrow.png";
const Footer = () => {
  const top = () =>{window.scrollTo(0,0)}
  return (
    <div className="footer">
      <div className="footerimg">
        <h2>
          Follow me on <span>Instagram</span>
        </h2>
      </div>
      <div className="footerm">
        <div className="logp">
          <div className="logos">
            <img src={Logom} alt="logo" />
          </div>
          <p className="readable">
            It is a long established fact that a reader will <br /> be
            distracted by the readable.
          </p>
          <div className="call">
            <div className="calltext">
              <h6>Call:</h6>
              <div className="numb">
                <p>01234 987654</p>
                <p>098765 34621</p>
              </div>
            </div>
            <div className="mall">
              <h6>Mail:</h6>
              <p>contact@fitnessfit.com</p>
            </div>
          </div>
        </div>
        <div className="utility">
          <h5>Utility Pages</h5>
          <div className="utilip">
            <li>Style Guide</li>
            <li>Changelog</li>
            <li>404 Page</li>
            <li>Password Protected</li>
            <li>Licenses</li>
            <li>Contact</li>
          </div>
        </div>
        <div className="sear">
          <h5>Newsletter</h5>
          <div className="enter">
            <input type="search" placeholder="Enter Your Email" />
          </div>
          <button>Subscribe</button>
          <div className="arrow">
            <div className="socmedia">
              <img src={faceb} alt="" />
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
            </div>

            <div className="aroup">
              <img src={arrow} alt="" onClick={top}/>
            </div>
          </div>
        </div>
      </div>
      <div className="whitebg">
        <p>
          {" "}
          Copyright © <span>FitnessFit</span> | Designed byVictorFlow Templates
          - Powered by Webflow{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
