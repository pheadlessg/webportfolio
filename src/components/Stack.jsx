import React from 'react';

const Stack = ({ data }) => {
  return (
    <div>
      <a href={data.link}>{data.name}</a>
    </div>
  );
};

export default Stack;
