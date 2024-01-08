import React from "react"
import styles from "../styles/Wrapper.module.css"
import { BiSearch } from "react-icons/bi"

function AnimeSearchInput(props) {
  return (
    <div className={styles.anime__search__input__home}>
      <input
        className={styles.anime__search__input}
        placeholder="Search..."
        {...props}
      />
      <BiSearch className={styles.bi__search} />
    </div>
  )
}

export default AnimeSearchInput
