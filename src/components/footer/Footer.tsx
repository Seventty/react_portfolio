import React from "react";
import "./footer.css";
import { BsTelegram, BsLinkedin, BsSpotify } from "react-icons/bs";

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <footer>
      <a href="#/" className="footer__logo">
        Seventty's portfolio
      </a>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/seventty/">
          <BsLinkedin />
        </a>
        <a href="https://t.me/zeroseventty">
          <BsTelegram />
        </a>
        <a href="https://open.spotify.com/show/6cEld82ZcHaKU7fcaUc6Lu">
          <BsSpotify />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          {actualYear} &copy; Rainiery Valerio Gonzalez, All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
