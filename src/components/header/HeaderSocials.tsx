import React from "react";
import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="https://github.com">
        <BsGithub />
      </a>
      <a href="https://t.me/seventty">
        <BsTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
