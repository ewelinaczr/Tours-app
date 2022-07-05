import SingleReview from "./SingleReview";

function SingleReviewCreate(object) {
  return (
    <SingleReview
      key={object.id}
      id={object.id}
      photo={object.photo}
      user={object.user}
      rating={object.rating}
      review={object.review}
    ></SingleReview>
  );
}

export default SingleReviewCreate;
