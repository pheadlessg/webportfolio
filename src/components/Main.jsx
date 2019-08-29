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
        <div>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/dave-gandy"
            title="Dave Gandy"
          >
            Dave Gandy
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }
}

export default Main;
