import { useState } from 'react'
import styles from '../styles/Wrapper.module.css'
import NavBarLinks from './NavBarLinks'
import WebSiteLogo from '../logo/WebSiteLogo'
import NavBarRight from './NavBarRight'

function NavBar() {

  return (
    <div className={styles.nav__bar}>
      <WebSiteLogo />
      <NavBarLinks />
      <NavBarRight />
    </div>
  )
}

export default NavBar