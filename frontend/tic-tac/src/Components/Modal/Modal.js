import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import { Transition } from 'react-transition-group';

const Modal = props => {
  const {
    gameStatus,
    setPlayerNames,
    endGame,
    newGame,
    currentPlayer,
  } = props;

  const [p1Name, setP1Name] = useState("");
  const [p2Name, setP2Name] = useState("");

  const [inModal, setInModal] = useState(true);

  let modalContext = null;

  switch (gameStatus) {
    case 'NONE':
      modalContext = (
        <>
          <input onChange={e => setP1Name(e.target.value)}></input>
          <input onChange={e => setP2Name(e.target.value)}></input>
          <button type="submit" onClick={() => {
            setInModal(false);
            setPlayerNames(p1Name, p2Name);
            setTimeout(newGame, 300)
          }}>Submit</button>
        </>
      )
      break;
    case 'OVER':
      modalContext = (
        <>
          <p>The winner is: {currentPlayer.name}</p>
          <button onClick={() => {
            setInModal(false)
            setTimeout(newGame, 300)
          }}>New Game</button>
          <button onClick={() => {
            setInModal(false)
            setTimeout(endGame, 300)
          }}>End Game</button>
        </>
      )
      break;
  }
  
  useEffect(() => {
    console.log('mounting');
  }, [])

  return (
    <Transition
      in={inModal}
      timeout={300}
    >
      {state => {
        console.log(state)

        const localStyles = [
          styles.modal,
          state === 'entered' ? styles.enter : state === 'exiting' ? styles.exit : null
        ].join(' ');

        return (
          <>
            <div className={[styles.modalBackground, styles.fixedSizing].join(' ')}></div>
            <div className={[styles.modalWrapper, styles.fixedSizing].join(' ')}>
              <div className={localStyles}>
                {modalContext}
              </div>
            </div>
          </>
        )
      }}
    </Transition>
  )
}

export default Modal;