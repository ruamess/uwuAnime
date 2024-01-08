import { useState } from 'react'
import styles from '../styles/Wrapper.module.css'
import { FaBars } from "react-icons/fa"
import styleChange from './styleChange'

function MoreButton() {
  return (
    <div className={styles.more__button}>
      <button onClick={() => styleChange.changeStyle()}><FaBars /></button>
    </div>
  )
}

export default MoreButton