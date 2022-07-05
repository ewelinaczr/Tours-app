import "./TripPreview.css";
import Labels from "./../labels/Labels";
import { Link } from "react-router-dom";

function TripPreview(props) {
  return (
    <div className="tour-preview">
      <div className="tour-photo">
        <Labels
          bestseller={props.bestseller}
          lastMinute={props.lastMinute}
          id={props.id}
        />
        <Link to={`/single-tour/:${props.id}`}>
          <img className="tour-image" src={props.photo} alt="county"></img>
        </Link>
      </div>
      <div className="tour-description">
        <h1 className="tour-destination">{props.destination}</h1>
        <h2 className="tour-rating">
          <i className="fas fa-light fa-star"></i>
          {props.rating}
        </h2>
      </div>
    </div>
  );
}

export default TripPreview;
