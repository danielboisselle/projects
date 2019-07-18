import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = props => {
  const {
    gameStatus,
    setPlayerNames,
    endGame,
    newGame,
  } = props;

  const [p1Name, setP1Name] = useState('')
  const [p2Name, setP2Name] = useState('')

  if (gameStatus === 'NONE') {
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <input onChange={e => setP1Name(e.target.value)}></input>
          <input onChange={e => setP2Name(e.target.value)}></input>
          <button type="submit" onClick={() => {
            setPlayerNames(p1Name, p2Name)
            newGame()
          }}>Submit</button>
        </div>
      </div>
    )
  }

  if (gameStatus === 'OVER') {
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modal}>
          <p>The winner is:</p>
          <button
            onClick={props.newGame}>New Game</button>
          <button
            onClick={props.newGame}>End Game</button>
        </div>
      </div>
    )
  }
}

export default Modal;