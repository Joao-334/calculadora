import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';


const Link = ({ children, to, css = 'nav' }) => {

  return (
    
    <NavLink className={({isActive}) => `${isActive ? styles.link__nav__atual : ''} ${css === "nav" ? styles.link__nav : styles.link__ref} `} to={to}>{children}</NavLink>
  )
}

export default Link