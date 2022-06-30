import React from "react";
import "./footer.css";
import { BsTelegram, BsLinkedin, BsSpotify } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#/" className="footer__logo">Rainiery Valerio</a>

      <ul className="permalinks">
        <li><a href="#/">Home</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://google.com"><BsTelegram/></a>
        <a href="https://google.com"><BsLinkedin/></a>
        <a href="https://google.com"><BsSpotify/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Rainiery Valerio Gonzalez, All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
