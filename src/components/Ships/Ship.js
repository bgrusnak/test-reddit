import React from 'react';

import "./ship.scss";

const imageByType = (type) => {
  switch (type) {
    case 'carrier':
      return '../../../assets/Aircraft Shape.png';
    case 'battleship':
      return '../../../assets/Battleship Shape.png';
    case 'cruiser':
      return '../../../assets/Cruiser Shape.png';
    case 'submarine':
      return '../../../assets/Submarine Shape.png';
    case 'destroyer':
      return '../../../assets/Carrier Shape.png';
  }
};

const hitImage = (type) => {
  if (type) return '../../../assets/Hit small.png';
  return '../../../assets/Miss small.png';
};

const Ship = ({ type, hits, length }) => {
  let points = new Array(length);
  points = points.fill(false, 0, length);
  points = points.fill(true, -hits || length);
  return (
    <div className="ship">
      <div className="shipImage">
        <img src={imageByType(type)} />
      </div>
      <div className="hits">{points.map((item, i) => <img src={hitImage(item)} key={i} />)}</div>
    </div>
  );
};

export default Ship;
