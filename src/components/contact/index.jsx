import React from 'react'
import {BiMap,BiLogoTiktok} from 'react-icons/bi'
import {BsFillTelephoneForwardFill,BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import styles from '../../assets/contacts/index.module.scss'

export default function Contacts() {
  return (
    <div className={styles.principal}>
        <div className={styles.main}>
          <div className={styles.titles}>
            <div>
              <h3>Entre em contacto conosco</h3>
            </div>
            <div className={styles.TelLocal}>
              <div className={styles.phone}>
                <span>
                  <BiMap/>
                </span>
                <span>Nosso escritorio</span>
                <span>Califurnia 3322,21921</span>
              </div>
              <div className={styles.local}>
                <span>
                  <BsFillTelephoneForwardFill/>
                </span>
                <span>Nossos numeros de telefones</span>
                <span>
                  <div>+224 929147447</div>
                  <div>+244 958033632</div>
                </span>
              </div>
            </div> 
            <div className={styles.redes}>
              <a href='https://www.facebook.com/Sisgesc'><BsFacebook/>Facebook</a>
              <a href='https://www.tiktok.com/@sigesc'><BiLogoTiktok/>TikTok</a>
              <a href='https://www.instagram.com/leonardo_vandunen/'><AiFillInstagram/>Instagram</a>
            </div>
          </div>
          <div className={styles.message}>
            <form>
              <span>
                <label htmlFor="surname">Apelido</label>
                <input type="text" required id='surname' placeholder='Digite seu apelido'/>
              </span>
              <span>
                <label htmlFor="name">Nome</label>
                <input type="text" id='name' placeholder='Digite seu nome' />
              </span>
              <span>
                <label htmlFor="phone">Telefone</label>
                <input type="tel" required id='phone' placeholder='Digite seu numero de telefone'/>
              </span>
              <span>
                <label htmlFor="email">E-mail</label>
                <input type="email" required id='email' placeholder='Digite seu email'/>
              </span>
              <span>
                <textarea name="message" required id="message"></textarea>
              </span>
              <span>
                <button>Enviar</button>
              </span>
            </form>
          </div>
        </div>
    </div>
  )
}
