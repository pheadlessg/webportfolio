import React from 'react';
import Nav from './Nav';
import '../CSS/Header.css';
import resume from '../documents/resume.pdf';
import github from '../img/github.png';
import insta from '../img/insta.png';
import twitter from '../img/twitter.png';
import linkedin from '../img/linkedin.png';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="header">
      <Link className="title" to="/">
        <span>Sean Fisher</span>
        <span>Full Stack JS Developer</span>
      </Link>
      <div className="headerRow2">
        <span className="smlinks">
          <a href="https://github.com/pheadlessg">
            <img className="sm" src={github} alt="github"></img>
          </a>
          <a href="https://www.instagram.com/sfvox/">
            <img className="sm" src={insta} alt="instagram"></img>
          </a>
          {/* <img className="sm" src={twitter} alt="twitter"></img> */}
          <a href="https://www.linkedin.com/in/seankristianfisher/">
            <img className="sm" src={linkedin} alt="linkedin"></img>
          </a>
        </span>
        <a className="resumelink" href={resume}>
          Download Resume
        </a>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
