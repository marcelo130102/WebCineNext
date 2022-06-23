/* eslint-disable @next/next/no-img-element */
import useSWR from "swr";
import { Peliculas } from "../../types/peliculas"; 

import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/MovieDetails.module.css";
import Menu from "../../components/Menu";
import { Footer } from "../../components/Footer";
import getMovie from "../../func/function";
import { Badge, Button, MantineProvider } from "@mantine/core";
import Head from "next/head";


const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};





export default function MovieDetails() {
  const router = useRouter();
  const movieId = parseInt(router.query.id as string, 10);
  
  const response = useSWR("/api/pelicula/" + movieId, fetcher);
  const movie = response.data as Peliculas;

  const imgURL = movie?.url_table;
  function comprar() {
    router.push(`/compra/${movieId}`);
  }
  return (
    <div>
      <Head>
        <title>Detalles - {movie?.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <MantineProvider
        theme={{
          colors: {
            "bright-pink": [
              "#F0BBDD",
              "#ED9BCF",
              "#EC7CC3",
              "#ED5DB8",
              "#F13EAF",
              "#F71FA7",
              "#FF00A1",
              "#E00890",
              "#C50E82",
              "#AD1374",
            ],
          },
        }}
      >
        <div className={styles.movieContainer}>
          <img
            className={styles.col + " " + styles.img}
            src={imgURL}
            alt={movie?.name}
          />
          <div className={styles.col + " " + styles.detail}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                <strong>{movie?.name}</strong>
              </h1>
              <div className={styles.description}>
                <p className={styles.subTitle}>
                  <strong>Descripción:</strong>
                </p>
                <p> {movie?.description}</p>
                <p className={styles.subTitle}>
                  <strong>Géneros:</strong>
                </p>
                <div>
                  {/*movie?.genres.map((genre) => {
                    return (
                      <Badge
                        className={styles.badge}
                        key={genre}
                        color="bright-pink"
                        variant="filled"
                      >
                        {genre}
                      </Badge>
                    );
                  })*/}
                </div>
              </div>
              <div className={styles.buttons}>
                <Button style={{ backgroundColor: "#bf00ff" }} radius="lg" size="md" onClick={comprar}>
                  Comprar
                </Button>

                <Button style={{ backgroundColor: "#bf00ff" }} radius="lg" size="md" onClick={()=>router.back()}>
                  Regresar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MantineProvider>
      <Footer />
    </div>
  );
}
