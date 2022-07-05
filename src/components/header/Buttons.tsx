import React from "react";
import cv from "../../assets/cv.pdf";
import { FormattedMessage } from "react-intl";

const Buttons = () => {
  return (
    <div className="buttons">
      <a href={cv} className="btn" download>
        <FormattedMessage id="app.downloadCVButton" />
      </a>
      <a href="#contact" className="btn btn-primary">
        <FormattedMessage id="app.letsTalkButton" />
      </a>
    </div>
  );
};

export default Buttons;
