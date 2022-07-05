import styles from "./SingleReview.module.scss";
import ReviewsData from "./../../ReviewsData";

console.log(ReviewsData[0]);

function SingleReview(props) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.photo} src={props.photo} alt="user photo"></img>
      </div>
      <div>
        <p>{props.user}</p>
        <div className={styles.rating}>
          <i className="fas fa-regular fa-star fa-4x"></i>
          <p>{props.rating}</p>
        </div>
      </div>
      <div>
        <p>{props.review}</p>
      </div>
    </div>
  );
}

export default SingleReview;
