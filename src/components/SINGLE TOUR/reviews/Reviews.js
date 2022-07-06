import styles from "./Reviews.module.scss";
// import SingleReview from "./SingleReview";
import ReviewsData from "./../../ReviewsData";
import SingleReviewCreate from "./createSingleReview";

function Reviews(props) {
  return (
    <div className={styles.container} id="reviews">
      <h1 className={styles.categoryName}>Turists Reviews</h1>
      {ReviewsData.map(SingleReviewCreate)}
    </div>
  );
}

export default Reviews;
