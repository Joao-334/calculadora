import React from 'react';
import Form from '../../../components/Form';
import styles from '../index.module.scss';

const Login = () => {
  return (
    <div className={styles.auth}>
      <h2>Realize seu Login agora mesmo!</h2>
      <Form type={'login'}/>
    </div>
  )
}

export default Login;