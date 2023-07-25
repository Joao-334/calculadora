import React from 'react'
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.footer__h3}>Todos os Direitos reservados ©</h3>
      <p className={styles.footer__p}>Desenvolvido por João Felipe Reis Cavoli</p>
    </footer>
  )
}

export default Footer