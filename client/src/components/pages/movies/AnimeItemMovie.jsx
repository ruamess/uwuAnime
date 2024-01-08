import { useState } from "react"
import { NavLink, Route, Routes } from "react-router-dom"
import { HiOutlinePlay } from "react-icons/hi2"
import style from "./style.module.css"

function AnimeItemMovie({ anime }) {
  return (
    <NavLink to={`/anime/${anime._id}`}>
      <div className={style.anime__item}>
        <div className={style.anime__item__image}>
          <img src={anime.image} />
          <div className={style.anime__image__overlay}>
            <HiOutlinePlay style={{ fontSize: 60 }} />
          </div>
        </div>
        <div className={style.anime__item__name}>
          <span className={style.anime__item__title}>{anime.title}</span>
        </div>
      </div>
    </NavLink>
  )
}

export default AnimeItemMovie
