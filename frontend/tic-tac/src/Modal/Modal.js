import React from 'react';
import styles from './Modal.module.css';

const Modal = props => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <p>The winner is:</p>
        <button
          onClick={() => { console.log('clicked') }}>Ok</button>
      </div>
    </div>
  )
}

export default Modal;