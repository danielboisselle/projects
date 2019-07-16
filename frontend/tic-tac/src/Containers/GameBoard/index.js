import React from 'react';
import styles from './GameBoard.module.css';
import BoardGrid from '../../Components/BoardGrid';

function GameBoard() {
  return (
    <div className={styles.gameBoard}>
      <BoardGrid />
    </div>
  )
}

export default GameBoard;