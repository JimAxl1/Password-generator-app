import React from 'react'
import styles from './Checkbox.module.scss'
import 'jetbrains-mono'

const Checkbox = (props) => {
  return (
    <label className={styles.text}>
      <input type='checkbox' onChange={props.handleFunction} checked={props.value} className={styles.checkBox}/> Include {props.text}
    </label> 
  )
}

export default Checkbox