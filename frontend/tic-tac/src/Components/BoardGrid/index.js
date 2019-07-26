import React from 'react';
import styles from './BoardGrid.module.css';

function BoardGrid(props) {
  const boardGrid = props.boardState.map(i => (
    <div
      key={i.key}
      className={styles.boardGridItem}
      onClick={() => {
        if (i.value) return

        props.playerMoved(i.key)
      }}>
      {i.value}
    </div>
  ))

  return (
    <React.Fragment>
      {boardGrid}
    </React.Fragment>
  )
}

export default React.memo(BoardGrid);
