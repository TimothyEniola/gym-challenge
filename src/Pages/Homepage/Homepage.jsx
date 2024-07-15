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
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import rating from "../../assets/Rating.png";
import image15 from "../../assets/Image (15).png";
import image16 from "../../assets/Image (16).png";
import Card from "../../Components/Card/Card";
import video from "../../assets/Video.png";
import nefit from "../../assets/Benifit.png";
import vector from "../../assets/Vector (5).png";
import plan from "../../assets/Plan.png";
import icon from "../../assets/Icon.png";
import group37 from "../../assets/Group 37 (3).png";
import group38 from "../../assets/Group 38.png";
import blog from "../../assets/Blog.png";
import Footer from "../../Components/Footer/Footer";
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
        <div className="client">
          <img src={client} alt="" />
        </div>
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
      </div>
      <Card />
      <div className="netflix">
        <div className="netfliximage">
          <img src={nefit} alt="" />
        </div>
        <div className="base">
          <div className="nefit">
            <div className="amenities">
              <h5>Gym AMENITIES</h5>
              <h2>The Unique Standard</h2>
              <p>
                It is a long established fact that a reader will be distracted{" "}
                <br />
                by the readable content of a page when looking at its layout.{" "}
                <br />
                point of using Lorem Ipsum is{" "}
              </p>
            </div>
            <div className="net">
              <img src={video} alt="" />
            </div>
          </div>
          <div className="butmark">
            <div className="mark">
              <div className="marker">
                <img className="hymn" src={vector} alt="" />
                <button>LOCKER</button>
              </div>
              <p>Secure lockers that work by you choosing a four digit code.</p>
            </div>

            <div className="mark">
              <div className="markeri">
                <img className="hymni" src={vector} alt="" />
                <button>CHANGING ROOMS</button>
              </div>
              <p>
                Delicious, protein-packed gourmet shakes that come in <br />{" "}
                chocolate, fruit, vanilla and more. Water and snacks too.
              </p>
            </div>
            <div className="mark">
              <div className="marker">
                <img className="hymn" src={vector} alt="" />
                <button>FUELBARS</button>
              </div>
              <p>
                Mini towels for class and lovely big towels for showers after{" "}
                <br />
                class. *Amenities may not be available at all studios
              </p>
            </div>
            <div className="mark">
              <div className="markering">
                <img className="hymning" src={vector} alt="" />
                <button>COMPLIMENTARY TOWELS</button>
              </div>
              <p>Secure lockers that work by you choosing a four digit code.</p>
            </div>

            <div className="mark">
              <div className="markeri">
                <img className="hymni" src={vector} alt="" />
                <button>WIFI & RESTROOMS</button>
              </div>
              <p>Secure lockers that work by you choosing a four digit code.</p>
            </div>
            <div className="mark">
              <div className="markerings">
                <img className="hymnings" src={vector} alt="" />
                <button>HOT SHOWERS & HAIR CARE</button>
              </div>
              <p>
                what your body craves in the morning, you're not alone. The{" "}
                <br /> majority of people crank the handle all the way up.
              </p>
            </div>
          </div>
        </div>
        {/* <img src={nefit} alt="" /> */}
      </div>
      <div className="plans">
        <div className="plana">
          <img src={plan} alt="" />
        </div>
        <div className="planstext">
          <h5>Our Plan</h5>
          <h2>Choose the Program</h2>
        </div>
        <div className="plancard">
          <div className="plancard1">
            <div className="basic">
              <div className="basicimage">
                <img src={group37} alt="" />
              </div>
              <h3>Basic</h3>
            </div>
            <div className="month">
              <h3>$25 / month</h3>
              <button>30% Off for Beginners</button>
            </div>
            <div className="day">
              <h6>1 Day Free Trial</h6>
              <p>
                20 minutes of <span>Heart-pumping spin</span>
              </p>
              <p>20 minutes of strength training</p>
              <p>
                <span>50 Class</span> Times Available
              </p>
              <p>20 minutes of invigorating yoga</p>
              <button>Get Started</button>
            </div>
          </div>

          <div className="plancard2">
            <div className="basic">
              <div className="basicimage">
                <img src={group38} alt="" />
              </div>
              <h3>Standard</h3>
            </div>
            <div className="month">
              <h3>$35 / month</h3>
              <button className="active">Most popular</button>
            </div>
            <div className="day">
              <h6>2 Day Free Trial</h6>
              <p>
                20 minutes of <span>Heart-pumping spin</span>
              </p>
              <p>20 minutes of strength training</p>
              <p>
                <span>50 Class</span> Times Available
              </p>
              <p>20 minutes of invigorating yoga</p>
              <p>
                Unlimited <span>CrossFit</span> Classes
              </p>
              <p>One Full Month Free</p>
              <p>First 25 New Members Only</p>
              <button className="active">Get Started</button>
            </div>
          </div>
          <div className="plancard1">
            <div className="basic">
              <div className="basicimage">
                <img src={icon} alt="" />
              </div>
              <h3>Premium</h3>
            </div>
            <div className="month">
              <h3>$50 / month</h3>
              <button>10% Off for Yoga Class</button>
            </div>
            <div className="day">
              <h6>2 Day Free Trial</h6>
              <p>
                20 minutes of <span>Heart-pumping spin</span>
              </p>
              <p>20 minutes of strength training</p>
              <p>
                <span>60 Class</span> Times Available
              </p>
              <p>50 minutes of invigorating yoga</p>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="blog">
        <div className="spec">
          <h3>Articles & News</h3>
          <div className="blogimage">
            <img src={blog} alt="" />
          </div>
        </div>
        <div className="mane">
          <div className="manifest">
            <div className="fitness">
              <h6>March 23, 2022</h6>
              <button>Fitness</button>
            </div>
            <input id="bh" type="checkbox" />
            <h3>The 10 best exercises to do in your park</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have <br />
              alterationLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Habitasse ....
            </p>
            <div className="bontent">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have <br />
                alterationLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Habitasse .
              </p>
              <label For="bh">Read Less</label>
            </div>
            <label For="bh">Read More</label>
          </div>

          <div className="manifest">
            <div className="fitness">
              <h6>March 23, 2022</h6>
              <button>Health</button>
            </div>
            <input id="br" type="checkbox" />
            <h3>The 10 best exercises to do in your park</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have <br />
              alterationLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Habitasse ....
            </p>
            <div className="ontent">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have <br />
                alterationLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Habitasse .
              </p>
              <label For="br">Read Less</label>
            </div>
            <label For="br">Read More</label>
          </div>

          <div className="manifests">
            <div className="fitness">
              <h6>March 23, 2022</h6>
              <button>Nutrition</button>
            </div>
            <input id="bc" type="checkbox" />
            <h3>The 10 best exercises to do in your park</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have <br />
              alterationLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Habitasse ....
            </p>
            <div className="ntent">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have <br />
                alterationLorem ipsum dolor sit amet, consectetur adipiscing
                elit. Habitasse .
              </p>
              <label For="bc">Read Less</label>
            </div>
            <label For="bc">Read More</label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
