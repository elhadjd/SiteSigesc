import { Outlet } from 'react-router-dom'
import style from './App.module.scss'
import { Header } from './components/home/Headere'
import Footer from './components/home/Footer'

export default function App() {
  return (
    <div className={style.App}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}