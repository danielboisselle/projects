import React from 'react';
import styles from './GameBoard.module.css';
import BoardGrid from '../../Components/BoardGrid';

function GameBoard(props) {
  return (
    <div className={styles.gameBoard}>
      <BoardGrid {...props} />
    </div>
  )
}

export default GameBoard;