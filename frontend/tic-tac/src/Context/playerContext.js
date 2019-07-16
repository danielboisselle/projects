import React from 'react';

const initalContext = {
  playerTurn: true,
  playerMoved: () => { },
}

const playerContext = React.createContext(initalContext);

export default playerContext;
