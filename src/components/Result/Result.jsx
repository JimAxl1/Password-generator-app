import React from 'react'
import Button from '../Button'
import styles from './Result.module.scss'
import { useState } from 'react'
import 'jetbrains-mono'

const Result = (props) => {
  const [show, setShow] = useState('hidden');

  let showText = setTimeout(() => setShow('hidden'), 2000);
  
  function copyClipboard(){
    document.getElementById('si').select();
    document.execCommand('copy');
    return show === 'hidden' ? setShow('visible') : showText
  }

  let size = props.password.length < 4 ? 9 : props.password.length - 3;

  return (
    <div className={styles.container}>
      <input type='text' placeholder='P4$5WOrD!' id='si' value={props.password} size={size} readOnly className={styles.text} /> 
      <div className={styles.container2}>
        <p className={styles[show]}>Copied!!</p>
        <Button className='result' clickHandler={copyClipboard}/>
      </div>
    </div>
  )
}

export default Result