import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { GiHexagonalNut } from "react-icons/gi";
import { FaReact } from "react-icons/fa";

const frontendItems = [
  {
    title: "HTML",
    level: "Experienced",
  },
  {
    title: "CSS",
    level: "Experienced",
  },
  {
    title: "JavaScript",
    level: "Experienced",
  },
  {
    title: "TypeScript",
    level: "Experienced",
  },
  {
    title: "ReactJS",
    level: "Experienced",
  },
  {
    title: "AngularJS",
    level: "Experienced",
  },
];

const backendItems = [
  {
    title: "ChatBots",
    level: "Experienced",
  },
  {
    title: "BashScript",
    level: "Experienced",
  },
  {
    title: "VimScript",
    level: "Experienced",
  },
  {
    title: "Python",
    level: "Experienced",
  },
  {
    title: "NodeJs",
    level: "Experienced",
  },
  {
    title: "Docker",
    level: "Experienced",
  },
  {
    title: "PostgreSQL",
    level: "Experienced",
  },
  {
    title: "Sqlite",
    level: "Experienced",
  },
  {
    title: "MySQL",
    level: "Experienced",
  },
  {
    title: "SQLServer",
    level: "Experienced",
  },
  {
    title: "Linux",
    level: "Experienced",
  },
  {
    title: "Devops",
    level: "Medium/Learning",
  },
  {
    title: "AWS",
    level: "Learning",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills That I Have</h5>
      <h2>My Knifes</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <FaReact className="header__icon" />
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendItems.map(({ title, level }, index) => {
              return (
                <article key={index} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
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
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendItems.map(({ title, level }, index) => {
              return (
                <article key={index} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
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
