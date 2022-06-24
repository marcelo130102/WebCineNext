/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import styles from "../styles/MovieCard.module.css"

export function MovieCard({movie}) {
    const imgURL = movie.url_table;
    const router = useRouter()
    return <div className = {styles.movie}>
                <Image
                    src = {imgURL} 
                    width={230}
                    height={345} 
                    alt = {movie.name} 
                    className={styles.image}
                    onClick={()=>router.push("pelicula/" + movie.idmovie)}

                />

            </div>
}