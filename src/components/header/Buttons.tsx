import React from "react";
import technicalCV from "../../assets/Technical_CV_Rainiery_Valerio_Gonzalez.pdf";
import simpleCV from "../../assets/Simple_Rainiery_ValerioGonzalez_Resume.pdf";
import { FormattedMessage } from "react-intl";

const Buttons = () => {
  return (
    <div className="buttons">
      <a href={technicalCV} className="btn" download>
        <FormattedMessage id="app.downloadTechnicalCVButton" />
      </a>
      <a href={simpleCV} className="btn" download>
        <FormattedMessage id="app.downloadSimpleCVButton" />
      </a>
    </div>
  );
};

export default Buttons;
