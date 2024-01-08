import style from "./AnimeInfo.module.css"
import { BsFillPlayFill } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import anime from "../../../store/anime"
import { observer } from "mobx-react-lite"
const AnimeInfo = observer(() => {
  const { id } = useParams()
  useEffect(() => {
    anime.getAnimeById(id)
  }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.anime__page}>
        <div className={style.anime__header}>
          <img src={anime.animeById.image} alt="anime" />
          <div className={style.text__block}>
            <div className={style.header__text}>
              <p className={style.title}>{anime.animeById.title}</p>
              <p className={style.alter}>
                {anime.animeById.alternativeTitles?.map((el, idx) => {
                  if (idx == 0) return el
                })}
              </p>
            </div>
            <div className={style.main__text}>
              <div className={style.main__text__el}>
                <p className={style.text__title}>Рейтинг: </p>
                <p>{anime.animeById.ranking}</p>
              </div>
              <div className={style.main__text__el}>
                <p className={style.text__title}>Эпизоды: </p>
                <p>{anime.animeById.episodes}</p>
              </div>
              <div className={style.main__text__el}>
                <p className={style.text__title}>Жанры: </p>
                <p>
                  {anime.animeById.genres.map((el) => {
                    return el + " "
                  })}
                </p>
              </div>
              <div className={style.main__text__el}>
                <p className={style.text__title}>Статус:</p>
                <p>{anime.animeById.status}</p>
              </div>
            </div>
            <div className={style.main__btns}>
              <button className={style.planned}>
                <BsFillPlayFill className={style.play} /> ЗАПЛАНИРОВАТЬ
              </button>
              <button className={style.viewed}>
                <AiFillHeart className={style.heart} /> ПРОСМОТРЕНО
              </button>
            </div>
          </div>
        </div>
        <div className={style.anime__description}>
          <p className={style.description__title}>
            <span>Описание</span> мультсериала:
          </p>
          <p className={style.description__text}>{anime.animeById.synopsis}</p>
        </div>
        <span className={style.online}>
          Смотреть аниме {anime.animeById.title} онлайн на русском
        </span>
        <div className={style.player__block}>
          <div className={style.player}>
            <span className={style.player__text}>
              Просмотр временно не доступен
            </span>
          </div>
        </div>
        <div className={style.comments__block}>
          <div className={style.comments__form}>
            <span className={style.label__form}>
              <span className={style.label__form__purple}>Добавить</span>
              коментарий:
            </span>
            <textarea className={style.textarea__form}></textarea>
            <button className={style.btn__form}>ДОБАВИТЬ КОММЕНТАРИЙ</button>
          </div>
          <div className={style.comments}>
            <div className={style.comment}>
              <p className={style.comment__author}>Username</p>
              <p className={style.comment__text}>
                Превосходный аниме вот бы смотрел его раньше
              </p>
            </div>
            <div className={style.comment}>
              <p className={style.comment__author}>Username</p>
              <p className={style.comment__text}>
                Герои классные, рисовка приятная, сюжет и задумка аниме тоже
                очень интересные, НО такие длительные описания их мыслей и
                чувств напоминают описание природы в художественных книгах:
                такое же длительное и нудное. Честно, тяжело дается это аниме
                из-за этой ВОДЫ в виде расширенного потока мыслей персонажа.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default AnimeInfo
