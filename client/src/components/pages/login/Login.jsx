import { NavLink } from "react-router-dom"
import style from "./Login.module.css"

const Login = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.reg__page}>
        <h2>Авторизация</h2>
        <div className={style.reg__form}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <span>
            Нет аккаунта ? <NavLink to={"/reg"}>Создать</NavLink>
          </span>
          <button>Войти</button>
        </div>
      </div>
    </div>
  )
}

export default Login
