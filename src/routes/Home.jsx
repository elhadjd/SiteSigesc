import React from 'react'
import { Header } from '../components/home/Headere'
import style from '../assets/home/index.module.scss'
import { Demonstration } from '../components/home/Demonstration'
export const Home = () => {
  return (
    <div className={style.App}>
      <main>
        <div className={style.container}>
          <div className={style.ring}></div>
          <div className={style.ring}></div>
          <div className={style.ring}></div>
        </div>
        <Demonstration/>
      </main>
      <footer>
        <div className=''>
        </div>
      </footer>
    </div>
  )
}
