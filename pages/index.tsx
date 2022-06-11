import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import Menu from '../components/Menu'
import CarouselOfertas from '../components/CarouselOfertas'
import GrillaPeliculas from '../components/GrillaPeliculas'
import styles from '../styles/App.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
     <Menu/>
     <CarouselOfertas/>
     <GrillaPeliculas/>
     <Footer/>
    </div>
  )
}

export default Home
