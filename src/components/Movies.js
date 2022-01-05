import Card from "./Card";
import Details from "./Details";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import styles from "../styles/wrapper.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [isShowing, setIsShowing] = useState(false);

  const [loading, setLoading] = useState(true);

  const [characters, setCharacters] = useState([]);

  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_inner}>
        <Loading loading={loading} color={"white"} />
        {movies.map((movie) => (
          <Card
            onClick={() => {
              setCharacters(movie.characters);
              setIsShowing(true);
              setTitle(movie.title);
            }}
            key={movie.episode_id}
            title={movie.title}
            release_date={movie.release_date}
            characters={movie.characters}
          />
        ))}

        <Details
          characters={characters}
          title={title}
          showing={isShowing}
          stopShowing={() => {
            setCharacters([]);
            setIsShowing(false);
          }}
        />
      </div>
    </div>
  );
};

export default Movies;
