import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.svg";
const Footer = () => {
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
            <img src={Logo} alt="logo" />
          </div>
          <p>
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
              <h6>Mall:</h6>
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
          <h6>Newsletter</h6>
          <input type="mail" placeholder="Enter Your Email" />
          <button>Subscribe</button>
          <div className="socmedia">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
