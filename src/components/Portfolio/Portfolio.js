import React from 'react';
import Header from "../Header";
import About from "../About";
import Experience from "../Experience";
import Projects from "../Projects";
import Contact from "../Contact";

const Portfolio = () => {
  return (
      <React.Fragment>
        <Header/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </React.Fragment>
  )
}

export default Portfolio;