import React from 'react';
import './App.css';

import {
  BoardButtons,
  GameBoard,
  Header,
  PlayerStats
} from './Containers';

function App() {
  return (
    <div className="App">
      <Header />
      <PlayerStats />
      <GameBoard />
      <BoardButtons />
    </div>
  );
}

export default App;
