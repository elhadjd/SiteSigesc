import React, { useState, useEffect} from "react"
import { useNavigate} from 'react-router-dom'

import {AiOutlineRight,AiOutlineArrowRight} from 'react-icons/ai'


export const HeaderServices = (()=>{
    const [icons,setIcons] = useState([
        <AiOutlineRight/>,
        <AiOutlineArrowRight/>
      ])
      const [icon,setIcon] = useState(<AiOutlineRight/>)
      const navigate = useNavigate()
      const changeIcons = ((position:number)=>{
        return setIcon(icons[position])
      })
      useEffect(()=>{
        changeIcons(0)
      },[])
    
      const Login = (()=>{
        navigate('/auth')
      })

      const navigates = ((route: string) : void =>{
        return navigate(route)
      })

      return {icon,Login,changeIcons,navigates}
})