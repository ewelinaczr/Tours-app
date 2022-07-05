// import Nav from "../Nav";
import styles from "./Buy.module.css";
import React from "react";

function Buy(props) {
  return (
    <>
      <button onClick={props.onShowCart} className={styles.button}>
        Book Now
      </button>
    </>
  );
}

export default Buy;
