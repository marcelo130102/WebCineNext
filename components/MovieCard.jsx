/* eslint-disable @next/next/no-img-element */
import { Link } from "react-router-dom";
import styles from "../styles/MovieCard.module.css"

export function MovieCard({movie}) {
    const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <div className = {styles.movie}>
            <Link to ={"movie/" + movie.id}>
                <img
                    width={230}
                    height={345} 
                    src = {imgURL} 
                    alt = {movie.title} 
                    className={styles.image}

                />
            </Link>
            </div>
}