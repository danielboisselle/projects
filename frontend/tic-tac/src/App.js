import React, { useState } from 'react';
import './App.css';
import Modal from './Components/Modal/Modal';

import {
  BoardButtons,
  GameBoard,
  Header,
  PlayerStats
} from './Containers';

function App() {
  const [boardState, setBoardState] = useState(initBoard());

  const [playerMove, setPlayerMove] = useState('X');

  const playerMoved = key => {
    setPlayerMove(playerMove === 'X' ? 'O' : 'X');

    const updatedBoard = boardState.map(item => {
      if (item.key === key) {
        return { ...item, value: playerMove }
      } else {
        return { ...item }
      }
    });

    setBoardState(updatedBoard);

    if (checkIfWinner(updatedBoard.map((i, key) => i.value ? i.value : key ))) {
      setGameStatus('OVER')
      addPlayerScore();
    }
  }

  const [gameStatus, setGameStatus] = useState('NONE') // STARTED | OVER | NONE

  const newGame = () => {
    setBoardState(initBoard())
    setPlayerMove('X')
    setGameStatus('STARTED')
  }

  const endGame = () => {
    setBoardState(initBoard())
    setPlayerMove('X')
    setGameStatus('NONE')
  }

  const [players, setPlayers] = useState({
    p1: {
      name: null,
      score: 0
    },
    p2: {
      name: null,
      score: 0,
    }
  })

  const setPlayerNames = (p1Name = 'Player 1', p2Name = 'Player 2') => {
    setPlayers({
      p1: { ...players.p1, name: p1Name },
      p2: { ...players.p2, name: p2Name },
    })
  }

  const addPlayerScore = () => {
    const player = playerMove === 'X' ? 'p1' : 'p2';
    const copy = { ...players };
    copy[player].score += 1;

    setPlayers(copy)
  }

  return (
    <div className="App">
      {gameStatus !== 'STARTED' ? <Modal
        gameStatus={gameStatus}
        setPlayerNames={setPlayerNames}
        endGame={endGame}
        newGame={newGame}
      /> : null}
      <Header />
      <PlayerStats
        players={players}
      />
      <GameBoard
        boardState={boardState}
        playerMove={playerMove}
        playerMoved={playerMoved}
      />
      <BoardButtons
      // setStatus={}
      />
    </div>
  );
}

export default App;

// FIXME: Inital approach - not DRY, not optimal

function initBoard() {
  return Array(9).fill(null).map(() => {
    return {
      value: null,
      key: Math.random(),
    }
  })
}

function checkHorizontal(board) {
  const [
    one, two, three, four, five, six, seven, eight, nine
  ] = board

  return (one === two && two === three) ||
    (four === five && five === six) ||
    (seven === eight && eight === nine)
}

function checkVertical(board) {
  const [
    one, two, three, four, five, six, seven, eight, nine
  ] = board

  return (one === four && four === seven) ||
    (two === five && five === eight) ||
    (three === six && six === nine)
}

function checkDiagonal(board) {
  const [
    one, two, three, four, five, six, seven, eight, nine
  ] = board

  return (one === five && five === nine) ||
    (three === five && five === seven)
}

function checkIfWinner(d) {
  return checkHorizontal(d) ||
    checkVertical(d) ||
    checkDiagonal(d)
}
