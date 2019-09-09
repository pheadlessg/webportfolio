import React from 'react';
import '../CSS/About.css';
import profilepic from '../img/profilepic.jpg';

const About = () => {
  return (
    <div className="aboutcontainer">
      <span className="abouttitle">About</span>
      <img className="aboutpic" src={profilepic} alt="profilepic" />
      <span className="languageContainer">
        <p className="languageText">JavaScript</p>
        <p className="languageText">React.JS</p>
        <p className="languageText">Node.JS</p>
        <p className="languageText">Express.JS</p>
        <p className="languageText">Axios</p>
        <p className="languageText">Knex</p>
        <p className="languageText">SQL</p>
        <p className="languageText">PostGres</p>
        <p className="languageText">Solidity</p>
        <p className="languageText">Truffle</p>
        <p className="languageText">HTML</p>
        <p className="languageText">CSS3</p>
        <p className="languageText">Bootstrap</p>
      </span>
      <span className="aboutTextContainer">
        <p>
          I'm a full stack JavaScript developer based in Southern California,
          recently moved from Manchester, UK.
        </p>
        <p>
          I build responsive and easy to use UIs and websites using React.js, as
          well as back-end applications using Node.js, PostgreSQL, Express and
          Axios. I'm also experienced with writing smart contracts using
          Solidity and linking them to user-friendly interfaces using the
          Truffle framework.
        </p>
        <p>
          I have extensive experience programming and testing RESTful APIs and
          developing using Test Driven Development with Mocha, Chai, Jest,
          Supertest and Cypress. Since I was a kid I've been adept at fixing
          broken things - admittedly, usually after I figured out some
          complicated way to break them - so I find the QA process just as
          enjoyable as the development process.
        </p>
        <p>
          My goals and interests coincide with being able to build projects
          which expose me to new languages, frameworks and coding practices.
          Basically, I want to build cool things and learn how to build even
          cooler things off of the back of that process.
        </p>
        <p>
          I'd say that I'm set apart from most developers through my unique
          history as an entrepreneur, business consultant and customer service
          professional. I'm not only able to see the big picture and how it can
          be affected by the small details but also how to communicate my ideas
          to clients or the rest of my team and engage them with how it can
          affect the end result in a positive way.
        </p>
        <p>
          I learned to code through the prestigious{' '}
          <a href="https://northcoders.com/">Northcoders </a>
          coding bootcamp, based in Manchester and Leeds in the UK. While
          providing a great foundation in JavaScript fundamentals, their focus
          is always on giving students the tools to learn new languages and
          frameworks to create their own applications. For example, my final
          project involved learning to code with Solidity and using the Truffle
          framework to deploy a voting application to the Ethereum blockchain.
        </p>
        <p>
          When I'm not working on a coding project, I'm usually cooking or
          baking something. I've always been passionate about food and after
          spending time working as a food & drink business consultant as well as
          my time working as a chef de partie, I always like to stretch myself
          by learning to create delicious new things.
        </p>
        <p>
          If you're interested in my work or have any questions, please get in
          touch through the details on the contact section of this site.
        </p>
      </span>
    </div>
  );
};

export default About;
