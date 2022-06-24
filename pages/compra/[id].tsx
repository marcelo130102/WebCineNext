import useSWR from "swr";
import { Peliculas } from "../../types/peliculas"; 

import dynamic from "next/dynamic";
import { Footer } from "../../components/Footer";
import Menu from "../../components/Menu";
import Head from 'next/head';
import getMovie from "../../func/function";
import { useRouter } from "next/router";
import { MovieCard } from "../../components/MovieCard";


const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init);
  return res.json();
};

export default function Compra(props:any) {  
  const Grilla = dynamic(() => import("../../components/FormularioCompra"), {
    ssr: false,
  });
  const router = useRouter();
  const movieId = parseInt(router.query.id as string, 10);
  const response = useSWR("/api/pelicula/" + movieId, fetcher);
  const movie = response.data as Peliculas;

  const imgURL = movie?.url_table;

  return(<>
    <Head>
      <title>Comprar entrada</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Menu />
    <Grilla img = {imgURL} title={movie?.name} idPelicula={movieId} preCompra={movie?.preEstreno}/>
    <Footer/>
  </>)
}
