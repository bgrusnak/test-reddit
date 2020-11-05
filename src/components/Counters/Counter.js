import React from 'react';

import "./counter.scss";

const Counter = ({ score, color, name }) => {
  return (
    <div className="counter" style={{ backgroundColor: color }}>
      <h1>{score}</h1>
      <div>{name}</div>
    </div>
  );
};

export default Counter;
