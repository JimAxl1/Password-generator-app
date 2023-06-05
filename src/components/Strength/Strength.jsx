import React from 'react'
import styles from './Strength.module.scss'

const Strength = ({ strength }) => {
  let calc = '';
  let classContainer ='';
  if(strength > 0 && strength <= 15){
    calc = 'TOO WEAK!'
    classContainer = 'tooWeak'
  }
  if(strength > 15 && strength < 31 ){
    calc = 'WEAK'
    classContainer = 'weak'
  }
  if(strength >= 31 && strength < 44 ){
    calc = 'MEDIUM'
    classContainer = 'medium'
  }
  if(strength >= 45 ){
    calc = 'STRONG'
    classContainer = 'strong'
  }
  return (
    <div className={styles.container}>
      <p className={styles.text}>Strength</p>
      <div className={`${styles[classContainer]} ${styles.meterContainer}`}>
        <p className={styles.text2}>{calc}</p>
        <div className={styles.meter}></div>
        <div className={styles.meter}></div>
        <div className={styles.meter}></div>
        <div className={styles.meter}></div>
      </div>
    </div>
  )
}

export default Strength