/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from "react";
import styles from "../../styles/MovieDetails.module.css";
import Menu from "../../components/Menu";
import { Footer } from '../../components/Footer';
import getMovie from "../../func/function"
import { Badge, Button, MantineProvider } from '@mantine/core';

export default function MovieDetails() {
    const router = useRouter()
    const movieId = parseInt(router.query.id as string, 10)
    const movie = getMovie(movieId);
    const imgURL = "https://image.tmdb.org/t/p/w500" + movie?.poster_path;
    return (
        <div>
            <Menu/>
            <MantineProvider
                    theme={{
                        colors: {
                        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
                        },
                    }}
                    >
                <div className={styles.movieContainer}>
                    <img className={styles.col + " " + styles.img} src={imgURL} alt={movie?.title} />
                    <div className={styles.col + " " + styles.detail}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>
                                <strong>{movie?.title}</strong>
                            </h1>
                            <div className={styles.description}>
                                <p className={styles.subTitle}>
                                    <strong>Descripción:</strong>
                                </p>
                                <p> {movie?.overview}</p>
                                <p className={styles.subTitle}>
                                    <strong>Géneros:</strong>
                                </p>
                                <div>
                                {movie?.genres.map((genre)=>{
                                                    return (
                                                        <Badge className={styles.badge} key={genre} color="bright-pink" variant="filled">{genre}</Badge>
                                                    )
                                                    })}
                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <Button color="grape" radius="lg" size="md">Comprar</Button>
                                <Button color="grape" radius="lg" size="md">Pre Compra</Button>
                            </div>
                        </div>
                    </div>
            </div>
            </MantineProvider>
            <Footer/>
        </div>
    );
    
}