import React from "react";
import "./Footer.css";
import { FaLocationArrow } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Footer = ({ theme }) => {
  return (
    <section className={theme ? "footer" : "newFooter"}>
      <div className="mainLocation">
        <h1>Car Rental</h1>
        <p><FaLocationArrow /> Delhi</p>
        <p><IoPhonePortraitOutline /> +91 2724257252</p>
      </div>

      <div className="links-section">
        <h1>Important Links</h1>
        <ul>
          <li>
            <span>&#11162;</span>Home
          </li>
          <li>
            <span>&#11162;</span>About
          </li>
          <li>
            <span>&#11162;</span>Contact
          </li>
          <li>
            <span>&#11162;</span>Blog
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
