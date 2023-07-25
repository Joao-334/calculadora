import React from 'react';
import Form from '../../../components/Form';
import styles from '../index.module.scss';

const Register = () => {
  return (
    <div className={styles.auth}>
      <h2>Faça seu registro e aproveite a calculadora!</h2>
      <Form type={'register' }/>
    </div>
  )
}

export default Register;