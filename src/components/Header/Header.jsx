import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header data-testid='header-logo' className={styles.header}>
      <img
        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Kayak_Logo.svg/1200px-Kayak_Logo.svg.png'}
        className={styles.logo}
        alt='logo'
      />
    </header>
  )
}

export default Header
