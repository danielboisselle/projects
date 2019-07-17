import React from 'react';
import styles from './PlayerStats.module.css';
import PlayerContext from '../../Context/playerContext';

function PlayerStats() {
  const playerConsumer = context => {
    const {
      currentPlayer,
      p0: Player1,
      p1: Player2,
    } = context;

    const {
      name,
    } = context[currentPlayer];

    return (
      <React.Fragment>
        <div className={styles.currentPlayer}>
          <p>{name}</p>
        </div>
        <div className={styles.playerScores}>
          <h6>Scores:</h6>
          <ul>
            <li>{Player1.name}</li>
            <li> - {Player1.score}</li>
            <li>{Player2.name}</li>
            <li> - {Player2.score}</li>
          </ul>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className={styles.playerStats}>
      <PlayerContext.Consumer>
        {playerConsumer}
      </PlayerContext.Consumer>
    </div>
  )
}

export default PlayerStats;