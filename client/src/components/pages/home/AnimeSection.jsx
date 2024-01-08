import { useEffect, useState } from "react"
import styles from "./Home.module.css"
import { NavLink, Route, Routes } from "react-router-dom"
import AnimeItem from "./AnimeItem"
import { observer } from "mobx-react-lite"
import anime from "../../../store/anime"

const AnimeSection = observer(({ animeType }) => {
  const AnimeType = (animeType) => {
    if (animeType === "TV") {
      return "Сериалы"
    } else if (animeType === "Movie") {
      return "Фильмы"
    } else {
      return "ERROR"
    }
  }
  return (
    <div className={styles.anime__section}>
      <div className={styles.anime__section__header}>
        <span>
          {" "}
          <span
            style={{
              color: "#A040D3",
            }}
          >
            {AnimeType(animeType)}
          </span>{" "}
          аниме
        </span>
        <NavLink
          className={styles.anime__section__header__type}
          style={{
            color: "#A040D3",
          }}
          to={animeType == "TV" ? "/tv" : "/movies"}
        >
          {" "}
          Смотреть все {AnimeType(animeType).toLowerCase()} аниме
        </NavLink>
      </div>

      <div className={styles.anime__section__items}>
        {animeType == "TV" ? (
          <>
            {anime.animeTv.length ? (
              anime.animeTv
                .filter((anime) => anime.type === animeType)
                .slice(0, 12)
                .map((anime) => <AnimeItem anime={anime} key={anime._id} />)
            ) : (
              <p>Аниме нету</p>
            )}
          </>
        ) : (
          <>
            {anime.animeMovie.length ? (
              anime.animeMovie
                .filter((anime) => anime.type === animeType)
                .slice(0, 12)
                .map((anime) => <AnimeItem anime={anime} key={anime._id} />)
            ) : (
              <p>Аниме нету</p>
            )}
          </>
        )}
      </div>
    </div>
  )
})

export default AnimeSection
