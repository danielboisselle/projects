import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = props => {
  const {
    gameStatus,
    setPlayerNames,
    endGame,
    newGame,
    currentPlayer,
  } = props;

  const [p1Name, setP1Name] = useState(undefined)
  const [p2Name, setP2Name] = useState(undefined)

  let modalContext = null;

  switch (gameStatus) {
    case 'NONE':
      modalContext = (
        <>
          <input onChange={e => setP1Name(e.target.value)}></input>
          <input onChange={e => setP2Name(e.target.value)}></input>
          <button type="submit" onClick={() => {
            setPlayerNames(p1Name, p2Name)
            newGame()
          }}>Submit</button>
        </>
      )
      break;
    case 'OVER':
      modalContext = (
        <>
          <p>The winner is: {currentPlayer.name}</p>
          <button onClick={newGame}>New Game</button>
          <button onClick={endGame}>End Game</button>
        </>
      )
      break;
  }

  return (
    <>
      <div className={styles.modalBackground}></div>
      <div className={styles.modal}>
        {modalContext}
      </div>
    </>
  )
}

export default Modal;