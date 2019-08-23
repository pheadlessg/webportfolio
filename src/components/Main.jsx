import React, { Component } from 'react';
import { Element } from 'react-scroll';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    );
  }
}

export default Main;
