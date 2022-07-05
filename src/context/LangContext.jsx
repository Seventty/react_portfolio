import React, { useState } from "react";
import EnglishMessage from "../lang/en-US.json";
import SpanishMessage from "../lang/es-DO.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let defaultLocale = "en-US";
  let defaultMessages = EnglishMessage;
  const lang = localStorage.getItem("lang");

  if (lang) {
    defaultLocale = lang;

    if (lang === "es-MX") {
      defaultMessages = SpanishMessage;
    } else if (lang === "en-US") {
      defaultMessages = EnglishMessage;
    } else {
      defaultLocale = "en-US";
      defaultMessages = EnglishMessage;
    }
  }

  const [messages, setMessages] = useState(defaultMessages);
  const [locale, setLocale] = useState(defaultLocale);

  const setLanguage = (language) => {
    switch (language) {
      case "es-DO":
        setMessages(SpanishMessage);
        setLocale("es-DO");
        localStorage.setItem('lang', 'en-DO');
        break;
      case "en-US":
        setMessages(EnglishMessage);
        setLocale("en-US");
        localStorage.setItem('lang', 'en-US');
        break;
      default:
        setMessages(EnglishMessage);
        setLocale("en-US");
        localStorage.setItem('lang', 'en-US');
        break;
    }
  };

  return (
    <langContext.Provider value={{ setLanguage: setLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
