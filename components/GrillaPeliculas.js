import React from "react"
import movies from "./movies.json";
import { MovieCard } from "./MovieCard";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from '../styles/GrillaPeliculas.module.css';



const GrillaPeliculas = ()=>{
    const responsive = {
        0: { items: 2 },
        568: { items: 2 },
        1024: { items: 5 },
    };
    
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

                    items={movies.map((movie)=>{
                        return <div key={movie.id} className="item"><MovieCard  movie = {movie}/></div>
                    })}
                    
                    
                    
                    
                />
            </div>

        </div>
    )
}

export default GrillaPeliculas;