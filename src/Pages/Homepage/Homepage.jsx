import React from "react";
import "./Homepage.css";
import Navbar from "../../Components/Navbar/Navbar";
import ClassicPattern from "../../assets/Classic Pattern.svg";
import Readmore from "../../Components/Readmore/Readmore";
import AboutPattern from "../../assets/About Pattern.png";
import Image11 from "../../assets/Image (11).png";
import Image9 from "../../assets/Image (9).png";
import Image10 from "../../assets/Image (10).png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import table from "../../assets/Table.png";
import client from "../../assets/clients say about me.png";
// import Splide from '@splidejs/splide'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import rating from "../../assets/Rating.png";
import image15 from "../../assets/Image (15).png";
import image16 from "../../assets/Image (16).png";
const Homepage = () => {
  return (
    <div>
      <div className="seperate">
        <Navbar />
      </div>

      <section className="background">
        <div className="strong">
          <h1>
            Keep Your Body <br />
            Fit & Strong
          </h1>
          <div className="btns">
            <button className="active">Start Today</button>
            <button>About Me</button>
          </div>
        </div>
      </section>

      <div className="pattern">
        <div className="paticon">
          <img src={ClassicPattern} alt="" />
        </div>

        <div className="pat-text">
          <div className="training">
            <h5>OUR FITNESS TRAINING</h5>
            <h2>Upcoming Classes</h2>
          </div>
          <button>More Class</button>
        </div>
      </div>
      <Readmore />
      <div className="scrolling">
        <h1>
          FOCUS ON YOUR <span>FITNESS</span> NOT YOUR LOSS
        </h1>
      </div>

      <div className="split">
        <div className="abouticon">
          <img src={AboutPattern} alt="" />
        </div>
        <div className="depart">
          <div className="first">
            <h4>About</h4>
            <h2>
              Respect Your Body, <br />
              It’s the Only One You Get
            </h2>
            <p>
              It is a long established fact that a reader will be distracted{" "}
              <br />
              by the readable content of a page when looking at its layout.{" "}
              <br />
              point of using Lorem Ipsum is
            </p>
            <div className="gallery">
              <div className="motivation">
                <div className="motivtext">
                  <h2>Motivation</h2>
                  <p>
                    It is a long established fact that <br />
                    reader will be distracted{" "}
                  </p>
                </div>
                <div className="motivaticon">
                  <img src={Image9} alt="" />
                </div>
              </div>
              <div className="inspire">
                <div className="inspiricon">
                  <img src={Image10} alt="" />
                </div>
                <div className="inspirtext">
                  <h2>Inspire</h2>
                  <p>
                    {" "}
                    will be distracted by readable <br />
                    content using Lorem Ipsum{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="energy">
            <div className="power">
              <img src={Image11} alt="" />
            </div>
            <div className="energybtn">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="google">
        <div className="googleicon">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />
        </div>
      </div>

      <div className="table">
        <h5>Time table</h5>
        <h2>Working Schedule</h2>
        <div className="tabular">
          <img src={table} alt="" />
        </div>
      </div>

      <div className="slider">
        <div className="testimonial">
          <Splide
            aria-label="My Favorite Images"
            options={{
              // type: 'loop',
              gap: "2rem",
              autoplay: true,
              pauseOnHover: false,
              // resetProgress: false,
              perPage: 2,
              arrows: true,
              // dots: false,
              speed: 2000,
            }}>
            <SplideSlide className="person">
              <div className="passport">
                <img src={image15} alt="" />
              </div>
              <div className="lining"></div>
              <div className="pptext">
                <div className="nattasha">
                  <h3>Nattasha</h3>
                  <p>Athletics /Trainer</p>
                  <img src={rating} alt="" />
                </div>
                <h6>
                  There are many variations of passages of Lorem Ipsum <br />
                  available, but the majority have suffered alteration in <br />
                  some form, by injected humour
                </h6>
              </div>
            </SplideSlide>
            <SplideSlide className="person">
              <div className="passport">
                <img src={image15} alt="" />
              </div>
              <div className="lining"></div>
              <div className="pptext">
                <div className="nattasha">
                  <h3>Nattasha</h3>
                  <p>Athletics /Trainer</p>
                  <img src={rating} alt="" />
                </div>
                <h6>
                  There are many variations of passages of Lorem Ipsum <br />
                  available, but the majority have suffered alteration in <br />
                  some form, by injected humour
                </h6>
              </div>
            </SplideSlide>
            <SplideSlide className="person">
              <div className="passport">
                <img src={image15} alt="" />
              </div>
              <div className="lining"></div>
              <div className="pptext">
                <div className="nattasha">
                  <h3>Nattasha</h3>
                  <p>Athletics /Trainer</p>
                  <img src={rating} alt="" />
                </div>
                <h6>
                  There are many variations of passages of Lorem Ipsum <br />
                  available, but the majority have suffered alteration in <br />
                  some form, by injected humour
                </h6>
              </div>
            </SplideSlide>
            <SplideSlide className="person">
              <div className="passport">
                <img src={image16} alt="" />
              </div>
              <div className="lining"></div>
              <div className="pptext">
                <div className="nattasha">
                  <h3>Nattasha</h3>
                  <p>Athletics /Trainer</p>
                  <img src={rating} alt="" />
                </div>
                <h6>
                  There are many variations of passages of Lorem Ipsum <br />
                  available, but the majority have suffered alteration in <br />
                  some form, by injected humour
                </h6>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="client">
          <img src={client} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
