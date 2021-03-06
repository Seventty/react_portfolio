import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { FormattedMessage } from "react-intl"

const Contact = () => {
  const form = useRef<HTMLDivElement | HTMLFormElement | any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_322oqxe",
        "template_jk3hzw8",
        form.current,
        "poy0atVmGPeFWPptw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>
      <FormattedMessage id="app.keepInTouchTitle"/>

      </h5>
      <h2>
      <FormattedMessage id="app.keepInTouchSubtitle"/>

      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>
          <FormattedMessage id="app.email"/>

            </h4>
            <h5>zeroseventty@gmail.com</h5>
            <a href="mailto:zeroseventty@gmail.com">
          <FormattedMessage id="app.sendMessage"/>

            </a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>Telegram Direct</h4>
            <h5>ZeroSeventty</h5>
            <a href="https://t.me/zeroseventty">
          <FormattedMessage id="app.sendMessage"/>

            </a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>Telegram Group</h4>
            <h5>SoftDevs Community</h5>
            <a href="https://t.me/softdevs">
          <FormattedMessage id="app.joinToTheCommunity"/>

            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" id="message" rows={7} required></textarea>
          <button type="submit" className="btn btn-primary">
          <FormattedMessage id="app.sendMessageButton"/>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
