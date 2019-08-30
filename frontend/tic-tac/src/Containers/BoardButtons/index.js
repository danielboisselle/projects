import React from 'react';
import styles from './BoardButtons.module.css';

// TODO: css modules not working as expected

export default function boardButtons(props) {
  const {
    endGame,
  } = props;

  return (
    <div className={styles.boardButtons}>
      <button
        type="submit"
        className={[styles.boardButtons, styles.endGame]}
        onClick={endGame}>End game</button>

      <button
        type="submit"
        className={[styles.boardButtons, styles.endGame]}
        onClick={() => { }}>New game</button>
    </div>
  )
}