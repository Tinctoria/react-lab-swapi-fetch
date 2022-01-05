import "../styles/loading.module.css";
import styles from "../styles/loading.module.css";

const Loading = (props) => {
  const { loading, color } = props;
  if (!loading) return null;

  console.log(color);

  const style = {
    color: color,
  };

  return (
    <div className={styles.loading_style}>
      <p style={style}>Please wait while we're loading data</p>
      <div className={styles.loader}>
        <div className={styles.ls_particles + " " + styles.ls_part_1}></div>
        <div className={styles.ls_particles + " " + styles.ls_part_2}></div>
        <div className={styles.ls_particles + " " + styles.ls_part_3}></div>
        <div className={styles.ls_particles + " " + styles.ls_part_4}></div>
        <div className={styles.ls_particles + " " + styles.ls_part_5}></div>
        <div
          className={
            styles.lightsaber + " " + styles.ls_left + " " + styles.ls_green
          }
        ></div>
        <div
          className={
            styles.lightsaber + " " + styles.ls_right + " " + styles.ls_red
          }
        ></div>
      </div>
    </div>
  );
};

export default Loading;
