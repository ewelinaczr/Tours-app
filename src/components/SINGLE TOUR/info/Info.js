// import Nav from "../Nav";
import styles from "./Info.module.scss";
import React from "react";
import { useRef } from "react";
import Reviews from "./../reviews/Reviews";
import Hotels from "./../../SINGLE TOUR/hotels/Hotels";

function Info(props) {
  const GeneralInfoRef = useRef();
  const HotelRef = useRef();
  const ExcursionsRef = useRef();
  const ReviewsRef = useRef();

  const GeneralInfoHandler = (event) => {
    console.log(GeneralInfoRef.current);
  };

  const HotelHandler = () => {};
  const ExcursionsHandler = () => {};
  const ReviewsHandler = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <button
          className={styles.button}
          onClick={GeneralInfoHandler}
          ref={GeneralInfoRef}
        >
          General Info
        </button>
        <button className={styles.button} onClick={HotelHandler} ref={HotelRef}>
          Hotel
        </button>
        <button
          className={styles.button}
          onClick={ExcursionsHandler}
          ref={ExcursionsRef}
        >
          Excursions
        </button>
        <button
          className={styles.button}
          onClick={ReviewsHandler}
          ref={ReviewsRef}
        >
          Reviews
        </button>
      </div>
      <div className={styles.description}>
        {/* <Reviews></Reviews> */}
        <Hotels></Hotels>
        <Reviews></Reviews>
      </div>
    </div>
  );
}

export default Info;
