import { useState } from "react"
import style from "./Profile.module.css"

const Profile = () => {
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)

  return (
    <div className={style.wrapper}>
      <div className={style.profile__page}>
        <span className={style.watch__profile}>Просмотр профиля</span>
        <div className={style.profile__header}>
          <div className={style.profile__user}>
            <span className={style.username}>Username</span>
          </div>
          <div className={style.profile__info}>
            <div className={style.status}>В сети</div>
            <span>Comments: 0</span>
          </div>
        </div>
        <div className={style.profile__main}>
          <ul className={style.nav}>
            <li
              onClick={() => {
                setActive1(true)
                setActive2(false)
              }}
              className={`${style.nav__item} ${active1 ? style.active : ""}`}
            >
              Просмотрено
            </li>
            <li
              onClick={() => {
                setActive1(false)
                setActive2(true)
              }}
              className={`${style.nav__item} ${active2 ? style.active : ""}`}
            >
              Запланировано
            </li>
          </ul>
          <div>
            {active1 ? (
              <>
                <div className={style.all__anime}>
                  <span>Пусто ...</span>
                </div>
              </>
            ) : (
              <></>
            )}
            {active2 ? (
              <>
                <div className={style.all__anime}>
                  <span>Пусто ...</span>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
