import React from 'react';
import Nav from './Nav';
import '../CSS/Header.css';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <div className="header">
      <Link className="title" to="/">
        <span>Sean Fisher</span>
        <span>Full Stack JS Developer</span>
      </Link>
      <Nav />
    </div>
  );
};

export default Header;
