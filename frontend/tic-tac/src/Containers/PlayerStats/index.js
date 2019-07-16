import React from 'react';
import styles from './PlayerStats.module.css';
import PlayerContext from '../../Context/playerContext';

function PlayerStats() {
  const playerConsumer = context => {
    const {
      currentPlayer
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
        {name}
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