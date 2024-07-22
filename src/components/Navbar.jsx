import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function Navbar({theme, setTheme, menu, setMenu}) {
  

  const handleTheme = () => {
    setTheme(!theme);
  }

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <>
      <nav className={theme ? "nav" : "navbar"}>
        <div className="left">
          <img src="/logo.png" />
        </div>
        <ul className={menu ? "hide" : "show"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/program">Program</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/plan">Plans</Link>
          </li>
        </ul>
        <div className="icons">
           <button onClick={handleTheme} className="themeColor"> {theme ? <BiSolidSun />: <BiSolidMoon  />}</button>
            <button onClick={handleMenu} className="menuIcon">{menu ? <IoMenu /> : <RxCross2 />}</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
