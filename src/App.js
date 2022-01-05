import Movies from "./components/Movies";
import styles from "./styles/wrapper.module.css";
import "./App.css";
function App() {
  return (
    <div className={styles.wrapper}>
      <Movies />
    </div>
  );
}

export default App;
