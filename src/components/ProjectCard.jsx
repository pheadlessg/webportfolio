import React from 'react';
import Stack from './Stack';

const ProjectCard = ({ data }) => {
  const { title, stack, description, img, link } = data;
  return (
    <div className="projectcard">
      <a className="pctitle" href={link}>
        {title}
      </a>
      <div className="pcstack">
        {stack.map((element, index) => {
          return <Stack key={index} data={element} />;
        })}
      </div>
      <p className="pcdesc">{description}</p>
      <a href={link}>
        <img className="pcimg" src={img} alt={title} />
      </a>
    </div>
  );
};

export default ProjectCard;
