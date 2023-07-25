import React from 'react';
import Porcetagem from '../../assets/porcentagem.png'
import Link from '../../components/Link';
import styles from './index.module.scss';

const LandingPage = () => {
    return (
        <main>
            <section className={styles.section}>
                <div className={styles.section__intro}>
                    <h2>
                        Bem vindo a Calculadora Financeira!
                    </h2>
                    <p>
                        A ideia deste projeto veio de um TDE da faculdade.
                        Neste TDE, deviamos desenvolver um código para calcular juros simples.
                    </p>
                    <p>
                        Contudo, eu me inspirei nisso para criar esta aplicação, que além dos juros simples
                        calcula os juros compostos
                    </p>
                </div>

                <img src={Porcetagem} alt="Imagem de Porcentagem" />

                <div className={styles.section__end}>
                    <p>
                        Espero que esta calculadora possa ser util para você!
                    </p>
                    <p>
                        Clique <Link to={'/register'} css={'ref'}>Aqui</Link> para realizar seu cadastro!
                    </p>
                    <p>
                        Se já o tiver, clique <Link to={'/login'} css={'ref'}>Aqui</Link> para realizar seu login!
                    </p>
                </div>
            </section>
        </main>
    )
}

export default LandingPage