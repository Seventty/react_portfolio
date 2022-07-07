import React, { useContext } from "react";
import "./header.css";
import es from "../../assets/dominican-republic-flag-large.png";
import en from "../../assets/united-states-of-america-flag-large.png";
import Buttons from "./Buttons";
import HeaderSocials from "./HeaderSocials";
import { langContext } from "../../context/LangContext";
import { FormattedMessage } from "react-intl";

// const mainImage = require("../../assets/me.png");

const Header = () => {
  const language = useContext(langContext);

  return (
    <>
      <div className="flags">
        <button className="flag">
          <img
            src={en}
            alt="UnitedStatesFlag"
            onClick={() => language.setLanguage("en-US")}
          />
        </button>
        <button className="flag">
          <img
            src={es}
            alt="DominicanRepublicFlag"
            onClick={() => language.setLanguage("es-DO")}
          />
        </button>
      </div>
      <header>
        <div className="container header__container" id="header">
          <h5>
            <FormattedMessage id="app.greetings" />
          </h5>
          <h2>Rainiery Valerio Gonzalez</h2>
          <h5 className="text-ligh">
            <FormattedMessage id="app.position" />
          </h5>
          <Buttons />
          <HeaderSocials />
          <div className="me">{/* <img src={mainImage} alt="me"/> */}</div>
          <a href="#contact" className="scroll__down">
            <FormattedMessage id="app.goDown" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
