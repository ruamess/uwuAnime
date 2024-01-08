import { useState } from "react"
import styles from "../styles/Wrapper.module.css"
import { NavLink, Route, Routes } from "react-router-dom"
import NavBarLinks from "./NavBarLinks"
import WebSiteLogo from "../logo/WebSiteLogo"
import MoreButton from "../button/MoreButton"
import LoginButton from "../button/LoginButton"
import ChangeTheme from "../button/ChangeTheme"

function NavBarRight() {
  return (
    <div className={styles.nav__bar__right}>
      <ChangeTheme />
      <LoginButton />
      <MoreButton />
    </div>
  )
}

export default NavBarRight
