import { makeAutoObservable } from "mobx"

class styleChange {

  count = false
  constructor() {
    makeAutoObservable(this)
  }

  changeStyle() {
    this.count = true
    // console.log('aa')
  }
  returnStyle() {
    this.count = false
    // console.log('бб')
  }
}

export default new styleChange()