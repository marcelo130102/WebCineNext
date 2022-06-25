import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Menu from "../components/Menu";
import styles from "../styles/App.module.css";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("../components/CarouselOfertas"), {
  ssr: false,
});

const Grilla = dynamic(() => import("../components/GrillaPeliculas"), {
  ssr: false,
});
const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Inicio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <Carousel />
      <Grilla />
      <Footer />
    </div>
  );
};

export default Home;
