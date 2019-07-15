import React from 'react';
import styles from './GameBoard.module.css';

export default function gameBoard () {
  //TODO: create board grid components

  const boardGrid = Array(9).fill(null).map((_, i) => <div key={i} className={styles.boardGridItem}></div>)

  return (
    <div className={styles.gameBoard}>
      {boardGrid}
    </div>
  )
}