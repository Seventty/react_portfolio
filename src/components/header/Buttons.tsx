import React from "react";
const cv: any = require("../../assets/cv.pdf");

const Buttons = () => {
  return (
    <div className="buttons">
      <a href={cv} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Buttons;

