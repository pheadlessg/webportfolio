import React from 'react';
import '../CSS/Home.css';
import { Link } from '@reach/router';

const Home = () => {
  return (
    <div>
      <div className="homebackground"></div>
      <div className="homecontainer">
        <Link className="hometext1" to="/projects/">
          Hi. I'm Sean. I build things on the internet.
        </Link>
      </div>
    </div>
  );
};

export default Home;
