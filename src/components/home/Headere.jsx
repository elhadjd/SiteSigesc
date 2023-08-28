import { Outlet,Link } from 'react-router-dom'
import style from '../../assets/home/header.module.scss'
import { HeaderServices } from '../../services/headerServices'
import {AiOutlineMenu} from 'react-icons/ai'

export const Header = () => {
  const {Login,icon,changeIcons,navigates} = HeaderServices()
  return (
    <div className={style.container}>
      <div>
        <span>
          <Link to={'/'}>
            <h1>SIGESC</h1>
          </Link>
        </span>
        <button>
          <div>
            <div className={style.logo}>
              <h1>SIGESC</h1>
            </div>
            <div className={style.card}>
              <span>Loja</span>
              <span>Empresa</span>
              <span onClick={()=>navigates('/prices')}>Preços</span>
              <span onClick={()=>navigates('/contact')}>Contactos</span>
            </div>
            <div className={style.card}>
              <span onClick={()=>navigates('/contact')}>Suporte</span>
              <h3 onMouseEnter={()=>changeIcons(1)}  onMouseOut={()=>changeIcons(0)} className={style.logIn} onClick={()=>Login()}>
                  Entrar
                  {icon}
              </h3>
            </div>
          </div>
          
          <span>
            <AiOutlineMenu/>
          </span>
        </button>
      </div>
    </div>
  )
}
