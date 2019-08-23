import React from 'react';
import resume from '../documents/resume.pdf';

const About = () => {
  return (
    <div>
      <span>About</span>
      <br />
      <a className="resumelink" href={resume}>
        Here's my resume
      </a>
      <p>I'm a full stack JavaScript developer based in Southern California.</p>
      <p>
        I have extensive experience programming and testing RESTful APIs and
        developing using Test Driven Development.
      </p>
    </div>
  );
};

export default About;
