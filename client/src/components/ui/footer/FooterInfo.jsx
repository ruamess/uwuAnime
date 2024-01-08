import { useState } from 'react'
import styles from '../styles/Wrapper.module.css'

function FooterInfo() {
  const [count, setCount] = useState(0)
  return ( 
    <div className={styles.footer__info}></div>
  )
}

export default FooterInfo