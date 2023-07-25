import React, { useState } from 'react';
import styles from './index.module.scss';

const Form = ({ type }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e, type) => {
        e.preventDefault();

        let response;

        if (type === 'register') {

            response = await fetch('http://localhost:8080/api/create/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    confirmPassword
                })
            })

        }

        else {
            response = await fetch('http://localhost:8080/api/login/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }).then(() => response.json());

        }


        console.log(response.json());
    };

    return (
        type === 'register' ? (
            <form onSubmit={(e) => handleSubmit(e, 'register')} className={styles.form}>
                <label className={styles.form__label}>
                    Nome:
                    <input type="text" placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} />
                </label>
                <label className={styles.form__label}>
                    Email:
                    <input type="email" placeholder='Digite seu Email' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className={styles.form__label}>
                    Senha:
                    <input type="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label className={styles.form__label}>
                    Confirmação de Senha:
                    <input type="password" placeholder='Confirme sua senha' onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>

                <button type='submit' className={styles.form__button}>Continuar</button>
            </form>
        ) : (
            <form onSubmit={(e) => handleSubmit(e, 'login')} className={styles.form}>
                <label className={styles.form__label}>
                    Email:
                    <input type="email" placeholder='Digite seu Email' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className={styles.form__label}>
                    Senha:
                    <input type="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
                </label>

                <button type='submit' className={styles.form__button}>Continuar</button>
            </form>
        )
    )
}

export default Form;