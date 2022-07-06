// import Nav from "../Nav";
import styles from "./Info.module.scss";
import React from "react";
import { useRef, useContext } from "react";
import Reviews from "./../reviews/Reviews";
import Hotels from "./../../SINGLE TOUR/hotels/Hotels";
import Excursions from "./../../excursions/Excursions";
import GeneralInfo from "./../../generel Info/GeneralInfo";
import { TotalPriceContext } from "./../../../context/TotalPriceContext/TotalPriceContext";

function Info(props) {
  const GeneralInfoRef = useRef();
  const HotelRef = useRef();
  const ExcursionsRef = useRef();
  const ReviewsRef = useRef();
  const { turistsNo, basePrice, increaseGuests, decreaseGuests, totalPrice } =
    useContext(TotalPriceContext);

  const GeneralInfoHandler = (event) => {
    document.getElementById("general").scrollIntoView();
  };

  const HotelHandler = (event) => {
    document.getElementById("hotels").scrollIntoView();
  };
  const ExcursionsHandler = () => {
    document.getElementById("excursions").scrollIntoView();
  };
  const ReviewsHandler = () => {
    document.getElementById("reviews").scrollIntoView();
  };

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
        <div className={styles.settings}>
          <div className={styles.turistsno}>
            <div>
              TURISTS NO: <span>{turistsNo}</span>{" "}
            </div>
            <button className={styles.turistsbutton} onClick={increaseGuests}>
              +
            </button>
            <button className={styles.turistsbutton} onClick={decreaseGuests}>
              -
            </button>
          </div>
          <div>
            BASE PRICE: <span>${basePrice}</span> /per person{" "}
          </div>
          <div>
            TOTAL PRICE:<span> ${totalPrice}</span>
          </div>
        </div>

        <GeneralInfo />
        <Hotels></Hotels>
        <Excursions />
        <Reviews></Reviews>
      </div>
    </div>
  );
}

export default Info;
