import style from '../../assets/home/header.module.scss'
import {Link} from 'react-router-dom'
import {AiOutlineRight,AiOutlineArrowRight,AiOutlineMenu} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import {CgMenuRound} from 'react-icons/cg'
export const Header = () => {
  const [stateMenu, setStateMenu] = useState(true)
  const [icons,setIcons] = useState([
    <AiOutlineRight/>,
    <AiOutlineArrowRight/>
  ])
  const [icon,setIcon] = useState()
  const changeIcons = ((position)=>{
    return setIcon(icons[position])
  })
  useEffect(()=>{
    changeIcons(0)
  },[])

  const showMenu = (()=>{
    setStateMenu(!stateMenu)
  })
  
  
  return (
    <div className={style.container}>
        <div className={style.card}>
            <Link to='/new'><h1>SIGESC</h1></Link>
        </div>
          <button className={style.menu}>
            <div className={style.logo}>
              <h1>SIGESC</h1>
              <span onClick={()=>showMenu()}>X</span>
            </div>
            <div className={style.card}>
              <span>Loja</span>
              <span>Empresa</span>
              <span>Preços</span>
            </div>
            <div className={style.card}>
              <span>Suporte</span>
              <Link to='/auth'>
                <span onMouseEnter={()=>changeIcons(1)}  onMouseOut={()=>changeIcons(0)} className={style.logIn}>
                  Entrar
                  {icon}
                </span>
              </Link>
            </div>
          </button>
    </div>
  )
}
