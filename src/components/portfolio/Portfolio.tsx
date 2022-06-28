import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Creations</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
              alt="projectImage"
            />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
              alt="projectImage"
            />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
              alt="projectImage"
            />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
              alt="projectImage"
            />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
              alt="projectImage"
            />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
