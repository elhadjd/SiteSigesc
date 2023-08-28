import React, { useEffect, useState } from 'react'
import style from '../../assets/auth/login.module.scss'
import {BiCaretDown,BiSearch} from 'react-icons/bi'

import axios from 'axios'
export const Register = ({changeForme}) => {
const [countries, setCountries] = useState({
    store:[],
    list:[]
})
const [countryChose,setCountryChose] = useState('')
const [stateFormListCountry,setStateFormListCountry] = useState(false)
useEffect(()=>{
    (async ()=>{
        await axios.get('/data/country.json')
        .then((response) => {
            countries.list = response.data
            countries.store = response.data
            setCountries({...countries})
        }).catch((err) => {
            console.log(err);
        });
    })()
},[])

const handlerSearchCountry  = ((name)=>{
    countries.list = countries.store.filter((country)=>{
        return String(country.name).toLocaleLowerCase().includes(String(name.toLocaleLowerCase()))
    })
    setCountries({...countries})
})

const handlerChoseCountry = ((event)=>{
    setCountryChose(event.name)
    return setStateFormListCountry(false)
})
  return (
    <div>
        <form> 
            <header>
                <span>Crie sua conta</span>
            </header>
            <div className={style.box}>
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' />
            </div>
            <div className={style.box}>
                <label htmlFor="name">Nome completo:</label>
                <input type="name" id='name' />
            </div>
            <div className={style.box}>
                <label htmlFor="country">Pais:</label>
                <button type='button'>
                    <span onClick={()=>setStateFormListCountry(! stateFormListCountry)}>{countryChose!=''?countryChose:'Escolhe seu pais'}</span>
                    <BiCaretDown/>
                    {
                        stateFormListCountry ? (
                            <div className={style.listCountry}>
                                <span className={style.search}>
                                    <input onChange={(e)=>handlerSearchCountry(e.target.value)} type="search" placeholder='Pesquisar...' />
                                    <BiSearch/>
                                </span>
                                {countries.list.map((country)=>(
                                    <div key={country.code} onClick={()=>handlerChoseCountry(country)}>{country.name}</div>
                                ))}
                            </div>
                        ):('')
                    }
                    
                </button>
                
            </div>
            <div className={style.box}>
                <label htmlFor="password">Senha:</label>
                <input type="password" id='password' />
            </div>
            <div className={style.buttons}>
                <button type='submit'>Registrar</button>
            </div>
            <div className={style.newCount}>
                <span>Não tem uma conta?</span>
                <span onClick={changeForme}> Registre-se.</span>
            </div>
        </form>
    </div>
  )
}
