import React from 'react';
import styles from './index.module.scss';
import Link from '../Link';
import Logo from '../../assets/Logo.png';

const NavBar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <img src={Logo} alt="logo da empresa" className={styles.nav__image} />
        <div className={styles.nav__links}>
          <Link to={'/'}>Home</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Registro</Link>
        </div>

      </nav>
    </header>
  )
}

export default NavBar;