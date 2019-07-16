import React from 'react';

export const playerContextInitalState = {
  currentPlayer: 'p0',
  p0: {
    name: 'Player 1',
    score: 0,
  },
  p1: {
    name: 'Player 2',
    score: 0,
  },
  playerMoved: () => { },
}

const playerContext = React.createContext(playerContextInitalState);

export default playerContext;
