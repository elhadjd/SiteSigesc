import React from 'react'
import style from '../../assets/listPrices/prices.module.scss'
import { useNavigate } from 'react-router-dom'
export const Prices = () => {
  const Navigate = useNavigate()
  const handleSelectPlane = ((route)=>{
    return Navigate(route)
  })
  return (
    <div className={style.principal}>
      <div className={style.description}>
        <h3>Preços</h3>
        <p>Trabalhar com vendas de serviços ou produto, exige uma demonstração clara do que está vendendo os planos e os preços, nesse componente, simples você encontra uma tabela que faz esse trabalho.</p>
      </div>
      <div className={style.list}>
        <div>
          <div>
            <h3>Gratuita</h3>
            <span><h2>0.0kz</h2>/2Meses</span>
          </div>
          <div>
            <li>Todos os modulos</li>
            <li>Venda ilimitada</li>
            <li>Clientes Ilimitado</li>
            <li>Fornacedores Ilimitado</li>
          </div>
          <div>
            <button onClick={()=>handleSelectPlane('/CreateCompany/0')}>Aderir</button>
          </div>
        </div>
        <div>
          <div>
            <h3>Proficional</h3>
            <span><h2>36.720,00kz</h2>/6 Meses</span>
          </div>
          <div>
          <li>Todos os modulos</li>
            <li>Venda ilimitada</li>
            <li>Clientes Ilimitado</li>
            <li>Fornacedores Ilimitado</li>
          </div>
          <div>
            <button onClick={()=>handleSelectPlane('/CreateCompany/1')}>Aderir</button>
          </div>
        </div>
        <div>
          <div>
            <h3>Ultimate</h3>
            <span><h2>42.840,00kz</h2>/1 Ano</span>
          </div>
          <div>
          <li>Todos os modulos</li>
            <li>Venda illimitada</li>
            <li>Clientes Illimitado</li>
            <li>Fornacedores Illimitado</li>
          </div>
          <div>
            <button onClick={()=>handleSelectPlane('/CreateCompany/2')}>Aderir</button>
          </div>
        </div>
      </div>
    </div>
  )
}
