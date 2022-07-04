import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
// const mainAboutImage = require("../../assets/me-about.jpg");

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

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
              <h5>Experience</h5>
              <small>3+ years developing</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Community Manager</h5>
              <small>Perfomance contributor at GitHub repos by hobby</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Repositories</h5>
              <small>+70 repos at GitHub</small>
            </article>
          </div>
          <p>
            Greetings, traveler. My name is Rainiery Valerio Gonzalez. Born in
            the warm caribbean island known as <b>Dominican Republic</b>. Currently I'm 22
            years old, I program since I was 15 years old, learning and creating
            new things. I love Linux and everything related to coding.
            Co-creator of the Dominican software community under the name of 
            <a href="https://t.me/softdevs" className="flag1"> SoftDevs</a> in <b>Telegram</b>, creator of <a href="https://t.me/XhibalbaBot" className="flag2">XhibalbaBot</a> (multimedia and
            multipurpose bot in Telegram), owner of the <a href="https://www.github.com/botHouseZ" className="flag1">BotHouseZ</a> organization
            in GitHub and creator of the podcast <b>TheCodeBox</b> in podcast platforms
            such as: Spotify, Apple Music, Google Podcast and others.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
