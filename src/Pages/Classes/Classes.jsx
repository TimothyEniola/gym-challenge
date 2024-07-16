import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import image17 from "../../assets/Image (17).png";
import video2 from "../../assets/Video (2).png";
import Footer from "../../Components/Footer/Footer";
import "./Classes.css";
const Classes = () => {
  return (
    <div>
      <Navbar />
      <div className="bgm">
        <h2>Yoga As Therapy</h2>
      </div>
      <div className="yoga">
        <div className="yogaimg">
          <img src={image17} alt="" />
        </div>
        <div className="yogalist">
          <h5>Class Details</h5>
          <p>
            Objectively innovate empowered <br /> manufactured products
          </p>
          <p>
            Duration : <span>45 MINUTES</span>
          </p>
          <p>
            Intensity :<span> High</span>
          </p>
          <p>
            Fitness Level :<span> Advanced</span>
          </p>
          <p>
            Schedule :<span> Monday, Saturday</span>
          </p>
          <button>Book a Class</button>
        </div>
      </div>
      <div className="yogat">
        <div className="fat">
          <h6>March 22, 2022</h6>
          <button>Fat Loss</button>
        </div>
        <h2>The Healthy Life Style For All</h2>
        <p>
          Proactively envisioned multimedia based expertise crosses media growth
          strategies. Seamlessly visualize <br />
          quality intelectual captal without superor collaboration idea sharing
          Holistically pontficate installed based <br /> portals after
          maintainabled products. Phosfluorescently engaged world wide
          methodologies with enabled <br /> Completely pursue scalable customer
          service through sustainable potentialities
        </p>
        <ul>
          <li>A natural way of your health.</li>
          <li>Train Yourself to Exercise.</li>
          <li>Enhancing the personal healing.</li>
        </ul>
      </div>

      <div className="healthy">
        <h2>Make real time a health improvements</h2>
        <p>
          Proactively envisioned multimedia based expertise crosses media growth
          strategies. Seamlessly visualize <br />
          quality intelectual captal without superor collaboration idea sharing
          Holistically pontficate installed based <br /> portals after
          maintainabled products. Phosfluorescently engaged world wide
          methodologies with enabled <br /> Completely pursue scalable customer
          service through sustainable potentialities
        </p>
        <ol>
          <li>It brings the right people together with all the right information and tools to get work done</li>
          <li>We provide operational efficiency, data security, and flexible scale</li>
          <li>Your best work, together in one package that works seamlessly from your computer</li>
        </ol>
      </div>
      <div className="viimg">
        <img src={video2} alt="" />
      </div>
      <Footer/>
    </div>
  );
};

export default Classes;
