import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Menu from "../components/Menu";
import styles from "../styles/App.module.css";
import dynamic from "next/dynamic";
import { SSRProvider } from "@react-aria/ssr";
const Carousel = dynamic(() => import("../components/CarouselOfertas"), {
  ssr: false,
});

const Grilla = dynamic(() => import("../components/GrillaPeliculas"), {
  ssr: false,
});
const Home: NextPage = () => {
  return (
    <SSRProvider>
      <div className={styles.App}>
        <Menu />
        <Carousel />
        <Grilla />
        <Footer />
      </div>
    </SSRProvider>
  );
};

export default Home;
