import React from 'react';
import { connect } from 'react-redux';
import { fire } from '../../store';

import './board.scss';

const imageByType = (type) => {
  switch (type) {
    case 'hit':
      return '../../../assets/Hit.png';
    case 'miss':
      return '../../../assets/Miss.png';
    default:
      return '../../../assets/Empty.png';
  }
};

const Board = ({ hits, misses, fire }) => {
  const cells = new Array(10);
  for (var i = 0; i < 10; i++) cells[i] = new Array(10).fill('empty');
  hits.forEach(([x, y]) => {
    cells[y][x] = 'hit';
  });
  misses.forEach(([x, y]) => {
    cells[y][x] = 'miss';
  });
  const clickBoard = (x, y) => {
    fire(x, y);
  };
  return (
    <div className="board">
      {cells.map((row, y) => (
        <div className="boardRow" key={`row_${y}`}>
          {row.map((cell, x) => (
            <div
              className="boardCell"
              key={`cell_${x}_${y}`}
              onClick={() => {
                if (cell === 'empty') clickBoard(x, y);
              }}
            >
              <img src={imageByType(cell)} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  hits: state.game.hits,
  misses: state.game.misses
});

const mapDispatchToProps = {
  fire
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
