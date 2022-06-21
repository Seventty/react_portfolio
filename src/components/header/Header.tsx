import React from "react";
import "./header.css";
import Buttons from "./Buttons";
import HeaderSocials from "./HeaderSocials";
const mainImage = require("../../assets/me.png");

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Heya, I'm</h5>
        <h2>Rainiery Valerio Gonzalez</h2>
        <h5 className="text-ligh">FullStack Developer</h5>
        <Buttons />
        <HeaderSocials/>
        <div className="me">
          <img src={mainImage} alt="me"/>
        </div>
        <a href="#contact" className="scroll__down">Scroll down</a>
      </div>
    </header>
  );
};

export default Header;
