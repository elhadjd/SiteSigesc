import React from 'react'
import styles from '../../assets/listPrices/companies.module.scss'
import { BiCaretDown, BiSearch } from 'react-icons/bi'
import { newCompanyService } from '../../services/newCompanyService'
import { ToastContainer, toast } from 'react-toastify';
import Payment from './Payment'

export default function Company() {
  const {
    countries,
    handlerSearchCountry,
    stateFormListCountry,
    setStateFormListCountry,
    handlerChoseCountry,
    formulary,
    handelChangeInputs,
    handleSubmitForm,
    FormPayment
  } = newCompanyService()

  return (
    <>
      {
        FormPayment ? (
        <div className={styles.principal}>
        <ToastContainer/>
          <div className={styles.company}>
            <form onSubmit={handleSubmitForm}>
              <span className={styles.box}>
                <label htmlFor="name">Nome </label>
                <input type="text" value={formulary.name} onChange={(e)=>handelChangeInputs(e)} required id='name' placeholder='Digite nome da empresa'/>
              </span>
              <span className={styles.box}>
                <label htmlFor="fiscalIdentification">Identificação fiscal </label>
                <input type="text" id='fiscalIdentification' onChange={(e)=>handelChangeInputs(e)} required value={formulary.fiscalIdentification} placeholder='Numero de identificação fiscal'/>
              </span>
              <span className={styles.box}>
                <label htmlFor="phone">Telefone </label>
                <input type="text" id='phone' onChange={(e)=>handelChangeInputs(e)} required value={formulary.phone} placeholder='Digite numero da telefone'/>
              </span>
              <span className={styles.box}>
                <label htmlFor="email">E-mail </label>
                <input type="email" id='email' required onChange={(e)=>handelChangeInputs(e)} value={formulary.email} placeholder='Digite seu email'/>
              </span>
              <span className={styles.box}>
                <label htmlFor="country">Pais </label>
                <button type='button' required>
                  <span onClick={()=>setStateFormListCountry(! stateFormListCountry)}>{formulary.country.name!=''?formulary.country.name:'Escolhe seu pais'}</span>
                  <BiCaretDown/>
                    {
                      stateFormListCountry && (
                        <div className={styles.listCountry}>
                          <span className={styles.search}>
                            <input onChange={(e)=>handlerSearchCountry(e.target.value)} type="search" placeholder='Pesquisar...' />
                              <BiSearch/>
                          </span>
                          {
                            countries.list.map((country,index)=>
                              <div key={index} onClick={()=>handlerChoseCountry(country)}>{country.name}</div>
                            )
                          }
                      </div>
                      )
                    }
                </button>
              </span>
              <span className={styles.box}>
                <label htmlFor="city">Cidade </label>
                <input type="text" onChange={(e)=>handelChangeInputs(e)} id='city' required value={formulary.city} placeholder='Digite sua cidade'/>
              </span>
              <span className={styles.box}>
                <label htmlFor="rua">Bairo </label>
                <input type="text" id='rua' onChange={(e)=>handelChangeInputs(e)} required value={formulary.rua} placeholder='Digite seu bairo'/>
              </span>
              <button type='submit'>Cadastrar</button>
            </form>
          </div>
        </div>): (<Payment fiscalIdentification={formulary.fiscalIdentification}/>)
      }
    </>
  )
}

