import React from 'react'
import Button from '../Button'

const Generate = (props) => {
  let properties = 0;
  let string = props.data.map((item) => {
    if (item.value === true){
      properties += 1
      return item.content
    }
    return ''
  })

  string = string.join('')
  let password = ''
  for (let i=0; i < props.length; i++){
    password += string.charAt(Math.floor(Math.random() * string.length));
  }

  let calcStrength = (properties * 0.25) * (props.length * 5);
  
  return <Button className={'generate'} 
    clickHandler={() => props.clickHandler({password:password, strength:calcStrength})} 
    text={'Generate'} />
}
  
export default Generate