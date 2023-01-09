import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?&movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(id);
  return (
    <div>
      <h1 className={styles.movie__title}> {movie.title} </h1>
      <img className={styles.movie__img} src={movie.large_cover_image} />
      <p>{movie.description_full}</p>
      <ul className={styles.movie__genres}>{movie.genres}</ul>
      <h2 className={styles.movie__title}>
        <Link to={"/nomad-react-node"}> Back Home </Link>
      </h2>
    </div>
  );
}

export default Detail;
