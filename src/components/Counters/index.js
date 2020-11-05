import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
// import { activategame, closegame } from '../store';
import "./counters.scss";

const Counters = ({scores}) => {
    return (
    <div className="counters">
      <Counter score={scores[0]} color="#ffb000" name="player 1" />
      <Counter score={scores[1]} color="#25b79f" name="player 2" />
    </div>
  );
};
const mapStateToProps = (state) => ({
    scores: state.game.scores
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Counters);
