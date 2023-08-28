import React from 'react'
import style from '../../assets/home/why.module.scss'
import {AiFillCrown,AiFillPieChart,AiOutlineAntDesign,AiOutlineCreditCard} from 'react-icons/ai'
export const Why = () => {
  return (
    <div className={style.principal}>
        <div className={style.title}>
            <h2>Por que a Sigesc?</h2>
            <h1>
                Uma abordagem de gerenciamento de empresas focada em tecnologia
            </h1>
        </div>
        <div className={style.container}>
            <section>
                <header>
                    <div><AiFillCrown/></div>
                    <h1>Plataforma sempre em evolução</h1>
                </header>
                <div>
                    <p>
                    Cobrimos e otimizamos todos os níveis da infraestrutura financeira, desde integrações diretas com bandeiras de cartões e bancos até fluxos de checkout no navegador.
                    </p>
                </div>
            </section>
            <section>
                <header>
                    <div><AiFillPieChart/></div>
                    <h1>Confiabilidade comprovada</h1>
                </header>
                <div>
                    <p>
                    Lançamos centenas de recursos e melhorias a cada ano para ajudar você a ficar à frente das mudanças no setor (em média, implementamos nossa API de produção 16 vezes por dia).
                    </p>
                </div>
            </section>
            <section>
                <header>
                    <div><AiOutlineCreditCard/></div>
                    <h1>Otimizações inteligentes</h1>
                </header>
                <div>
                    <p>
                    Nossos sistemas operam com uma disponibilidade superior a 99,99%, sendo altamente expansíveis e redundantes. A Stripe é certificada com os mais elevados padrões de conformidade.
                    </p>
                </div>
            </section>
            <section>
                <header>
                    <div><AiOutlineAntDesign/></div>
                    <h1>Atuação abrangente</h1>
                </header>
                <div>
                    <p>
                        Nossos modelos de machine learning são treinados com bilhões de conjuntos de dados e ajudam a aumentar sua receita por meio da otimização da conversão, prevenção de fraudes, recuperação de rendimentos e muito mais.
                    </p>
                </div>
            </section>
        </div>
    </div>
  )
}
