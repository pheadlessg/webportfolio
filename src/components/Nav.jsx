import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/about/" className="link">
        About
      </Link>
      <Link to="/projects/" className="link">
        Projects
      </Link>
      <Link to="/contact/" className="link">
        Contact
      </Link>
    </div>
  );
};

export default Nav;
