import styles from "./Reviews.module.scss";
// import SingleReview from "./SingleReview";
import ReviewsData from "./../../ReviewsData";
import SingleReviewCreate from "./createSingleReview";

function Reviews(props) {
  return (
    <div className={styles.container} id="reviews">
      {ReviewsData.map(SingleReviewCreate)}
    </div>
  );
}

export default Reviews;
