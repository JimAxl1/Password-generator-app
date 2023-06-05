import React from 'react'
import styles from './CharLength.module.scss'
import 'jetbrains-mono'

const CharLength = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Character Length</p>
      <p className={styles.value}>{props.value}</p>
      <input className={styles.range} type='range' max='20' value={props.value} onChange={(e) => props.handleFunction(e.target.value)}/>
    </div>
  )
}

export default CharLength