import { useState } from 'react'
import styles from '../styles/Wrapper.module.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import TopBarNavLinks from '../navbar/NavBarLinks'
import styleChange from './styleChange'
import { observer } from 'mobx-react-lite'
import NavBarLinks from '../navbar/NavBarLinks'

const More = observer(() => {

  return (
    <div className={styleChange.count == true ? styles.more__visible : styles.more__hidden}>
      <div className={styles.more__content}>
        <NavBarLinks />
      </div>
    </div>
  )
})

export default More