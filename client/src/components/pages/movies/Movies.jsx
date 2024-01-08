import TopText from "../home/TopText"
import style from "./style.module.css"
import styles from "../home/Home.module.css"
import anime from "../../../store/anime"
import AnimeItemMovie from "./AnimeItemMovie"
import { useState } from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"
const Movies = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(12)

  const nextPage = () => {
    setStart((old) => old + 12)
    setEnd((old) => old + 12)
  }
  const prevPage = () => {
    setStart((old) => old - 12)
    setEnd((old) => old - 12)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.movies__page}>
        <div className={styles.home}>
          <TopText />
        </div>
        <div className={style.main}>
          <div className={style.main_header}>
            <span className={style.purple}>Фильмы</span>
            <span>аниме</span>
          </div>
          <div className={style.list}>
            {anime.animeMovie?.map((el, idx) => {
              if (idx >= start && idx < end)
                return <AnimeItemMovie key={el._id} anime={el} />
            })}
          </div>
          <div className={style.btns}>
            <button disabled={start == 0} onClick={prevPage}>
              <AiOutlineArrowLeft className={style.arrow} />
              Prev
            </button>
            <button disabled={end == 60} onClick={nextPage}>
              Next
              <AiOutlineArrowRight className={style.arrow} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies
