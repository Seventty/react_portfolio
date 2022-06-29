import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png",
    title: "XhibalbaBot",
    description: "lorem ipsum",
    github: "https://www.https://www.github.com",
    demo: "https://www.https://www.github.com",
  },
  {
    id: 2,
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png",
    title: "XhibalbaBot",
    description: "lorem ipsum",
    github: "https://www.github.com",
    demo: "https://www.google.com",
  },
  {
    id: 3,
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png",
    title: "XhibalbaBot",
    description: "lorem ipsum",
    github: "https://www.github.com",
    demo: "https://www.google.com",
  },
  {
    id: 4,
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png",
    title: "XhibalbaBot",
    description: "lorem ipsum",
    github: "https://www.github.com",
    demo: "https://www.google.com",
  },
  {
    id: 5,
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png",
    title: "XhibalbaBot",
    description: "lorem ipsum",
    github: "https://www.github.com",
    demo: "https://www.google.com",
  },
  {
    id: 6,
    image:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png",
    title: "XhibalbaBot",
    description: "lorem ipsum",
    github: "https://www.github.com",
    demo: "https://www.google.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Creations</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  src={image}
                  alt={title}
                />
              </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
