import React from 'react';
import { connect } from 'react-redux';
// import { activategame, closegame } from '../../store';
import Ship from './Ship';
import "./ships.scss";

const Ships = ({ shipTypes }) => {
  const keys = Object.keys(shipTypes);
  const ships = keys.map((type) => {
    return {
      type,
      hits: shipTypes[type].hits,
      length: shipTypes[type].size
    };
  });
  return <div className="ships">{ships.map((item) => <Ship key={item.type} {...item} />)}</div>;
};
const mapStateToProps = (state) => ({
  shipTypes: state.game.layout.shipTypes
});

const mapDispatchToProps = {
  // activategame,
  // closegame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ships);
