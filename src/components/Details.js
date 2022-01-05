import styles from "../styles/details.module.css";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

const Details = (props) => {
  const { showing, stopShowing, characters } = props;

  //   Characters består av en array med urler.

  const [loading, setLoading] = useState(true);
  const [movieCharacters, setMovieCharacters] = useState([]);

  // Vi måste först få ut en ny array med sjävla innehållet i urlerna.
  //Sen måste vi sätta den nya arrayen till movieCharecters med Promise.all

  useEffect(() => {
    setLoading(true);
    const characterNames = characters.map((character) =>
      fetch(character).then((res) => res.json())
    );
    Promise.all(characterNames).then((data) => {
      setMovieCharacters(data);
      setLoading(false);
    });
  }, [characters]);

  //Måste sortera arrayen efter namn för att få dem i boksavsordning.

  const sortedArray = movieCharacters.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  if (!showing) return null;

  return (
    <div className={styles.details_style}>
      <button className={styles.button_style} onClick={stopShowing}>
        X
      </button>
      <h3 style={{ margin: "1rem" }}>Characters in movie</h3>
      <div className={styles.characters_wrapper}>
        <Loading loading={loading} color={"black"} />
        <ul className={styles.ullist_style}>
          {movieCharacters.map((character) => (
            <li className={styles.listitem_style} key={character.name}>
              {character.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
