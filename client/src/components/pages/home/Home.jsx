import { useEffect, useState } from "react"
import styles from "./Home.module.css"
import TopText from "./TopText"
import AnimeSection from "./AnimeSection"
import FooterText from "./FooterText"
import anime from "../../../store/anime"

function Home() {
  return (
    <div className={styles.home}>
      {/* <More /> */}
      <TopText />
      <AnimeSection animeType={"TV"} animeData={anime.animeTv} />
      <AnimeSection animeType={"Movie"} animeData={anime.animeMovie} />
      <FooterText />
    </div>
  )
}

export default Home
