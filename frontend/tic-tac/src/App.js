import React, { useReducer } from 'react';
import './App.css';

import {
  BoardButtons,
  GameBoard,
  Header,
  PlayerStats
} from './Containers';

import PlayerContext from './Context/playerContext';

function App() {
  const [playerTurn, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'TOGGLE':
        // TODO: Check for winner
        return !state;
      default:
        return state;
    }
  }, true)

  const playerMoved = () => {
    dispatch({ type: 'TOGGLE' })
  }

  return (
    <div className="App">
      <Header />
      <PlayerContext.Provider value={{ playerTurn, playerMoved }}>
        <PlayerStats />
        <GameBoard />
      </PlayerContext.Provider>
      <BoardButtons />
    </div>
  );
}

export default App;
