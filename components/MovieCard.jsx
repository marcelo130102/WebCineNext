/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import styles from "../styles/MovieCard.module.css"

export function MovieCard({movie}) {
    const imgURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    const router = useRouter()
    return <div className = {styles.movie}>
                <Image
                    width={230}
                    height={345} 
                    src = {imgURL} 
                    alt = {movie.title} 
                    className={styles.image}
                    onClick={()=>router.push("pelicula/" + movie.id)}

                />

            </div>
}