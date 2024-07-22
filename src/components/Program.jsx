import React from "react";
import "./Program.css";
import { HiMiniArrowRight } from "react-icons/hi2";

function Program({ theme }) {
  const program = [
    {
      img: "/dumbell.png",
      name: "Strength Training",
      detail:
        "In this program, you are trained to improve your strength through many exercises.",
    },
    {
      img: "/runing.png",
      name: "Cardio Training",
      detail:
        "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
    },
    {
      img: "/heart.png",
      name: "Health Fitness",
      detail:
        "This programs is designed for those who exercises only for their body fitness not body building.",
    },
  ];

  return (
    <>
      <section className={theme ? "program" : "new-program"}>
        <h1 data-aos="fade-down">
          EXPLORE OUR PROGRAM <span>PROGRAMS</span> TO SHAPE YOU
        </h1>
        <div className="health">
          {program.map((item, index) => (
            <div className="items" key={index} data-aos="fade-up">
              <img src={item.img} alt="image" data-aos="fade-right" />
              <h3 data-aos="fade-left">{item.name}</h3>
              <p data-aos="fade-right">{item.detail}</p>

              <button data-aos="fade-down">JOIN NOW</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Program;
