import React from "react"
import movies from "../movies.json";
import { MovieCard } from "../MovieCard";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from '../../styles/GrillaPeliculas.module.css';
import useSWR from "swr";
import { Peliculas } from "../../types/peliculas"; 

const fetcher = async (
    input: RequestInfo,
    init: RequestInit,
    ...args: any[]
  ) => {
    const res = await fetch(input, init);
    return res.json();
  };


const GrillaPeliculas = ()=>{
    const responsive = {
        0: { items: 2 },
        568: { items: 2 },
        1024: { items: 5 },
    };
    const response = useSWR("api/pelicula", fetcher);
    const data1 = response.data as Peliculas[];

    console.log(response.data);
    return(
        <div>
            <div className ={styles.title}><h1>Nuestra cartelera</h1></div>
            <div className = {styles.movieGrid} style={{marginLeft:"20px"}}>
                <AliceCarousel 
                    disableDotsControls
                    infinite
                    autoPlay
                    autoPlayInterval={2000}       
                    responsive={responsive}
                    controlsStrategy="alternate"

                    items={data1?.map((movie)=>{
                        return <div key={movie.idmovie} className="item"><MovieCard  movie = {movie}/></div>
                    })}               
                />
            </div>

        </div>
    )
}

export default GrillaPeliculas;