import styles from "./Excursions.module.css";
import Excursion from "./Excursion";
import ExcursionsData from "../ExcursionsData";
import SingleExcursionCreate from "./createSingleExcursion";

function Executions(props) {
  return (
    <div className={styles.container} id="excursions">
      {ExcursionsData.map(Excursion)}
    </div>
  );
}

export default Executions;
