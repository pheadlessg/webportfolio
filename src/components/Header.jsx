import React from 'react';
import Nav from './Nav';
import resume from '../documents/resume.pdf';
import github from '../img/github.png';
import insta from '../img/insta.png';
import twitter from '../img/twitter.png';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="header">
      <Link className="title" to="/">
        <span>Sean Fisher</span>
        <span>Full Stack JS Developer</span>
      </Link>
      <span className="smlinks">
        <img className="sm" src={github} alt="github"></img>
        <img className="sm" src={insta} alt="instagram"></img>
        <img className="sm" src={twitter} alt="twitter"></img>
      </span>
      <a className="resumelink" href={resume}>
        <button className="button">Here's my resume</button>
      </a>
      <Nav />
    </div>
  );
};

export default Header;
