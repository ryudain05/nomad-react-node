import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

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
    <div className={styles.movie}>
      <img className={styles.movie__img} src={movie.large_cover_image} />
      <h1>{movie.title} </h1>
      {movie.genres}
      <p>{movie.description_full}</p>
      <p>
        <Link to={"/nomad-react-node"}> Back Home </Link>
      </p>
    </div>
  );
}

export default Detail;
