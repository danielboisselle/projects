import React, { useContext, useState } from 'react';
import PlayerContext from '../../Context/playerContext';
import styles from './BoardGrid.module.css';

function BoardGrid() {
  const context = useContext(PlayerContext);

  // Player 1s turn
  let currentTurn = 'X'

  if (context.currentPlayer === 'p1') { // Player 2s turn
    currentTurn = 'O'
  }

  // TODO: Optimize
  const [boardGridState, setBoardGridState] = useState(Array(9).fill(null));

  const boardGrid = boardGridState.map((_, i) => (
    <div
      key={i}
      className={styles.boardGridItem}
      onClick={() => {
        if (boardGridState[i] !== null) {
          return
        }

        // TODO: Optimize
        const copy = [...boardGridState];
        copy.splice(i, 1, currentTurn)
        setBoardGridState(copy);
        context.playerMoved();
      }}>
      {boardGridState[i]}
    </div>
  ))

  return (
    <React.Fragment>
      {boardGrid}
    </React.Fragment>
  )
}

export default BoardGrid;
