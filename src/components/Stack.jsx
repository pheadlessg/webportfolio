import React from 'react';

const Stack = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.img}</p>
      <p>{data.link}</p>
    </div>
  );
};

export default Stack;
