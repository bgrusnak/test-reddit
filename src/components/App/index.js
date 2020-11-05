import React from "react";
import { connect } from 'react-redux';
import { activategame, closegame } from '../../store';
import Counters from '../Counters';
import Ships from '../Ships';
import Board from '../Board';

import "./app.scss";

const App = () => {
  return (
    <div className="full-screen">
      <div className="around">
        <div className="elements"><Counters />
        <Ships /></div>
        <Board />
      </div>
    </div>
  );
};

export default App; 