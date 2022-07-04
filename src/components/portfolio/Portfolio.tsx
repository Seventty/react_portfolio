import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image:
      "https://webshot.deam.io/https://seventty.netlify.app?height=800&width=1024",
    title: "Seventty's portfolio",
    description: "My own portfolio with a lot of information, n-joy.",
    github: "https://github.com/Seventty/react_portfolio",
    demo: "https://seventty.netlify.app",
  },
  {
    id: 2,
    image: "https://camo.githubusercontent.com/265048faefe15c05f6af44b2ab7c5e1ad9332ae87c8e22dd307a434bf469e2ad/68747470733a2f2f692e696d6775722e636f6d2f6a78555548496c2e706e67",
    title: "XhibalbaBot",
    description:
      "Telegram multimedia & multipurpose bot. Follow https://github.com/BotHouseZ/telegram-bot-generator to keep developing telegram bot tools. Owner: @Seventty",
    github: "https://github.com/BotHouseZ/XhibalbaBot",
    demo: "https://www.t.me/xhibalbabot",
  },
  {
    id: 3,
    image:
      "https://webshot.deam.io/https://lyricallyfi-coconut.netlify.app?height=800&width=1024",
    title: "Lyricallyfi-coconut",
    description:
      "Search any song in anywhere. Look at the information of your favorite artist and the lyrics of his songs.",
    github: "https://github.com/Seventty/lyricallyfi-coconut",
    demo: "https://lyricallyfi-coconut.netlify.app",
  },
  {
    id: 4,
    image:
      "https://webshot.deam.io/https://colorsofcodecollection.netlify.app/?height=800&width=1024",
    title: "Colors-of-code",
    description:
      "Landing page with color's of code collection, lauched at 2021 by SoftDevs community.",
    github: "https://github.com/Seventty/colors-of-code",
    demo: "https://colorsofcodecollection.netlify.app",
  },
  {
    id: 5,
    image: "https://st3.depositphotos.com/7107694/13093/v/450/depositphotos_130939700-stock-illustration-not-available-rubber-stamp.jpg",
    title: "Time-tracker",
    description: "The first script that I did for a Company. I did the python script and my team-mate did the Oodo configuration.",
    github: "https://github.com/Seventty/TimeTracker",
    demo: "https://github.com/Seventty/TimeTracker",
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
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small className="description">
                {description}
              </small>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
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
