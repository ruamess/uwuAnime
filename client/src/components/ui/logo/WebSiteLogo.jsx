import { useState } from "react"
import styles from "../styles/Wrapper.module.css"
import { NavLink, Route, Routes } from "react-router-dom"

function WebSiteLogo() {
  return (
    <div className={styles.web__site__logo}>
      <div>
        <img src="../public/SiteLogo.png" />
      </div>
      <div>
        <NavLink className={styles.title} to="/">
          UWUANIME.GO
        </NavLink>
      </div>
    </div>
  )
}

export default WebSiteLogo
