import React from 'react';
import '../CSS/About.css';
import profilepic from '../img/profilepic.jpg';

const About = () => {
  return (
    <div className="aboutcontainer">
      <img className="aboutpic" src={profilepic} alt="profilepic" />
      <span className="abouttitle">Hi, I'm Sean.</span>
      <p>I'm a full stack JavaScript developer based in Southern California.</p>
      <p>
        I build responsive and easy to use UIs and websites using React.js, as
        well as back-end applications using Node.js, PostgreSQL, Express and
        Axios. I'm also experienced with writing smart contracts using Solidity
        and linking them to user-friendly interfaces using the Truffle
        framework.
      </p>
      <p>
        I also have extensive experience programming and testing RESTful APIs
        and developing using Test Driven Development.
      </p>
      <p>
        My goals and interests coincide with being able to build projects which
        expose me to new languages, frameworks and coding practices.
      </p>
      <p>
        I'd say that I'm set aside from most developers through my unique
        history as an entrepreneur, business consultant and customer service
        professional. I'm not only able to see the big picture and how it can be
        affected by the small details but also how to communicate my ideas to
        clients or the rest of my team and engage them with how it can affect
        the end result in a positive way.
      </p>
      <p>
        If you're interested in my work or have any questions, please get in
        touch through the details on the contact section of this site.
      </p>
    </div>
  );
};

export default About;

// import React, { Component } from 'react';
// import '../CSS/About.css';

// class About extends Component {
//   render() {
//     return (
//       <div className="aboutcontainer">
//         <span className="abouttitle">Hi, I'm Sean.</span>
//         <p>
//           I'm a full stack JavaScript developer based in Southern California.
//         </p>
//         <p>
//           I build responsive and easy to use UIs and websites using React.js, as
//           well as back-end applications using Node.js, PostgreSQL, Express and
//           Axios. I'm also experienced with writing smart contracts using
//           Solidity and linking them to user-friendly interfaces using the
//           Truffle framework.
//         </p>
//         <p>
//           I also have extensive experience programming and testing RESTful APIs
//           and developing using Test Driven Development.
//         </p>
//         <p>
//           My goals and interests coincide with being able to build projects
//           which expose me to new languages, frameworks and coding practices.
//         </p>
//         <p>
//           I'd say that I'm set aside from most developers through my unique
//           history as an entrepreneur, business consultant and customer service
//           professional. I'm not only able to see the big picture and how it can
//           be affected by the small details but also how to communicate my ideas
//           to clients or the rest of my team and engage them with how it can
//           affect the end result in a positive way.
//         </p>
//         <p>
//           If you're interested in my work or have any questions, please get in
//           touch through the details on the contact section of this site.
//         </p>
//       </div>
//     );
//   }
//   componentDidMount() {
//     window.scrollTo(0, 0);
//   }
// }

// export default About;
