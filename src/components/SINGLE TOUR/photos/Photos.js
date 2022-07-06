import React from "react";
import styles from "./Photos.module.scss";

function Photos(props) {
  return (
    <div className={styles.allphotos}>
      <img className={styles.photo} src={props.src} alt="country"></img>
    </div>
  );
}

export default Photos;
