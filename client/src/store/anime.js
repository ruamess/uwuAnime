import { makeAutoObservable } from "mobx"

class Anime {
  constructor() {
    makeAutoObservable(this)
  }
  animeTv = []
  animeMovie = []
  allAnime = []
  animeById = {}

  getAnimeTv() {
    fetch("http://localhost:5000/anime/getAnimeByType", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "TV" }),
    })
      .then((data) => data.json())
      .then((data) => {
        this.animeTv = data
      })
  }

  getAnimeMovie() {
    fetch("http://localhost:5000/anime/getAnimeByType", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "Movie" }),
    })
      .then((data) => data.json())
      .then((data) => {
        this.animeMovie = data
        console.log(data.length)
      })
  }

  getAnimeById(id) {
    fetch("http://localhost:5000/anime/" + id)
      .then((data) => data.json())
      .then((data) => {
        this.animeById = data
      })
  }
}

export default new Anime()
