import React from 'react';
import Nav from './Nav';
import resume from '../documents/resume.pdf';

const Header = () => {
  return (
    <div className="header">
      <span className="title1">Sean Fisher</span>
      <span className="title2">Full Stack JS Developer</span>
      <span className="smlinks">Social Media Links Here</span>
      <span className="contactinfo">Contact info here</span>
      <a className="resumelink" href={resume}>
        Here's my resume
      </a>
      <Nav />
    </div>
  );
};

export default Header;
