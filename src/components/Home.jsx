import React from "react";
import "./Home.css";
import CountUp from "react-countup";

function Home({ theme }) {
  return (
    <div>
      <section className={theme ? "home" : "new-home"}>
        <div className="left-home">
          <span> THE BEST FITNESS CLUB IN THE TOWN</span>
          <h1  data-aos="fade-down">SHAPE YOUR IDEAL BODY</h1>
          <p>
            In here we will help you to shape and build ideal body and live up
            your life to fullest
          </p>
          <div className="btn" data-aos="fade-right">
            <button className="btn1">Get Started</button>
            <button className="btn2">Learn More</button>
          </div>
          {/* count up */}
          <div className="stats"  data-aos="fade-up">
            <div className="stat">
              <span className="firstSpan">
                {/* react-countup */}
                <CountUp start={0} end={140} duration={4} className="icon" />
                <span className="plus">+</span>
              </span>
              <span className="text"  data-aos="fade-down">EXPERT COACHES</span>
            </div>
            <div className="stat">
              <span className="firstSpan">
                {/* react-countup */}
                <CountUp start={0} end={978} duration={4} className="icon" />
                <span className="plus">+</span>
              </span>
              <span className="text"  data-aos="fade-down">MEMBERS JOIN</span>
            </div>
            <div className="stat">
              <span className="firstSpan">
                {/* react-countup */}
                <CountUp start={0} end={50} duration={4} className="icon" />
                <span className="plus">+</span>
              </span>
              <span className="text"  data-aos="fade-down">FITNESS PROGRAMS</span>
            </div>
          </div>


        </div>

        <div className="right-home" data-aos="fade-left">
          <img src="/home-img.png"  alt="image" />
        </div>
      </section>
    </div>
  );
}

export default Home;
