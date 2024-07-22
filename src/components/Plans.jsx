import React from 'react';
import "./Plan.css";
import { GiHeartPlus } from "react-icons/gi";
import { TiTickOutline } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";
import { LuDumbbell } from "react-icons/lu";


function Plans({theme}) {
  return (
    <>
      <div className={theme ? "plans" : "new-plans"}>
        <div className="left-plan">
          <h1 data-aos="fade-down">READY TO START</h1>
          <div className="card" data-aos="fade-up">
            <i><GiHeartPlus /></i>
            <h2 data-aos="fade-right">BASIC </h2>
            <h2 data-aos="fade-left">&#8377; 2000</h2>
            <p data-aos="fade-right"><i><TiTickOutline /></i> 2 hours of exercises</p>
            <p data-aos="fade-left"><i><TiTickOutline /></i> Free consultaion to coaches</p>
            <p data-aos="fade-right"><i><TiTickOutline /></i> Access to the Community</p>
            <p className='para-icon'>See more benifits <i><FaArrowRight /></i></p>
            <button data-aos="fade-right">Join Now</button>
          </div>
        </div>

        <div className="middle-plan">
          <h1 data-aos="fade-down">YOUR JOURNEY</h1>
          <div className="card" data-aos="fade-up">
            <i><FaChessQueen /></i>
            <h2 data-aos="fade-right">STANDARD</h2>
            <h2 data-aos="fade-left">&#8377; 2500</h2>
            <p data-aos="fade-right"><i><TiTickOutline /></i> 5 hour of excercises</p>
            <p data-aos="fade-left"><i><TiTickOutline /></i> Free consultaion to coaches</p>
            <p data-aos="fade-right"><i><TiTickOutline /></i> Access to minibar</p>
            <p className='para-icon'>See more benifits <i><FaArrowRight /></i></p>
            <button data-aos="fade-right">Join Now</button>
          </div>
        </div>

        <div className="right-plan">
          <h1 data-aos="fade-down">NOW WITH US</h1>
          <div className="card" data-aos="fade-up">
            <i><LuDumbbell /></i>
            <h2 data-aos="fade-up"right>PREMIUM</h2>
            <h2 data-aos="fade-left">&#8377; 3000</h2>
            <p data-aos="fade-right"><i><TiTickOutline /></i> 8 hours of exercises</p>
            <p data-aos="fade-left"><i><TiTickOutline /></i> Consultation of Private Coach</p>
            <p data-aos="fade-right"><i><TiTickOutline /></i> Free Fitness Merchandises</p>

            <p className='para-icon'>See more benifits <i><FaArrowRight /></i></p>
            <button data-aos="fade-right">Join Now</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Plans
