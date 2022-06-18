import dynamic from "next/dynamic";
import { Footer } from "../../components/Footer";
import Menu from "../../components/Menu";
import Head from 'next/head';
import getMovie from "../../func/function";
import { useRouter } from "next/router";
import { MovieCard } from "../../components/MovieCard";

export default function Compra(props:any) {
  const Grilla = dynamic(() => import("../../components/FormularioCompra"), {
    ssr: false,
  });
  const router = useRouter();
  const movieId = parseInt(router.query.id as string, 10);
  const movie = getMovie(movieId);

  return(<>
    <Head>
      <title>Comprar entrada</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Menu />
    <Grilla img = {movie?.poster_path} title={movie?.title} idPelicula={movieId} preCompra={movie?.preEstreno}/>
    <Footer/>
  </>)
}
