import React from 'react';
import Stack from './Stack';

const ProjectCard = ({ data }) => {
  const { title, stack, description, img, link } = data;
  return (
    <div>
      <a href={link}>
        <h2>Title: {title}</h2>
      </a>
      <div>
        Stack:
        {stack.map((element, index) => {
          return <Stack key={index} data={element} />;
        })}
      </div>
      <p>Description: {description}</p>
      <img src={img} alt={title} />
    </div>
  );
};

export default ProjectCard;
