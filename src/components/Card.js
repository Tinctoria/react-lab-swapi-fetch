import styles from "../styles/card.module.css";

// Card that shows title and releasedate of movie, passed via props.

const Card = (props) => {
  const { title, release_date } = props;

  return (
    <div onClick={props.onClick} className={styles.card_wrapper}>
      <p>{title}</p>
      <p>{release_date}</p>
    </div>
  );
};

export default Card;
