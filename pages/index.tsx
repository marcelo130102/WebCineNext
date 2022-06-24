import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import Menu from "../components/Menu";
import styles from "../styles/App.module.css";
import dynamic from "next/dynamic";
//import PrismaClient from '../../../prisma/schema.prisma';
const Carousel = dynamic(() => import("../components/CarouselOfertas"), {
  ssr: false,
});

const Grilla = dynamic(() => import("../components/GrillaPeliculas"), {
  ssr: false,
});
const Home: NextPage = () => {
  return (
      <div className={styles.App}>
        <Menu />
        <Carousel />
        <Grilla />
        <Footer />
      </div>
  );
};



// Fetch posts from authenticated user 
// (in /pages/index.tsx)



// Display list of posts (in /pages/index.tsx)



export default Home;
