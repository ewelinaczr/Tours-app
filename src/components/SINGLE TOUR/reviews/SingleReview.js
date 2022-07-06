import styles from "./SingleReview.module.scss";
import ReviewsData from "./../../ReviewsData";
import { AiOutlineStar } from "react-icons/ai";

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
          <AiOutlineStar size={20} style={{ marginRight: "0.6rem" }} />
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
