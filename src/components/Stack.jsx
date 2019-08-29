import React from 'react';

const Stack = ({ data }) => {
  return (
    <div>
      <a className="stacklink" href={data.link}>
        {data.name}
      </a>
    </div>
  );
};

export default Stack;
