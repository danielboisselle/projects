import React, { useReducer } from 'react';
import './App.css';

import {
  BoardButtons,
  GameBoard,
  Header,
  PlayerStats
} from './Containers';

import PlayerContext, { playerContextInitalState } from './Context/playerContext';

function App() {
  const [{ p0, p1, currentPlayer }, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'TOGGLE':
        // Player is toggled by it's id
        const currentPlayer = state.currentPlayer === 'p0' ? 'p1' : 'p0';

        return {
          ...state,
          currentPlayer: currentPlayer,
        }
      default:
        return state;
    }
  }, playerContextInitalState);

  const playerMoved = () => {
    dispatch({ type: 'TOGGLE' });
  }

  return (
    <div className="App">
      <Header />
      <PlayerContext.Provider value={{        
        p0,
        p1,
        currentPlayer,
        playerMoved,
      }}>
        <PlayerStats />
        <GameBoard />
      </PlayerContext.Provider>
      <BoardButtons />
    </div>
  );
}

export default App;
