/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import poster1 from "../public/poster1.jpg";
import poster2 from "../public/poster2.jpg";
import poster3 from "../public/poster3.jpg";
import poster4 from "../public/poster4.png";
import styles from "../styles/CarouselOfertas.module.css";


export default function CarouselOfertas(){
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 1 },
    };
    
    const itemsImg = [
        <div key ={1} className={styles.carousel}><Image src={poster1} alt="Poster 1"/></div>,
        <div key ={2} className={styles.carousel}><Image src={poster2} alt="Poster 2"/></div>,
        <div key ={3} className={styles.carousel}><Image src={poster3} alt="Poster 2"/></div>,
        <div key ={4} className={styles.carousel}><Image src={poster4} alt="Poster 2"/></div>]

    return(
        <div>
            <h1 className={styles.title}>Nuestras promociones</h1>
                <AliceCarousel 
                    disableButtonsControls
                    autoPlay
                    infinite
                    responsive={responsive}
                    autoPlayInterval={2000}       
                    controlsStrategy="alternate"
                    items={itemsImg}/>
        </div>
    )
}