import { makeAutoObservable } from "mobx"

class User {
  constructor() {
    makeAutoObservable(this)
  }

  login = ""
  password = ""

  changeLogin(text) {
    this.login = text
  }
  changePassword(text) {
    this.password = text
  }

  registration() {
    fetch("http://localhost:5000/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: this.login, password: this.password }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data)
        console.log(this.login)
        console.log(this.password)
      })
  }
}

export default new User()
