import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { GiHexagonalNut } from "react-icons/gi";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills That I Have</h5>
      <h2>My Knifes</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <FaReact className="header__icon"/>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detai">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detai">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detai">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detai">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__detai">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <GiHexagonalNut className="header__icon"/>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detai">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
