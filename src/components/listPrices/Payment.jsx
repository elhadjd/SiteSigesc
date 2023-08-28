import styles from '../../assets/listPrices/payment.module.scss'
export default function Payment({fiscalIdentification}) {
  return (
    <div className={styles.principal}>
      <div className={styles.form}>
        <header>
          <h2>52.500.00Kz</h2>
          <span className={styles.box}>
            <label htmlFor="nif">Numero de identificação</label>
            <input type="text" id='nif' value={fiscalIdentification} placeholder='Digite seu numero de identificação fiscal'/>
          </span>
        </header>
        <main>
          <div className={styles.images}>
            <span>
              <img src="/payment/img/card.png" alt="" />
            </span>
            <span>
              <img src="/payment/img/paypal.png" alt="" />
            </span>
          </div>
          <div className={styles.inputs}>
            <div>
              <span className={styles.box}>
                <label htmlFor="nameCard">Nome do cartao</label>
                <input type="text" id="nameCard" placeholder="Digite nome do cartão"/>
              </span>
              <span className={styles.box}>
                <label htmlFor="numberCard">numero de cartao</label>
                <input type="text" id="numberCard" className={styles.numberCard} placeholder="4111-1111-1111-1111"/>
              </span>
            </div>
            <div>
              <div className={styles.codeCardDate}>
                <span className={styles.box}>
                  <label htmlFor="expirationDate">Data de expiração</label>
                  <input type="date" id="expirationDate" placeholder="Digite a data e expiração"/>
                </span>
                <span className={styles.box}>
                  <label htmlFor="cadeCard">Cidigo do cartão</label>
                  <input type="text" id="codeCard" className={styles.codeCard} placeholder="Digite codigo do cartão"/>
                </span>
                
              </div>
              <div className={styles.info}>
                <p>Trabalhar com vendas de serviços ou produto, exige uma demonstração clara do que está vendendo</p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className={styles.update}>

          </div>
          <div className={styles.submit}>
            <button>Confirmar</button>
          </div>
        </footer>
      </div>
    </div>
  )
}
