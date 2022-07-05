import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FormattedMessage } from "react-intl";
// const mainAboutImage = require("../../assets/me-about.jpg");

const About = () => {
  return (
    <section id="about">
      <h5>
        <FormattedMessage id="app.aboutMeTitle" />
      </h5>
      <h2>
        <FormattedMessage id="app.aboutMeSubtitle" />
      </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={mainAboutImage} alt="AboutImage" /> */}
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>
                <FormattedMessage id="app.experience" />
              </h5>
              <small>
                <FormattedMessage id="app.experienceDescription" />
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>
                <FormattedMessage id="app.communityManager" />
              </h5>
              <small>
                <FormattedMessage id="app.communityManagerDescription" />
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>
                <FormattedMessage id="app.repositories" />
              </h5>
              <small>
                <FormattedMessage id="app.repositoriesDescription" />
              </small>
            </article>
          </div>
          <p>
            <FormattedMessage id="app.aboutDescription" />
          </p>
          <a href="#contact" className="btn btn-primary">
            <FormattedMessage id="app.letsTalkButton" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
