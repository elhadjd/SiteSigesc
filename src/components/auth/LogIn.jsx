import React from 'react'
import { useState } from 'react'
import style from '../../assets/auth/login.module.scss'
import { Register } from './Register'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export const Login = () => {
    const [stateFormLogin, setStateFormLogin] = useState(true)
  return (
    <div className={style.principal}>
        <header>
            <Link to="/">
                <h1>SISGESC</h1>
            </Link>
            
        </header>
        <div className={style.container}>
            <div>
                <div className={style.content}>
                    <div>
                        <div><AiOutlineCheckCircle/></div>
                        <div>
                            <span>Comece em pouco tempo</span>
                            <span>Integre APIs voltadas a desenvolvedores ou opte por soluções com pouco código ou predefinidas.</span>
                        </div>
                    </div>
                    <div>
                        <div><AiOutlineCheckCircle/></div>
                        <div>
                            <span>Aceite qualquer modelo de negócio</span>
                            <span>E-commerce, assinaturas, plataformas de SaaS, marketplaces e muito mais. Tudo isso em uma plataforma unificada.</span>
                        </div>
                    </div>
                    <div>
                        <div><AiOutlineCheckCircle/></div>
                        <div>
                            <span>Junte-se a milhões de empresas</span>
                            <span>A Stripe tem a confiança de empresas e startups de todos os portes.</span>
                        </div>
                    </div>
                </div>
                <div className={style.main}></div>
                <div className={style.footer}></div>
            </div>
            <div>
                {stateFormLogin == true ?(
                    <form> 
                        <header>
                            <span>Acesse sua conta</span>
                        </header>
                        <div className={style.box}>
                            <label htmlFor="email">Nome:</label>
                            <input type="email" id='email' />
                        </div>
                        <div className={style.box}>
                            <label htmlFor="password">Nome:</label>
                            <input type="password" id='password' />
                        </div>
                        <div className={style.checkbox}>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Permanece connectado por uma semana</label>
                        </div>
                        <div className={style.buttons}>
                            <button type='submit'>Continuar</button>
                        </div>
                        <div className={style.newCount}>
                            <span>Não tem uma conta?</span>
                            <span onClick={()=>setStateFormLogin(false)}> Registre-se.</span>
                        </div>
                    </form>
                ):(
                    <Register changeForme={()=>setStateFormLogin(true)}/>
                )}
            </div>
        </div>
    </div>
  )
}
