import React from 'react'

export const Buttons = ({type,style,text,changeIcons,icon}) => {
  return <button type={type} onMouseEnter={()=>changeIcons(1)} onMouseOut={()=>changeIcons(0)}
  className={style}>{text}{icon}</button>
}
