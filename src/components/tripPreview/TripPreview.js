import { Link } from "react-router-dom";
// STYLES
import styles from "./TripPreview.module.scss";
// COMPONENTS
import Labels from "./../labels/Labels";

function TripPreview(props) {
  return (
    <div className={styles["tour-preview"]}>
      <div className={styles["tour-photo"]}>
        <Labels
          bestseller={props.bestseller}
          lastMinute={props.lastMinute}
          id={props.id}
        />
        <Link to={`/single-tour/:${props.id}`}>
          <img
            className={styles["tour-image"]}
            src={props.photo}
            alt="county"
          ></img>
        </Link>
      </div>
      <div className={styles["tour-description"]}>
        <h1 className={styles["tour-destination"]}>{props.destination}</h1>
        <h2 className={styles["tour-rating"]}>
          <i className={styles["fas fa-light fa-star"]}></i>
          {props.rating}
        </h2>
      </div>
    </div>
  );
}

export default TripPreview;
