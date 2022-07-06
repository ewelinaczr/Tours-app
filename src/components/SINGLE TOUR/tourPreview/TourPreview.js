// import Nav from "../Nav";
import styles from "./TourPreview.module.scss";
import React, { useContext } from "react";
import Photos from "./../photos/Photos";
import TitleInfo from "./../titleInfo/TitleInfo";
import Info from "./../info/Info";
import Buy from "./../buy/Buy";
import Cart from "./../../cart/Cart";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "./../../TripPreviewData";
// import { LikeContext } from "./../LikeContext/LikeContext";
import { TotalPriceContext } from "./../../../context/TotalPriceContext/TotalPriceContext";

function TourPreview(props) {
  const params = useParams();
  const { setBasePrice, turistsNo, totalPrice } = useContext(TotalPriceContext);

  const [cartIsShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };
  // console.log(props.tour.id);

  const tour = Data.find((tour) => tour.id === params.id.slice(1, 2));
  console.log();
  setBasePrice(Number(tour.cost.slice(1, 4)));

  return (
    <>
      <div className={styles.container}>
        {/* Photos panel */}
        <div className={styles.photos}>
          {tour.photos.map((el) => (
            <Photos src={el} key={Math.random()} />
          ))}
        </div>
        {/* Description Panel */}
        <div className={styles.description}>
          <TitleInfo tour={tour}></TitleInfo>
          <Info tour={tour}></Info>
          <div className={styles.button}>
            <div className={styles.priceblock}>
              <div className={styles.price}>
                <p>Total price for {turistsNo} turists:</p>
                <p className={styles.totalprice}>US$ {totalPrice}</p>
              </div>
              <Buy onShowCart={showCartHandler}></Buy>
            </div>
          </div>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
        </div>
      </div>
    </>
  );
}

export default TourPreview;
