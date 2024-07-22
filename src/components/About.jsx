import React from 'react';
import "./About.css";
import { TiTickOutline } from "react-icons/ti";

function About({theme}) {
  return (
    <>
      <section className={theme ? "about": "new-about"}>
        <div className="left-about" data-aos="fade-right">
          <img src="/schedule1.png" alt="img" />
        </div>
        <div className="middle-about">
          <img src="/abs.jpg" alt="image"  className='img1' data-aos="fade-down"/>
          <div className="below-img">
            <img src="/bichep.jpg" alt="image" className='img2' data-aos="fade-up" />
            <img src="/leg.jpg" alt="image" className='img3' data-aos="fade-up" />
          </div>
        </div>
        <div className="right-about">
          <h1 className='top' data-aos="fade-down">SOME SEASONS</h1>
          <h1 data-aos="fade-left">WHY CHOOSE US ?</h1>
          <h2 data-aos="fade-right"> <i><TiTickOutline /></i> OVER 140+ EXPERT COACHS</h2>
          <h2 data-aos="fade-left"> <i><TiTickOutline /></i> TRAIN SMARTER AND FASTER THAN BEFORE</h2>
          <h2 data-aos="fade-right"> <i><TiTickOutline /></i>  1 FREE PROGRAM FOR NEW MEMBER</h2>
          <h2 data-aos="fade-left"> <i><TiTickOutline /></i>  RELIABLE PARTNERS</h2>
        </div>
      </section>
    </>
  )
}

export default About
