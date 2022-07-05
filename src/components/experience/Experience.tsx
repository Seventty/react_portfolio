import React from "react";
import "./experience.css";
import { BsPatchCheckFill, BsFillBookFill } from "react-icons/bs";
import { GiHexagonalNut } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { FormattedMessage } from "react-intl";

const frontendItems = [
  {
    title: "HTML",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "CSS",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "JavaScript",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "TypeScript",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "ReactJS",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "AngularJS",
    level: "Medium",
    experienced: true,
  },
  {
    title: "Remix",
    level: "learning",
    experienced: false,
  },
];

const backendItems = [
  {
    title: "ChatBots",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "BashScript",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "VimScript",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "Python",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "NodeJs",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "Docker",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "PostgreSQL",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "Sqlite",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "MySQL",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "SQLServer",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "Linux",
    level: "Experienced",
    experienced: true,
  },
  {
    title: "Devops",
    level: "Medium/Learning",
    experienced: false,
  },
  {
    title: "AWS",
    level: "Learning",
    experienced: false,
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>
        <FormattedMessage id="app.skillsTitle" />
      </h5>
      <h2>
        <FormattedMessage id="app.skillsSubtitle" />
      </h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <FaReact className="header__icon" />
          <h3>
            <FormattedMessage id="app.frontendDevelopment" />
          </h3>
          <div className="experience__content">
            {frontendItems.map(({ title, level, experienced }, index) => {
              return (
                <article key={index} className="experience__details">
                  {experienced ? (
                    <BsPatchCheckFill className="experience__details-icon" />
                  ) : (
                    <BsFillBookFill className="experience__details-icon" />
                  )}
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <GiHexagonalNut className="header__icon" />
          <h3>
            <FormattedMessage id="app.backendDevelopment" />
          </h3>
          <div className="experience__content">
            {backendItems.map(({ title, level, experienced }, index) => {
              return (
                <article key={index} className="experience__details">
                  {experienced ? (
                    <BsPatchCheckFill className="experience__details-icon" />
                  ) : (
                    <BsFillBookFill className="experience__details-icon" />
                  )}
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
