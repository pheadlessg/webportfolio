import React from 'react';
import Stack from './Stack';
import github from '../img/github.png';

const ProjectCard = ({ data }) => {
  const { title, stack, description, img, link, githublink } = data;
  return (
    <div className="projectcard">
      <a className="pctitle" href={link}>
        <div className="pctitle">{title}</div>
      </a>
      <a className="githublink" href={githublink}>
        <img className="githubpic" src={github} alt="github link"></img>
      </a>
      <div className="pcstack">
        {stack.map((element, index) => {
          return <Stack key={index} data={element} />;
        })}
      </div>
      <p className="pcdesc">{description}</p>
      <a className="pcimg" href={link}>
        <img className="pcimg" src={img} alt={title} />
      </a>
    </div>
  );
};

export default ProjectCard;
