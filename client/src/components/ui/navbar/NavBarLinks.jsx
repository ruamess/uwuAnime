import { useState } from "react"
import styles from "../styles/Wrapper.module.css"
import { NavLink, Route, Routes } from "react-router-dom"
import styleChange from "../button/styleChange"
import { observer } from "mobx-react-lite"

const NavBarLinks = observer(() => {
  return (
    <div className={styles.nav__bar__links}>
      <NavLink onClick={() => styleChange.returnStyle()} to="/tv">
        СЕРИАЛЫ
      </NavLink>
      <NavLink onClick={() => styleChange.returnStyle()} to="/movies">
        ФИЛЬМЫ
      </NavLink>
      <NavLink onClick={() => styleChange.returnStyle()} to="/reg">
        ТОП 100
      </NavLink>
      <NavLink onClick={() => styleChange.returnStyle()} to="/reg">
        РАНДОМ
      </NavLink>
    </div>
  )
})

export default NavBarLinks
