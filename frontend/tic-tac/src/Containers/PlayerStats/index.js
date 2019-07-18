import React from 'react';
import styles from './PlayerStats.module.css'

function PlayerStats(props) {
  const {
    p1,
    p2
  } = props.players;

  return (
    <div className={styles.playerStats}>
      <div className={styles.currentPlayer}>
        <p>{p1.name}</p>
      </div>
      <div className={styles.playerScores}>
        <h6>Scores:</h6>
        <ul>
          <li>{p1.name}</li>
          <li> - {p1.score}</li>
          <li>{p2.name}</li>
          <li> - {p2.score}</li>
        </ul>
      </div>
    </div>
  )
}

export default PlayerStats;