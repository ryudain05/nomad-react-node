import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  });
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  console.log(id);
  return (
    <div>
      {loading ? (
        <h1 className={styles.movies}>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
