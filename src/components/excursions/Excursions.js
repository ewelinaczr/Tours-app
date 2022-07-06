import styles from "./Excursions.module.scss";
import Excursion from "./Excursion";
import ExcursionsData from "../ExcursionsData";

function Executions(props) {
  return (
    <div className={styles.container} id="excursions">
      <h1 className={styles.categoryName}>Optional Excursions</h1>
      {ExcursionsData.map(Excursion)}
    </div>
  );
}

export default Executions;
