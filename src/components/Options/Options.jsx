import React from 'react'
import { useState } from 'react'
import Strength from '../Strength'
import Checkbox from '../Checkbox'
import CharLength from '../CharLength'
import Generate from '../Generate'
import styles from './Options.module.scss'

const Options = (props) => {
  const [options, setOptions] = useState([
    {type:'Uppercase Letters', value:true, content:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'},
    {type:'Lowercase Letters', value:false, content:'abcdefghijklmnopqrstuvwxyz'},
    {type:'Numbers', value:true, content:'12345678901234567890'},
    {type:'Symbols', value:false, content:'!@#$%&*()_-=+/!@#$%&*()_-=+/'}
  ])
  
  const [range, setRange] = useState(10)

  function change(id){
    const newList = options.map((item) => {
      if (item.type === id){
        return {...item, value:!item.value}
      }
      return item
    })
    setOptions(newList)
  }

  return (
    <div className={styles.container}>
      <CharLength value={range} handleFunction={(a) => setRange(a)}/>
      {options.map(item => { 
        return (
          <Checkbox key={item.type} text={item.type} value={item.value} handleFunction={() => change(item.type)}/>
        )
      })}
      <Strength strength={props.strength} />
      <Generate data={options} length={range} clickHandler={props.generate} />
    </div> 
  )
}

export default Options