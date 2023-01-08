import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Detail() {
  const [movies, setMovie] = useState([]);
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?&movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(id);
  return (
    <div>
      <div className={styles.movies}>
        <h1>{movies.title}</h1>
      </div>
    </div>
  );
}

export default Detail;
