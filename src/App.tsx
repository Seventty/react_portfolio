import React from "react";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
  Services,
  Testimonials,
} from "./components";

const App = () => {
  return <div id="home">
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </div>;
};

export default App;
