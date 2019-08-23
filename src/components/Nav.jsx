import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <div className="nav">
      <Link
        className="link"
        to="about"
        smooth={true}
        offset={-150}
        duration={500}
        isDynamic={true}
      >
        About
      </Link>
      <Link
        className="link"
        to="projects"
        smooth={true}
        offset={-130}
        duration={500}
        isDynamic={true}
      >
        Projects
      </Link>
    </div>
  );
};

export default Nav;
