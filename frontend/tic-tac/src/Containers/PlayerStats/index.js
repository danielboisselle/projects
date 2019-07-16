import React from 'react';
import styles from './PlayerStats.module.css';
import PlayerContext from '../../Context/playerContext';

function PlayerStats() {
  const playerConsumer = context => {
    let playerName = 'Player 1';

    // Players 2 turn
    if (!context.playerTurn) {
      playerName = 'Player 2'
    }

    return playerName;
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