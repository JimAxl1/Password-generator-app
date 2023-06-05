import React from 'react'
import styles from './Button.module.scss'
import 'jetbrains-mono'

const Button = (props) => {
  return <button className={styles[props.className]} onClick={props.clickHandler}>{props.text}</button>
}

export default Button