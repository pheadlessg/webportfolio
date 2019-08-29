import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <span className="footertext">Made by Sean Fisher 2019</span>
      <div className="credit">
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
};

export default Footer;
