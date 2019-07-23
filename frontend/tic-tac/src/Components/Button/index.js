import React from 'react';
import styles from './Button.module.css';

const button = props => {
  const {
    style,
    onClick,
    text,
  } = props;

  return (
    <button onClick={onClick} className={style ? style : styles.default}>{text}</button>
  )
}

export default button;