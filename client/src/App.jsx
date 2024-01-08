import { NavLink, Route, Routes } from "react-router-dom"
import styles from "./components/ui/styles/Wrapper.module.css"
import Home from "./components/pages/home/Home"
import NavBar from "./components/ui/navbar/NavBar"
import FooterInfo from "./components/ui/footer/FooterInfo"
import AnimeSearchInput from "./components/ui/input/AnimeSearchInput"
import More from "./components/ui/button/More"
import styleChange from "./components/ui/button/styleChange"
import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import AnimeInfo from "./components/pages/animeInfo/AnimeInfo"
import Registration from "./components/pages/registration/Registration"
import Login from "./components/pages/login/Login"
import Profile from "./components/pages/profile/Profile"
import anime from "./store/anime"
import Movies from "./components/pages/movies/Movies"
import Tv from "./components/pages/tv/Tv"

const App = observer(() => {
  useEffect(() => {
    anime.getAnimeMovie()
    anime.getAnimeTv()
  }, [])

  if (styleChange.count == true) {
    document.body.style.overflowY = "hidden"
  } else {
    document.body.style.overflowY = "auto"
  }

  return (
    <div
      className={styleChange.count == true ? styles.wrapper : styles.wrapper}
    >
      <div
        className={
          styleChange.count == true
            ? styles.overlay__visible
            : styles.overlay__hidden
        }
        onClick={() => styleChange.returnStyle()}
      />
      <More />
      <NavBar />
      <AnimeSearchInput />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/anime/:id" element={<AnimeInfo />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
      </Routes>
      <FooterInfo />
    </div>
  )
})

export default App
