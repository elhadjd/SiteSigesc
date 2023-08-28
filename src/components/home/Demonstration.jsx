import React, { useEffect, useState } from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
import {CgChevronRight,CgChevronDoubleRight} from 'react-icons/cg'
import style from '../../assets/home/Demonstration.module.scss'
import { Buttons } from '../Buttons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderImg } from './sliderImg'
import { Prices } from '../listPrices/Prices'
import { Why } from './Why'
export const Demonstration = () => {
  const [icons,setIcons] = useState([
    <CgChevronRight/>,
    <CgChevronDoubleRight/>
  ])
  const [iconContact,setIcon] = useState()
  const changeIcons = ((position)=>{
    return setIcon(icons[position])
  })
  useEffect(()=>{
    changeIcons(0)
  },[])
  const iconDemo = (()=>{

  })
  return (
    <div className={style.container}>
        <div className={style.header}></div>
        <div className={style.content_left}>
          <div>
            <h3>
            Infraestrutura de pagamentos para a internet
            </h3>
          </div>
          <div>
            <p>
            Milhões de empresas de todos os tamanhos, de pequenas startups a grandes corporações, usam as soluções de software e API da Stripe para receber pagamentos, enviar repasses e gerenciar suas operações online.
            </p>
          </div>
          <div className={style.buttons}>
            <Buttons text='Entrar em contacto' icon={iconContact} changeIcons={changeIcons} type='button' style={style.contact}/>
            <Buttons text='Demo' icon={<AiFillCaretRight/>}  changeIcons={iconDemo} type='button' style={style.demo}/>
          </div>
        </div>
        <div className={style.content_right}>
          <video autoPlay muted>
            <source src="/img/video.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className={style.banner}>
          <SliderImg/>
        </div>
        <div className={style.why}>
          <Why/>
        </div>
    </div>
  )
}
