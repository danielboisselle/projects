import React from 'react';
import styles from './BoardButtons.module.css';

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
        onClick={endGame}>New game</button>
    </div>
  )
}