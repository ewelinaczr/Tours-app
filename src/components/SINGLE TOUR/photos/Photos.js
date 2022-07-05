import React from "react";
import styles from "./Photos.module.scss";

// console.log(Data[0].photos);
// console.log(Data[0].photos[0]);

function Photos(props) {
  return (
    <div className={styles.allphotos}>
      <img className={styles.photo} src={props.src} alt="country"></img>
    </div>
  );
}

export default Photos;
