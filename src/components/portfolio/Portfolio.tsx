import React from "react";
import "./portfolio.css";
import { FormattedMessage } from "react-intl";

const data = [
  {
    image:
      "https://webshot.deam.io/https://seventty.netlify.app?height=800&width=1024",
    title: "Seventty's portfolio",
    description: "My own portfolio with a lot of information, n-joy.",
    github: "https://github.com/Seventty/react_portfolio",
    demo: "https://seventty.netlify.app",
  },
  {
    image:
      "https://camo.githubusercontent.com/265048faefe15c05f6af44b2ab7c5e1ad9332ae87c8e22dd307a434bf469e2ad/68747470733a2f2f692e696d6775722e636f6d2f6a78555548496c2e706e67",
    title: "XhibalbaBot",
    description:
      "Telegram multimedia & multipurpose bot. Follow https://github.com/BotHouseZ/telegram-bot-generator to keep developing telegram bot tools. Owner: @Seventty",
    github: "https://github.com/BotHouseZ/XhibalbaBot",
    demo: "https://www.t.me/xhibalbabot",
  },
  {
    image:
      "https://camo.githubusercontent.com/c089877d8ae74871a1b5909bcb615bf4f89916b7a268fd2a507e7a8e5f323e61/68747470733a2f2f692e696d6775722e636f6d2f4368746f3675712e6a7067",
    title: "Telegram-bot-generator",
    description: "Telegram bot generator of bot templates",
    github: "https://github.com/BotHouseZ/telegram-bot-generator",
    demo: "https://www.t.me/xhibalbabot",
  },
  {
    image:
      "https://webshot.deam.io/https://lyricallyfi-coconut.netlify.app?height=800&width=1024",
    title: "Lyricallyfi-coconut",
    description:
      "Search any song in anywhere. Look at the information of your favorite artist and the lyrics of his songs.",
    github: "https://github.com/Seventty/lyricallyfi-coconut",
    demo: "https://lyricallyfi-coconut.netlify.app",
  },
  {
    image:
      "https://webshot.deam.io/https://colorsofcodecollection.netlify.app/?height=800&width=1024",
    title: "Colors-of-code",
    description:
      "Landing page with color's of code collection, lauched at 2021 by SoftDevs community.",
    github: "https://github.com/Seventty/colors-of-code",
    demo: "https://colorsofcodecollection.netlify.app",
  },
  {
    image:
      "https://st3.depositphotos.com/7107694/13093/v/450/depositphotos_130939700-stock-illustration-not-available-rubber-stamp.jpg",
    title: "Time-tracker",
    description:
      "The first script that I did for a Company. I did the python script and my team-mate did the Oodo configuration.",
    github: "https://github.com/Seventty/TimeTracker",
    demo: "https://github.com/Seventty/TimeTracker",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>
        <FormattedMessage id="app.myRecentCreations" />
      </h5>
      <h2>
        <FormattedMessage id="app.portfolioTitle" />
      </h2>

      <div className="container portfolio__container">
        {data.map(({ image, title, description, github, demo }, index) => {
          return (
            <article key={index} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h4>{title}</h4>
              <small className="description">{description}</small>
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
                  <FormattedMessage id="app.liveDemo" />
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
