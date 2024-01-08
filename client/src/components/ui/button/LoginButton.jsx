import { useState } from "react"
import styles from "../styles/Wrapper.module.css"
import { NavLink, Route, Routes } from "react-router-dom"

function LoginButton() {
  return (
    <div className={styles.login__block}>
      <button>
        <NavLink to={"/reg"}>ВОЙТИ</NavLink>
      </button>
    </div>
  )
}

export default LoginButton
