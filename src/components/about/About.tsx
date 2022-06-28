import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const mainAboutImage = require("../../assets/me-about.jpg");

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={mainAboutImage} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years developing</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>4 Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Look at my GitHub</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            deleniti quisquam, laboriosam nemo quibusdam explicabo odio minima
            impedit veniam, quia ipsam eos beatae unde molestiae hic
            consequuntur, nesciunt quo mollitia!
          </p>
          <a href="#contact" className="btn btn-primary">Lets Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
