import React from "react";
import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/seventty/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/seventty">
        <BsGithub />
      </a>
      <a href="https://t.me/seventty">
        <BsTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
