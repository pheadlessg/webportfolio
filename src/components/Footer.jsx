import React from 'react';
import '../CSS/Footer.css';
import resume from '../documents/resume.pdf';
import github from '../img/github.png';
import insta from '../img/insta.png';
import linkedin from '../img/linkedin.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercontainer1">
        <span className="smlinks">
          <a href="https://github.com/pheadlessg">
            <img className="sm" src={github} alt="github"></img>
          </a>
          <a href="https://www.instagram.com/sfvox/">
            <img className="sm" src={insta} alt="instagram"></img>
          </a>
          <a href="https://www.linkedin.com/in/seankristianfisher/">
            <img className="sm" src={linkedin} alt="linkedin"></img>
          </a>
        </span>
        <a className="resumelink" href={resume}>
          Download Resume
        </a>
      </div>
      <div className="footercontainer2">
        <span className="footertext">Made by Sean Fisher 2019</span>
        <div className="credit">
          Icons made by{' '}
          <a
            className="credlink"
            href="https://www.flaticon.com/authors/dave-gandy"
            title="Dave Gandy"
          >
            Dave Gandy
          </a>{' '}
          from{' '}
          <a
            className="credlink"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
