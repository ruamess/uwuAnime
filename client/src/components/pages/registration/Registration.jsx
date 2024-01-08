import { NavLink } from "react-router-dom"
import style from "./Registration.module.css"
import { observer } from "mobx-react-lite"
import user from "../../../store/user"

const Registration = observer(() => {
  return (
    <div className={style.wrapper}>
      <div className={style.reg__page}>
        <h2>Регистрация</h2>
        <div className={style.reg__form}>
          <input
            value={user.login}
            onChange={(e) => user.changeLogin(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            type="text"
            value={user.password}
            onChange={(e) => user.changePassword(e.target.value)}
            placeholder="Password"
          />
          <span>
            Есть аккаунт ? <NavLink to={"/login"}>Войти</NavLink>
          </span>
          <button onClick={() => user.registration()}>Регистрация</button>
        </div>
      </div>
    </div>
  )
})

export default Registration
