import { useState } from "react"
import styles from "./Home.module.css"
import { NavLink, Route, Routes } from "react-router-dom"
import { HiOutlinePlay } from "react-icons/hi2"

function AnimeItem({ anime }) {
  return (
    <NavLink to={`/anime/${anime._id}`}>
      <div className={styles.anime__item}>
        <div className={styles.anime__item__image}>
          <img src={anime.image} />
          <div className={styles.anime__image__overlay}>
            <HiOutlinePlay style={{ fontSize: 60 }} />
          </div>
        </div>
        <div className={styles.anime__item__name}>
          <span className={styles.anime__item__title}>{anime.title}</span>
        </div>
      </div>
    </NavLink>
  )
}

export default AnimeItem
